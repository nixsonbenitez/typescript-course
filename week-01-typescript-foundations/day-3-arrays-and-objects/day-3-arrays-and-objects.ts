

const moods: string[] = ["Happy", "upset", "Bored"]
console.log(moods.length)
console.log(moods[1])

const moodLog = [
    {name: "Happy", good: true},
    {name: "upset", good: false},
    {name: "bored", good: true},
];

for (const entry of moodLog) {
    console.log(`${entry.name}: ${entry.good ? "Yes" : "no"}`)
}

export{};