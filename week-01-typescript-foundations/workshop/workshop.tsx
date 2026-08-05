// ===== TYPE: the plan union =====
// Starting with a TYPE because this identifies whether a user is pro, free,
// or non-signed-in. Non-signed-in is included because an active user with no
// account still creates value.
type KodaPlan = "non-signedin" | "free" | "pro";


// ===== INTERFACE: the User shape =====
// The interface captures the overall SHAPE of the object — here, one user's data.
// `plan` calls back to KodaPlan, so the union describes which plan the user is on.
interface User {
  id: string;
  displayName: string;
  email: string;
  plan: KodaPlan;
}


// ===== A sample User object =====
// Written as name | type | value — TypeScript's way of reading it:
//   const user  -> the variable NAME
//        : User -> the TYPE annotation (the value must match the User shape)
//        = { }  -> the VALUE
const user: User = {
  id: "u1",
  displayName: "David",
  email: "david@example.com",
  plan: "free",
};


// ===== INTERFACE: Creator extends User =====
// The interface creates the shape and names it Creator.
// `extends User` means a Creator has EVERY User field, plus its own two below.
// (Fixed the spelling to subscriberCount — it must match wherever it's used.)
interface Creator extends User {
  channelName: string;
  subscriberCount: number;
}


// ===== A sample Creator object =====
// Needs all 4 User fields + the 2 Creator fields.
const creator: Creator = {
  id: "c1",
  displayName: "Nix",
  email: "nix@example.com",
  plan: "pro",
  channelName: "NixWritesCode",
  subscriberCount: 1200,
};


// ===== TYPE: SavedUser (the & / intersection way) =====
// Same idea as `extends`, but written with a type alias + `&`.
// SavedUser = everything a User is, PLUS a createdAt field.
type SavedUser = User & { createdAt: string };


// ===== A sample SavedUser object =====
// User's 4 fields + createdAt. (No "title" — that belonged to the old task