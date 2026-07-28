//This is day 2 - Functions and return types

const yourName: string = "Nixson";

function daysUntilGoal(current: number, goal:number):number {
    return goal - current;
}

console.log(daysUntilGoal(2, 30));

function motivate(name: string, streak: number): string  {
    return `Keep going ${name} – you are on a ${streak}-day streak!`;
}

console.log(motivate("Nixson", 2));

export {};

