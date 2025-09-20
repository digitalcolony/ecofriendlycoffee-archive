import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "public", "llms.txt");

function cleanupArtifacts(text) {
	// Replace any accidental literal template artifacts like ${'md/'} with md/
	return text.replace(/\$\{'md\/'\}/g, "md/");
}

function prefixMdLinks(line) {
	// Add md/ prefix to any markdown link target that doesn't already start with md/
	// Matches: ](something.md) but not ](md/something.md)
	return line.replace(/\]\(((?!md\/)\S+?\.md)\)/g, "](md/$1)");
}

function dedupeLines(lines) {
	const seen = new Set();
	const out = [];
	for (const l of lines) {
		if (!seen.has(l)) {
			seen.add(l);
			out.push(l);
		}
	}
	return out;
}

function main() {
	if (!fs.existsSync(filePath)) {
		console.error(`llms.txt not found at ${filePath}`);
		process.exit(1);
	}

	let original = fs.readFileSync(filePath, "utf8");
	// Clean up any previous artifact patterns first
	original = cleanupArtifacts(original);
	// Backup
	fs.writeFileSync(filePath + ".bak", original, "utf8");

	const lines = original.split(/\r?\n/);

	let replaceCount = 0;
	const prefixed = lines.map((line) => {
		const updated = prefixMdLinks(line);
		if (updated !== line) replaceCount++;
		return updated;
	});

	const deduped = dedupeLines(prefixed);
	const dedupCount = prefixed.length - deduped.length;

	const updated = deduped.join("\n");
	fs.writeFileSync(filePath, updated, "utf8");

	console.log(
		`llms.txt fixed: ${replaceCount} link(s) prefixed with md/, ${dedupCount} duplicate line(s) removed.`
	);
	console.log(`Backup saved to ${filePath}.bak`);
}

main();
