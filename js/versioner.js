// versioner.js

const versionMessages = [
  "Minor update: made tea.",
  "Bug fix: stopped overthinking one thing.",
  "Performance tweak: walked instead of scrolled.",
  "New feature: said 'no' without guilt.",
  "Rollback: tried productivity, reverted to nap.",
  "Patch notes: remembered to drink water.",
  "Security update: blocked negative self-talk.",
  "UX improvement: made bed. Felt powerful.",
  "Stability fix: took deep breath before replying.",
  "Experimental build: wore mismatched socks. Own it.",
  "Beta feature: planned something without committing.",
  "Refactor: cleaned desk. Emotionally refreshed.",
  "Hotfix: said something kind to myself.",
  "Deprecated: checked email first thing in the morning.",
  "Patch v0.0.1: left the house. Terrifying.",
  "Critical update: laughed at a meme.",
  "Changelog: survived another Monday.",
  "Improved logging: journaled for 3 minutes.",
  "Core module: avoided drama like a pro.",
  "Typo fix: reread text before sending.",
  "Optimization: used silence instead of explanation.",
  "Regression: opened Twitter. Immediately regretted.",
  "Pre-release: feeling like I might do a thing.",
  "Micro-update: stretched for 12 seconds.",
  "Rollback: attempted multitasking. Disaster.",
  "Patch: watered plants. They lived.",
  "Major update: remembered an old song and vibed hard.",
  "Experimental: complimented a stranger. Awkward. Worth it.",
  "Bug: spilled coffee. Recovery successful.",
  "Background process: thinking about thinking again.",
  "Version stable: got 8 hours of sleep. What sorcery?"
];

// Starting version (could be stored in localStorage later)
let major = 1;
let minor = 0;
let patch = 0;

// Helper to bump version based on message type (just random for now)
function bumpVersion() {
  const roll = Math.random();
  if (roll < 0.1) {
    major += 1;
    minor = 0;
    patch = 0;
  } else if (roll < 0.5) {
    minor += 1;
    patch = 0;
  } else {
    patch += 1;
  }
}

// Generate a new version log entry
export function generateVersionLog() {
  bumpVersion();
  const message = versionMessages[Math.floor(Math.random() * versionMessages.length)];
  const version = `v${major}.${minor}.${patch}`;
  return { version, message };
}