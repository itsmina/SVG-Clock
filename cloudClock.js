function updateClock ()
{
var currentTime = new Date();
var currentHours = currentTime.getHours();
var currentMinutes = currentTime.getMinutes();
var currentSeconds = currentTime.getSeconds();

currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

var hourTimeString = currentHours + " : ";
  var minsTimeString = currentMinutes + " : " ;
var secsTimeString = currentSeconds;

document.getElementById("hourUnit").firstChild.nodeValue = hourTimeString;
document.getElementById("minuteUnit").firstChild.nodeValue = minsTimeString;
document.getElementById("secondUnit").firstChild.nodeValue = secsTimeString;

var leftWing = document.getElementById("LeftWing");
  var rotatestring = "rotate(" + calcRotation(currentTime.getSeconds()) + "," + 480 + "," + 193 + ")";
  //console.log(rotatestring);
 
 LeftWing.setAttribute('transform', rotatestring);
 
 var rightWing = document.getElementById("RightWing");
  var rotatestrings = "rotate(" + calcRotations(currentTime.getSeconds()) + "," + 670 + "," + 196 + ")";
  
  RightWing.setAttribute('transform', rotatestrings);
                         
}

function calcRotation( secs )
{
  var offset = -45;
  
  var rotation = secs;
  
  if (secs > 29)
  {
    rotation = 60-secs;
  } 
  
  return rotation+offset; 
}

function calcRotations( secs2 )
{
  var offsets = -5;
  var rotations = secs2;
  if (secs2 < 29)
  {
    rotations = 60-secs2;
  }
  
  return rotations+offsets;
}


setInterval(updateClock, 300);
