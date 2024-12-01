// since I want every box on the page to behave the same way,
// I'm gonna write my Javascript in a more generic way...

// first I'll write a function called update_color that
// describes what I want to happen when somebody changes
// one of the dropdowns.
var red = "00";
var blue = "00";
var green = "00";

document.body.style.backgroundColor = red + blue + green;

function update_color(el) {

  // get the color selected
  //var selected_color = this.value;
  var color = this.name;
  switch(color) {
    case "red":
      red = this.value;
      break;
    case "green":
      green = this.value;
      break;
    case "blue":
      blue = this.value[5] + this.value[6];
      break;
  }
  // find the parent element (the div around the dropdown)
  // and update it's background color with the chosen value.
  document.body.style.backgroundColor = "#" + red + green + blue;
}

// Now I need to set up the action.

// first I'm going to get all my inputs
var selects = document.querySelectorAll(".colors");

// and then I'm going to say 

selects.forEach(box => {
  box.addEventListener('change', update_color);
});
