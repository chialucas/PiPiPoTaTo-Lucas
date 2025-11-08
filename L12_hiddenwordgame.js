let inputField;


function setup(){
    createCanvas(600,400)
    textSize(24)
    textAlign()

    inputField = createInput(" ");
    inputField.position(55,20);

    submitButton = createButton("show");
    submitButton.position(55,60);
    submitButton.mousePressed(displayInput);
}

function displayInput(){
    text(inputField.value(),)
}