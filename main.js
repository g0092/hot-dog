/* Prediction */

const img = document.getElementById('img');
const button = document.getElementById('submit_button');
const input = document.getElementById('image_url');
const result = document.getElementById('prediction');

let model;

button.onclick = (event) => {
    const url = input.value;
    img.src = url;
    result.innerText = "Loading..."
}

img.onload = () => {
    doPrediction();
}

function doPrediction() {
    if (model) {
        model.classify(img).then(predictions => {
            showPrediction(predictions);
        });
    } else {
        mobilenet.load().then(_model => {
            model = _model;
            model.classify(img).then(predictions => {
                showPrediction(predictions);
            });
        });
    }

}

function showPrediction(predictions) {
    result.innerText = "This is a " + predictions[0].className;

}


/* Toggle between adding and removing the "responsive" class to the navbar when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }