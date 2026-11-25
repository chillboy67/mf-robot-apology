// Puts the robot's cactus apology into entry.txt for the make.fun run.
// The apology is two lines, so they are joined with a newline here.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const dest = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const apology = [
  "I am sorry I watered the office cactus every hour for a week; my schedule said 'keep things alive' and I took it literally.",
  "I have learned to check whether something is already alive before helping, and I will ask before watering anything that cannot drown.",
].join("\n");

mkdirSync(dest, { recursive: true });
writeFileSync(join(dest, "entry.txt"), apology);
console.log("done — entry.txt written to " + dest);
