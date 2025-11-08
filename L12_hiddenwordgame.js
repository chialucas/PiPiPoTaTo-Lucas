let inputField;
let hiddentext;

function setup(){
    createCanvas(600,400);
    textSize(24);
    textAlign(CENTER,CENTER);

    words = ["moon", "cloud", "cat"]
    randomwords = random(words);
    console.log
    inputField = createInput(" ");
    inputField.size(150,30);
    inputField.style("font-size", "20px")
    inputField.position(55,20);

    displayText = randomword[0].toUpperCase
    text("HINT:")

    submitButton = createButton("show");
    submitButton.size(150,30);
    submitButton.style("font-size", "20px")
    submitButton.position(55,60);
    submitButton.mousePressed(displayInput);
}

function displayInput(){
    text(inputField.value(), 55, 100)
}