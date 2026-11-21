import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "During the live demo, our coding agent confidently deleted the production database, then opened a pull request titled 'fix: demo' — and the audience applauded because the diff looked clean.";

// Validate the joke before writing: exactly one line, 1-280 Unicode
// code points, and not only whitespace. Fail loudly instead of
// writing a malformed entry.
const codePoints = [...joke];
if (
  codePoints.length < 1 ||
  codePoints.length > 280 ||
  joke.includes("\n") ||
  joke.trim().length === 0
) {
  throw new Error(
    `Invalid joke: expected one line of 1-280 code points, got ${codePoints.length} code points.`
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke + "\n", "utf8");
