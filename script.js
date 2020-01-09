//Global Variables






//This function will hold all the functions I want to run on page load.
function pageLoad(){
    displayCurrentTime();
}

//Renders the current time onto the jumbotron header thing in the #currentDay id.
function displayCurrentTime(){
let timeStamp = moment().format("dddd, MMM Do YYYY");
let timeDisplay = $("#currentDay");
timeDisplay.text(timeStamp);
}





$(window).on("load", pageLoad);