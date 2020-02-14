"use strict"

var counter = 0;
var timeleft = 5;

if (window.location.search){
    timeleft = parseInt(getUrlParameter("min")) * 60;
}


var timer = document.getElementById("timer");
timer.textContent = 0;


var interval = setInterval(timeIt, 1000);

function timeIt() {
    counter++;
    timer.textContent = convertSeconds(timeleft - counter);
    if (counter == timeleft){
        timer.textContent = timer.textContent + " - FINISH!";
        clearInterval (interval);
        counter = 0;
        
    }
}

function convertSeconds(timeleft) {
    var min = Math.trunc(timeleft / 60);
    var sec = timeleft % 60;
    return formatNumber(min) + "m : " + formatNumber(sec) + "s";
}

function formatNumber(number){
    if(number.toString().length == 1){
        return "0" + number;
    }else{
        return number;
    }
}

//https://davidwalsh.name/query-string-javascript
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};