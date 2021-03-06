$(document).ready(function() {


//Global Variables
let currentHour = moment().hour();       //Military time


console.log("Military time: " + currentHour);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

displayCurrentTime();
timeCheck();
getLocal();


//Renders the current time onto the jumbotron header thing in the #currentDay id.
function displayCurrentTime() {
let timeStamp = moment().format("dddd, MMM Do YYYY");
let timeDisplay = $("#currentDay");
timeDisplay.text(timeStamp);
};

//This function will save to local storage with the key being the .time-block and the value being the .text() of the textarea
//
function saveToLocal() {
    $(".text-area").each(function() {
        let textAreaId = parseInt($(this).attr("id"));
        let textAreaContent = $(this).val();
        localStorage.setItem(textAreaId, textAreaContent);
        console.log(textAreaContent);
        
    })
    
};

//This function will get the content from local storage and repopulate the textarea with saved text.
//
function getLocal() {

    $(".text-area").each(function (index, value) {
   let localStorageVal = localStorage.getItem(value.id);
    console.log(localStorageVal);
    $(this).text(localStorageVal);
   
    })

};

//This function will check which row is in the past present or future and color the background accordingly.
//
function timeCheck() {

        $(".text-area").each(function() {
        
        let textAreaId = parseInt($(this).attr("id"));

        if (currentHour === textAreaId) {
            $(this).addClass("present");

        } else if (currentHour > textAreaId) {
            $(this).addClass("past");

        } else if (currentHour < textAreaId) {
            $(this).addClass("future");
        }
    
    }) 

};

$(".saveBtn").on("click", saveToLocal);

});