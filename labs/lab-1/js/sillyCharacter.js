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
let age = 19;
let isSuperhero = true;
let specialPowers = [];
let favoriteFood = "Pizza";

// Function to generate a random character description
function generateCharacterDesc(){
    const characterDescription = document.querySelector("#characterDescription");
    let description = "Meet " + characterName + ", a " + age + "-year-old ";
    if (isSuperhero){
        description += "superhero";
    }
    else {
        description += "normal person";
    }

    description += " who loves " + favoriteFood + " and has the ability to  " + specialPowers + "!";
    characterDescription.textContent = description;
}  

// Functions to update character's age
function increaseAge(){
    age += 1;
}

function decreaseAge(){
    age -= 1;
}


// Function to update the character's description after changing age
function updateDescription(){
    generateCharacterDesc();
}

// Add event listeners for buttons using querySelector
const increaseAgeButton = document.querySelector("#increaseAgeButton");
const decreaseAgeButton = document.querySelector("#decreaseAgeButton");
const generateButton = document.querySelector("#generateButton");

increaseAgeButton.addEventListener("click", increaseAge);
decreaseAgeButton.addEventListener("click", decreaseAge);
generateButton.addEventListener("click", generateCharacterDesc);
console.log(1)
