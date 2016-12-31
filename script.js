 
// I know I need an onclick/submit event to change the background image 
// based on the user input and then clicking the button

// var pics = 



// document.addEventListener("submit", function changeBackground());

// changeBackground ()

// If "this city name" is typed in, produce appropriate background image
if (city == "New York" || city ==  "NYC" || city == "New York City") {
  document.getElementsByClassName("nyc").style.backgroundImage="url(../images/nyc.jpg)";

}; else if (city == "San Francisco" || city == "SF" || city == "Bay Area"){
  document.getElementsByClassName("sf").style.backgroundImage="url(../images/sf.jpg)";

}; else if (city == "Los Angeles" || city == "LA" || city == "LAX"){
document.getElementsByClassName("la").style.backgroundImage="url(../images/la.jpg)";

}; else if (city == "Austin" || city == "ATX"){
document.getElementsByClassName("austin").style.backgroundImage="url(../images/austin.jpg)";

}; else if (city == "Sydney" || city == "SYD"){
document.getElementsByClassName("sydney").style.backgroundImage="url(../images/sydney.jpg)";

}; else (city !== "New York" || city !==  "NYC" || city !== "New York City" || 
  city !== "San Francisco" || city !== "SF" || city !== "Bay Area" ||
  city !== "Los Angeles" || city !== "LA" || city !== "LAX" ||
  city !== "Austin" || city !== "ATX" || city !== "Sydney" || city !== "SYD");
  alert("City name not programmed yet, sorry!")
};
)};


