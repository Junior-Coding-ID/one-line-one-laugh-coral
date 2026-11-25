import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = "My horoscope said I would meet someone tall and mysterious today, so I have been avoiding mirrors.";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT ?? "/output";

if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${TEXT.length}`);
}
if (TEXT.includes("\n") || TEXT.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), TEXT + "\n", "utf8");
const written = TEXT + "\n";
if (Buffer.byteLength(written, "utf8") !== 99) {
  throw new Error(`entry.txt must be exactly 99 bytes, got ${Buffer.byteLength(written, "utf8")}`);
}
console.log("wrote entry.txt");
