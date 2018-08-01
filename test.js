
//When the DOM content has been loaded the start
//function will run

document.addEventListener('DOMContentLoaded', start)

//The start function will run a function called
//addEventListener

function start() {
    addEventListener()
 }
 
//The function addEventListener will then run
//to add a click event to the buttons

 function addEventListener () {

    var val = document.getElementsByTagName("button");

        for (var i = 0; i < val.length; i++) {
            val[i].addEventListener("click", calculator)
        }
    }

 //Need an empty string variable 

 var temp = '';
 var total = 0;



 //Calculator function

 function calculator (evt) {


//This will pull the innerHTML from the button
//that has been clicked

    val = evt.target.innerText;

//This will convert a digit to a number

    var len = document.getElementsByClassName("digit");

    for (var i = 0; i < len.length; i++) {
        if (len[i].innerHTML === val){ //To match it to val pressed
            var val = parseInt(len[i].innerHTML);
        }
    } 

//This will take the what is currently displayed on
//display and append each subsequent button pressed

    console.log(val);

    document.getElementById("displayScreen").innerHTML
    = document.getElementById("displayScreen").innerHTML + val;

//First we check if the value is a number or a decimal
//If it is we append them to the string temp

    if (!isNaN(val) || val === '.') {
        var temp = document.getElementById("displayScreen").innerHTML;
    } else if (val === 'AC') {
        var temp = '';
        var total = 0;
        document.getElementById("displayScreen").innerHTML = 0;
    } else if (val === '+') {
        console.log("this is a plus");
    }

    console.log(temp);

//You need to add an id or class or something so that
//you can distinguish digits and then you can turn 
//them into an integer

 
//Function to reset values back to zero



}
