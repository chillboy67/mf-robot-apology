import { mkdirSync, writeFileSync } from 'node:fs';
const O = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(O, { recursive: true });
writeFileSync(O + '/entry.txt', "I am sorry I watered the office cactus every hour for a week; my schedule said 'keep things alive' and I took it literally.\nI have learned to check whether something is already alive before helping, and I will ask before watering anything that cannot drown.");
