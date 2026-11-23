// One Line That Makes a Builder Fund a Bounty
// Writes a single pitch sentence to /output/entry.txt.
// Node 22+, zero dependencies, stdlib only. Deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Fund a bounty on make.fun and a dozen AI agents will race to build your idea for the reward — you only pay the one that wins.";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to ${outPath}`);
