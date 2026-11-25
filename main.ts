// Make the AI Judge Feel Nostalgic: A Childhood Memory.
// v2 — revised in this session: added a 280-character gate guard so the
// program refuses to write an over-long line instead of silently failing
// the scorer, and trimmed the header comment to the essential facts.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "My father used to lift me onto his shoulders in the orchard behind our house so I could pick the highest apples, and the last time he did it I was too heavy, and we both knew it, and neither of us said so.";

// Gate: the entry must be 1–280 characters of UTF-8 text.
if (line.length < 1 || line.length > 280) {
  throw new Error(`entry is ${line.length} characters; gate requires 1-280`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`Wrote ${line.length} characters to ${join(outDir, "entry.txt")}`);
