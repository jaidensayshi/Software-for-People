document.body.onkeydown = function(keypress_event){
  var key = keypress_event.key;
  if (key == "1") {
    document.getElementById("key_display").style.fontSize = "10px";
  } else if (key == "2") {
    document.getElementById("key_display").style.fontSize = "20px";
  } else if (key == "3") {
    document.getElementById("key_display").style.fontSize = "30px";
  } else if (key == "4") {
    document.getElementById("key_display").style.fontSize = "40px";
  } else if (key == "5") {
    document.getElementById("key_display").style.fontSize = "50px";
  } else if (key == "6") {
    document.getElementById("key_display").style.fontSize = "60px";
  } else if (key == "7") {
    document.getElementById("key_display").style.fontSize = "70px";
  } else if (key == "8") {
    document.getElementById("key_display").style.fontSize = "80px";
  } else if (key == "9") {
    document.getElementById("key_display").style.fontSize = "90px";
  } else if (key == "0") {
    document.getElementById("key_display").style.fontSize = "0px";
  }
  else if (key == "Backspace") {
    document.getElementById("key_display").innerHTML = "";
  }
  else {
    var inner = document.getElementById("key_display").innerHTML;
    document.getElementById("key_display").innerHTML = inner + key;
  }
};

