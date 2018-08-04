
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
 var entries = [];

 //Calculator function

 function calculator (evt) {

//This will pull the innerHTML from the button
//that has been clicked

    val = evt.target.innerText;


//This will add a number to variable digit

var len = document.getElementsByClassName("digit");

    for (var i = 0; i < len.length; i++) {
        if (len[i].innerHTML === val){ //To match it to val pressed
            var digit = val;
            //console.log(digit);
        }
    } 

//This will add an operator to variable operator

var len2 = document.getElementsByClassName("operator");

    for (var i = 0; i < len2.length; i++) {
        if (len2[i].innerHTML === val){ //To match it to val pressed
            var operator = val;
        }
    } 



//CLEAR ALL-----------------------------------------

    if (val === 'AC') {

        //empty string
        temp = '';

        //empty array
        for (var i = entries.length; i > 0; i--) {
            entries.pop();
        } 

        //you could also do it by setting entries
        //length to 0

        //entries.length = 0;

        document.getElementById("displayScreen").innerHTML =
        0;

    }

    //CLEAR LAST ENTRY-----------------------------------

    else if (val === 'CE') {

        document.getElementById("displayScreen").innerHTML =
        "HELP?";
    }

//If it is a digit (includes decimal), then keep adding
//to the temp string. Push the temp to an array
// display the temp string on the display

     else if (val === digit) {

        temp += digit;
    
        entries.push(val);
        console.log(entries);

        console.log(temp);

        document.getElementById("displayScreen").innerHTML =
        temp;

     

           
// For plus you want to pop the last value in the array
//entries and store it in a new variable - (lastVal)
//Then clear array and string. 


     

//OPERATOR -------------------------------------------

    } else if (val === operator) {

    //Convert temp string to a number
        var lastNumber = parseInt(temp);
        console.log(lastNumber);

    //To clear the screen of the string and display 
    //The operator
        document.getElementById("displayScreen").innerHTML =
        val;

        console.log(operator);

        entries.push(val);
        console.log(entries);

        
        

        temp = '';

//STORE NEXT NUMBER AS A VARIABLE---------------------

    for (var i = 1; i < entries.length; i++) {
        var nextNum = Number(entries[i+1]); }
     

//EQUALS -------------------------------------------

    } else if (val === '=') {

        for (i = 0; i < entries.length; i++) {

            if (entries[i] === '+') {
               var x = entries.toString();
               console.log(x.split('+'))

               for(i = 0; i < x.length; i++) {
                    document.getElementById("displayScreen").innerHTML = 
                    ( parseInt(x[i]) + parseInt(x[i]) )
               } 


            }
        }


    }






}


