let plantFact;
let loading = true;
// let img;
let data = {};
let words =[]
let wordData;
function preload() {
  data = loadJSON('../json/WebScraping.json')
}



function setup() {
  createCanvas(500, 500);
  background(250);
  let wordData = data.content.text[floor(random(0, 310))];

  
  console.log(wordData);
  plantFact = wordData;

  textAlign(CENTER);
  textSize(30);
  text(plantFact, 0, 0, width);
  
  // wordData = words.content.text[0];
  // console.log(words)
  // img = loadImage("https://placekitten.com/400/200");
  
  // perform request
//   fetch("..\json\WebScraping.json").then(function(content) {
//     return content.json();
//   }).then(function(text) {
//     console.log("Got a cat fact");
//     console.log(text);
    
//     plantFact = text;
//     loading = false;
  
//   }).catch(function(err) {
//     console.log(`Something went wrong: ${err}`);
//   });
}

function draw() {
  





  // if (loading) {
  //   // loading screen
  //   textSize(30);
  //   text("Loading...", 0, height/2-25, width, 50);
    
  // }else{
  //   image(img,50,30);
    
  // }

}
