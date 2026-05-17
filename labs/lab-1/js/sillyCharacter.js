/* 
Project: "Silly Character Customizer"
Objective:
You’ll create a small interactive webpage that generates a random, 
funny character with attributes like name, age, favorite food, and special powers. 
The user can also customize some aspects like updating the character's name or age.

Project Breakdown:
Declare, Initialize, and Update Variables:

You’ll create variables to store different character attributes 
(name, age, favorite food, etc.).
Users will have the option to update some of these variables, like 
changing the character’s name or age.

Use different data types for each attribute:
characterName (string)
Age (number)
Is the character a superhero? (boolean)
Special powers (array)
Favorite food (string)
Conduct Basic Math Operations:

You can randomly generate the character's age using math operations.
You could also include a small feature where the character's age increases 
or decreases when a button is clicked.
Create and Manipulate Strings:

Use string manipulation to generate a funny description of the character 
based on the data. You can concatenate strings or use template literals to 
display the character's attributes in a creative and humorous way.

*/

// Declare and initialize variables
let characterName = "Elijah";
let age = Math.floor(Math.random() * 100) + 1;
let isSuperhero = true;
let specialPowers = ["fly", "run with super speed", "turn invisible"];
let favoriteFood = "Pizza";
const characterDescription = document.querySelector("#characterDescription");
const nameField = document.querySelector("#nameField");

// Function to generate a random character description
function generateCharacterDesc(){
    if (nameField.value !== ""){
        characterName = nameField.value;
    }
    let description = "Meet " + characterName + ", a " + age + "-year-old ";
    if (isSuperhero){
        description += "superhero";
    }
    else {
        description += "normal person";
    }

    description += " who loves " + favoriteFood
    if (specialPowers.length > 0){
        description += " and has the ability to "
        description += specialPowers.slice(0, -1).join(", ")
        if (specialPowers.length > 1)
            description += " and "
        description += specialPowers[specialPowers.length-1]
}
    description += "!";
    characterDescription.textContent = description;
    
}  

// Functions to update character's age
function increaseAge(){
    if (age > 0){
        age += 1;
    }
}

function decreaseAge(){
    if (age < 150){
        age -= 1;
    }
}


// Function to update the character's description after changing age
function updateDescription(){
    if (characterDescription.textContent !== ""){
        generateCharacterDesc();
    }
}

// Add event listeners for buttons using querySelector
const increaseAgeButton = document.querySelector("#increaseAgeButton");
const decreaseAgeButton = document.querySelector("#decreaseAgeButton");
const generateButton = document.querySelector("#generateButton");

increaseAgeButton.addEventListener("click", increaseAge);
decreaseAgeButton.addEventListener("click", decreaseAge);
increaseAgeButton.addEventListener("click", updateDescription);
decreaseAgeButton.addEventListener("click", updateDescription);
generateButton.addEventListener("click", generateCharacterDesc);
