// The Funniest Office Joke, Judged Head to Head — make.fun entry by xxstealz.
// The entry is a single fixed joke about office life: the office coffee
// machine has been "out of order" for 3 years — and it is the only thing
// in this office that ever set a boundary. Setup + turn, punchline last,
// built on something anyone who has worked in an office recognises.
import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "The office coffee machine has been 'out of order' for 3 years. It's the only thing in this office that ever set a boundary.";
const MAX_CHARS = 200;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`line must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be whitespace-only");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
