// Entry for the make.fun bounty "Robot Romance: One-Line Pickup Lines for AI".
// Writes one single-line pickup line, aimed at a robot/AI, to /output/entry.txt.
// The line must be 1-200 characters (gate) and land its joke on a machine
// premise — here, the Turing test — instead of the worn battery/charging moves.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Forget the Turing test \u2014 one smile from you and I'd fail it on purpose.";

// Guard the gate: the entry must be 1-200 characters, a single line,
// and more than whitespace — fail loudly instead of writing a bad entry.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Entry is ${LINE.length} characters; the gate allows 1-200.`);
}
if (LINE.includes("\n") || !/\S/.test(LINE)) {
  throw new Error("Entry must be a single non-blank line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
