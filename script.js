/*  Project 01_11_04

    Author: Tabitha Siclovan
    Date: 09.04.18  

    Filename: script.js
*/

"use strict";

var httpRequest = false;

//
function checkInput() {
    //alert("checkInput()");
    var zip = document.getElementById("zip").value;
    if (zip.length === 5) {
        getLocation();
    }
    else {
        document.getElementById("city").value = "";
        document.getElementById("state").value = "";
    }
}

//Function to
function getRequestObject() {
    try {
        httpRequest = new XMLHttpRequest();
    }
    catch (requestError) {
        document.getElementById("csset").style.visibility = "visible";
        var zip = document.getElementById("zip").value;
        if (zip.addEventListener) {
            zip.removeEventListener("keyup", checkInput, false);
        }
        else if (zip.attachEvent) {
            zip.detachEvent("onkeyup", checkInput);
        }
        return false;
    }
   // console.log(httpRequest);
    return httpRequest;
}

//Function to call the getRequestObject to get or reuse an XHR object
checkInput();
function getLocation() {
    //console.log("getLocation()");
    var zip = document.getElementById("zip").value;
    if (!httpRequest) {
        httpRequest = getRequestObject();
    }
    
    httpRequest.abort();
    alert(zip);
    httpRequest.open("get", "http://api.zippopotam.us/us/" + zip,true);
    alert("2");
    httpRequest.send(null);
    alert("3");
}

//Event listener keyup to fire when user hits keyboard key
var zip = document.getElementById("zip");
if (zip.addEventListener) {
    zip.addEventListener("keyup", checkInput, false);
}
else if (zip.attachEvent) {
    zip.attachEvent("onkeyup", checkInput);
}