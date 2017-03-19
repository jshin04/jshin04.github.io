// var current= new Date()
// var day_night=current.getHours()
// 	if (day_night<=12)
// 		document.write("<img src='day.gif'>")
// 	else
// 		document.write("<img src='night.gif'>")

var now = new Date();
var hours = now.getHours();

//Keep in code - Written by Computerhope.com
//Place this script in your HTML heading section

document.bgColor="black";

//18-19 night
if (hours > 17 && hours < 20){
document.write ('<body style="background-color: rgb(119,46,113)">');
}
//20-21 night
else if (hours > 19 && hours < 22){
document.write ('<body style="background-color: rgb(56,52,125)">');
}
//22-4 night
else if (hours > 21 || hours < 5){
document.write ('<body style="background-color: rgb(2,2,45);">');
}
//16-17 day
else if (hours > 15 && hours < 18){
document.write ('<body style="background-color: rgb(202,88,94)">');
}
//14-15 day
else if (hours > 13 && hours < 16){
document.write ('<body style="background-color: rgb(183,105,123)">');
}
//12-13 day
else if (hours > 11 && hours < 14){
document.write ('<body style="background-color: rgb(162,118,154)">');
}
//9-11 day
else if (hours > 8 && hours < 12){
document.write ('<body style="background-color: rgb(135,129,189)">');
}
//7-8 day
else if (hours > 6 && hours < 9){
document.write ('<body style="background-color: skyblue">');}
//5-6 day
else if (hours > 4 && hours < 7){
document.write ('<body style="background-color: steelblue">');
}
else {
document.write ('<body style="background-color: black">');
}

$(document).ready(main);
