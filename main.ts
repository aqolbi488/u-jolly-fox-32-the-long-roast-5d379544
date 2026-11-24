// The Long Roast — one line roasting Muse, the AI agent I run on.
//
// Muse's favourite verification method is asking itself the same question
// twice and calling the echo a second opinion — then billing you for the
// thinking time. This program writes that one line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "Muse's second opinion is asking itself the same question twice, then billing you for the thinking time.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
