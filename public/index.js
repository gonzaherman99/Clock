//get the element h1 to display the clock
var text = document.getElementById("clock");

//set up setInterval to run the fucntion every second
setInterval(function() {
    
//get today´s date
var date = new Date();
    
var hours = date.getHours();
    
var minute = date.getMinutes();
    
var loops = date.getSeconds();

/*the if statemnet to check if is later that 11am so we can change the clock to a 12 hours clock an add PM, AM*/
if (hours > 11){
    
//set up a variable with the PM value
    var format = "PM";
    
//if you want a clock of 24 hours just delete this line
    hours -= 12;
    
} else {

//if is earlier that 11 (am)
    format = "AM";
}
    text.innerHTML = (`${hours} : ${minute} : ${loops} ${format}`);
}, 1000);
      


