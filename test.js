

var entries = [];
var total = 0;

var display = '';

function pressButton () {



 var getNumber = document.getElementsByClassName("display");
 var displayScreen = document.getElementsByClassName("number");
  

 for (i = 0; i < getNumber.length; i++) {
    getNumber[i].innerHTML = displayScreen[i].innerHTML;
 }

}


/*

var entries = [];
var total = 0;

var display = '';

function pressButton () {



 var x = document.getElementsByClassName("display");
 var y = document.getElementsByClassName("number");
  

 for (i = 0; i < x.length; i++) {
     x[i].innerHTML = "?"

 }


console.log(y);

}
*/
