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
    
    document.getElementById("displayScreen").innerHTML = 
    document.getElementById("displayScreen").innerHTML + butPressed;
}




