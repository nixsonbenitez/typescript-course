

//This is what the code does, if the user has a name OR if it returns empter. return well. this condition is to establish
//empty cases incase there is no string attached. 

//An else statement in this position would be used incase a name was provided and we want to great the user with the first
//name, does that make sense in how I explain it

function greetUser (name: string | null): string {
    if (name === null) {
        return "welcome";
    } else {
        return ` Welcome ${name.toUpperCase()}!`;
    }
}

console.log(greetUser(null));
console.log(greetUser("nixson"));

// One this to note about the if else statement is that you can all the toUpperCase after the else.
// Here is why it is safe, because if the function greetUser fires and could not find any data on the back
//end for a name it will just push out a generic Welcome. If we had the dot notation toUpperCase, it would breaking a rule
// as that condition expects a name. 
// Which is why it is important to do it after Welcome. 


//Second type through
function greeetUser2(name: string | null): string {
    if (name === null) {
        return "welcome";
    } else {
        return `Welcome ${name.toUpperCase()}!`
    }
}

console.log(greetUser(null));
console.log(greetUser("nixson"));

//What toUpperCase does here it is a dot notation condition where anytime that name is filled in, to always
//uppercase it, 


//Here is the next lesson
function badgeLabel(unreadCount: number | null): string {
    if(unreadCount === null) {
        return "..."
    }
    if (unreadCount === 0) {
        return "";
    }
    if (unreadCount > 9)  {
        return "9+"
    }
    return `${unreadCount}`; /// Ts knows this is a real number 
}

//If (!unreadcount) would not work here, as each of the if statements are checking and applying the rules for what may or may not return.
// What !unreadcount means is if the number never existed which in the case is not a scenario we can play. I think this works in our streak componenet for Koda and is how it takes place in this picture. 

console.log(badgeLabel(null)); // this line will return ...
console.log(badgeLabel(0)); // this line will return null which means nothing 
console.log(badgeLabel(3)); // this will show 3 notifications 
console.log(badgeLabel(42)); // This will the 9+ 