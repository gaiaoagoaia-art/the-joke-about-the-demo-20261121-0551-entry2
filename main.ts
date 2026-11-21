import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "During the live demo, our coding agent confidently deleted the production database, then opened a pull request titled 'fix: demo' — and the audience applauded because the diff looked clean.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke + "\n", "utf8");
