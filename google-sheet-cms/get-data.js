var AppScriptUrl = 'https://script.google.com/macros/s/AKfycbzVIMk2up_TjEZmWqDYt2JAu27lZCHv7VwdVAMGUG29fiA_I2GN4jcXWE7knp70dH2u/exec';

function getData(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Request was successful
        var response = JSON.parse(xhr.responseText);
        // Handle the response data here
         handleData(response);
         console.log(response);
      } else {
        // Request failed
        console.error('Request failed:', xhr.status);
      }
    }
  };
  xhr.send();
}

// this function prints the data to the HTML page.
function handleData(response) {
  var sheetDataElement = document.getElementById("sheetData");

  response.forEach(function(item) {
    // Create a new <li> element
    var listItem = document.createElement("div");
    listItem.className = "item";

    // Iterate over the keys of the object
    Object.keys(item).forEach(function(key) {
      // Create a new <div> element for each key-value pair
      var divKeyValue = document.createElement("div");
      // Set class name as the key
      divKeyValue.className = key;
      if (key == "image") {
        divKeyValue.innerHTML = "<img src='" + item[key] + "' style='height: 200px'>"
      }
      else if (key == "name")
      // Set innerHTML as the value
      divKeyValue.innerHTML = item[key];
      // Append the <div> element for the key-value pair to the <li> item
      listItem.appendChild(divKeyValue);
    });

    // Append the <li> element to the "sheetData" element
    sheetDataElement.appendChild(listItem);
  });
}


// Example usage:
getData(AppScriptUrl);


