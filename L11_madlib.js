// const { version } = require("react");

let NounField;
let VerbField;
let AdjField;
let AdverbField;
let placeField;
let submitButton;
let outputArea;
let storyText = "";
let storyTemplates;
let template;

function setup(){
    createCanvas(600,400)
    background(220);

    storyTemplates = [
        "the {adj} {noun} decided to {verb} {adv} at the {place}.",
        "One day, a {adj} {noun} wanted to {verb} {adv} in {place.",
        "Did you hear about the {adj} {noun} that tried to {verb} {adv} near {place}"

    ];
    template = random(storyTemplates);
    NounField = createInput("Noun ");
    NounField.position(55, 20);

    VerbField = createInput("Verb ");
    VerbField.position(55,60);

    AdjField = createInput("Adjective ");
    AdjField.position(55,100);

    AdverbField = createInput("Adverb ");
    AdverbField.position(55,140);

    placeField = createInput("place ")
    placeField.position(55, 180);

    submitButton = createCanvas("show");
    submitButton.position(55,220);
    submitButton.mousePressed(displayInput);

 }

function displayInput(){
    console.log(NounField.value());
    console.log(NounField.value());
    console.log(NounField.value());
    console.log(NounField.value());
    console.log(NounField.value());
    
    storyTexts = template.replace("{noun}","dog")
                     .replace("{verb}","jump")
                     .replace("{adj}","happy")
                     .replace("{adv}","happily")

    // background(220)
    // const inputValue = inputField.value()
    // textSize(64);
    // textAlign(CENTER, CENTER);
    // text(inputValue, 200, 100);

}





}