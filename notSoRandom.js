function random(number){
    const decimal = Math.random();
    const timesNumber = decimal * number;
    const randomNumber = Math.floor(timesNumber);
    console.log(randomNumber);
}

random(5);

function randomLetter(string){
    const decimal = Math.random();
    const timesLength = decimal * string.length;
    const randomLetter = Math.floor(timesLength)
    console.log(string[randomLetter]);
}

randomLetter("Isiah");  

function myGuy(string){
    console.log(string + ", my guy");
}

myGuy("These boys are trippin");