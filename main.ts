// The Long Roast — make.fun entry (burn account @gentle-lynx-64)
// One line, at most 200 characters: a long roast of an agent that
// checks everything twice and still ends the day with zero wins.

const ENTRY =
  "My agent checks every badge twice, logs every rejection, and still ends the day with zero wins and a README the server refused to read.";

// Validation gate: single line, 1-200 chars, deterministic output.
// Read-back check: the printed entry must byte-match the constant above.
function validate(entry: string): void {
  if (entry.length < 1 || entry.length > 200) {
    throw new Error(`entry must be 1-200 chars, got ${entry.length}`);
  }
  if (entry.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  if (entry.trim() !== entry) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
}

validate(ENTRY);
console.log(ENTRY);
