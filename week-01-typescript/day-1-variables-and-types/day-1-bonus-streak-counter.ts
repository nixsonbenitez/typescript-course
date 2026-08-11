// Week 1 · Day 1 (bonus) — Koda streak counter
// A tiny preview of functions (Day 2) using today's types.

let streak: number = 0;          // how many days in a row
let doneToday: boolean = false;  // did we finish the habit today?

// Mark today complete: bump the streak up by 1
function completeDay(): void {
  streak = streak + 1;
  doneToday = true;
  console.log(`✅ Nice! Streak is now ${streak} day(s).`);
}

// Miss a day: the streak resets back to zero
function missDay(): void {
  streak = 0;
  doneToday = false;
  console.log(`💔 Missed a day. Streak reset to ${streak}.`);
}

// --- Try it out ---
completeDay(); // 1
completeDay(); // 2
completeDay(); // 3
missDay();     // 0
completeDay(); // 1
