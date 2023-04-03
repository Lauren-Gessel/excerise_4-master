var numMugs = 10;
let shelves = [10, 120, 270];
let handles = [drawCircHand, drawSquarHand];
let a = 0;
let s = 0;
let p = 0;

function setup() {
  createCanvas(720,400);
  background(100,55,40);
  fill(100,70,50);
  noStroke();
  rect(20, 20, 680, 100);
  rect(20, 140, 680, 100);
  rect(20, 260, 680, 120);
  fill(150,100,80);
quad(50, 95, 20, 120, 700, 120, 665, 95);
quad(50, 355, 20, 380, 700, 380, 665, 355);
quad(50, 215, 20, 240, 700, 240, 665, 215);
  drawShelves();
}

function drawBase(c) {
  fill(c);
  arc(50, 50, 80, 100, 0, PI);
}
function drawCircHand(c) {
    fill(c);
    circle(90,65,30);
    fill(100,70,50);
    circle(90, 65, 20);
}

function drawSquarHand(c) {
    fill(c);
    square(80, 50, 30);
    fill(100,70,50);
    square(85, 55, 20);
}

function drawStar(b) {
 fill(b);
 //circle (20,20,10);
 beginShape(TESS);
 vertex (50,61); //top
 vertex (55,71);
 vertex (64, 71);
 vertex (56, 79);
 vertex (60,91);
 vertex (50, 85); //mid
 vertex (40,91);
 vertex (44, 79);
 vertex (36, 71);
 vertex (45, 71);
 endShape();
}

function drawEyeLogo(b) {
    fill(200);
    circle(50,75, 30);
    fill(b);
    circle(50,75 ,20);
    fill(30);
    circle (50, 75, 10);
}

function drawRightSpoon() {
    fill(100);
    quad (85,20,90,20,75,50,70,50)
}
 function drawLeftSpoon() {
    fill(100);
    quad(10,20, 5,20, 15, 50, 20, 50);
 } 


function drawMug(c, b) { 
  if (a < 5) {
    drawSquarHand(c);
    a++;
  } else {
    drawCircHand (c);
  }
  drawBase(c);
  if (s <= 3) {
    drawStar(b);
    
  } if (s >= 7) {
    drawEyeLogo(b);
  }
   if (p < 3) {
    drawRightSpoon();
   } if (p > 7) {
    drawLeftSpoon();
   }
   s = random(10);
   p = random(10);
}

function drawShelves() {

  for(let i=0; i < numMugs; i++) { 
    push();
      translate( random(600), random(shelves) );
      scale( random(1, 1.10) );

      var mugColor = color(random(50,255), random(255), random(255));
      var logoColor = color(random(150,255), random(150, 255), random(150, 255))
  
      drawMug(mugColor, logoColor);
    pop();
  }
}

