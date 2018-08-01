//CALCULATOR, YOU WILL NEED AN EMPTY ARRAY TO HOLD ENTRIES
//YOU WILL NEED AN EMPTY STRING WHICH WILL ACT AS THE LAST
//BUTTON TO BE PRESSED
//YOU WILL NEED TO SET THE TOTAL TO 0

var entries = [];
var total = 0;
var temp = '';

//YOU NEED TO ADD AN EVENT LISTENER
//FOR WHEN A BUTTON IS CLICKED
//YOU DON'T HAVE ANY CLASSES OR ID
//ON YOUR BUTTONS SO TRY USING
//GET ELEMENT BY TAG





function myFunction (butPressed) {

    var isNumber = parseInt(butPressed);


    if (isNaN(isNumber) === false) {
        document.getElementById("displayScreen").innerHTML = 
        document.getElementById("displayScreen").innerHTML + butPressed;
    
    } else if (butPressed === '+') {
        console.log("this is an addition");
    
    } else if (butPressed === '-') {
        console.log("this is a subtraction");
    
    } else if (butPressed === '*') {
        console.log("this is a multiplication");
    
    } else if (butPressed === '/') {
        console.log("this is a division");
    
    } else if (butPressed === '.') {
        console.log("this is a decimal");
    
    } else if (butPressed === 'AC') {
        console.log("this to clear all");
    
    } else if (butPressed === 'CE') {
        console.log("this is to clear the last entry");
    }

}


/*
document.getElementById("displayScreen").innerHTML = 
document.getElementById("displayScreen").innerHTML + butPressed; */








