let startColor;
let endColor;

function setup() {
  createCanvas(600, 400);
  
  colorMode(RGB);
  startColor = color(255,234,234);
  endColor = color(255,95,95);
}

   

function draw(){
  
  background(250, 250, 245);
  
  let t = millis() * 0.001;
  let moveY = sin(t) * 20; 
  let moveY2 = -sin(t) * 20;
  let sizePulse = 15 + sin(t * 2) * 10; 
  let sizePulse2 = 50 + sin(t * 2) * 5;

  // 색 서서히
  let lerpAmt = (sin(t) + 1) / 2;
  let pinkCol = lerpColor(startColor, endColor, lerpAmt);
  
  
  //파랑4사각
    let step2 = frameCount % 40;

if (step2 < 10) {
  fill(24, 49, 114);
} else if (step2 < 20) {
  fill(81, 107, 185);
} else if (step2 < 30) {
  fill(141, 161, 221);
} else {
  fill(175, 190, 235);
}
rect(360,230,170,30);
  
   
if (step2 < 10) {
  fill(81, 107, 185);
} else if (step2 < 20) {
  fill(141, 161, 221);
} else if (step2 < 30) {
  fill(175, 190, 235);
} else {
  fill(24, 49, 114);
}
  rect(360,260,170,30);
   
if (step2 < 10) {
  fill(141, 161, 221);
} else if (step2 < 20) {
  fill(175, 190, 235);
} else if (step2 < 30) {
  fill(24, 49, 114);
} else {
  fill(81, 107, 185);
}
  rect(360,290,170,30);
   
if (step2 < 10) {
  fill(175, 190, 235);
} else if (step2 < 20) {
  fill(24, 49, 114);
} else if (step2 < 30) {
  fill(81, 107, 185);
} else {
  fill(141, 161, 221);
}
  rect(360,320,170,30);
   
  //파랑 큰원
  noStroke();
  fill(175, 190, 235);
  circle(380, 175 + moveY, 180);
   
  noStroke();
  fill(250, 250, 245);
  circle(395, 148 + moveY, 100);
   
  noStroke();
  fill(141, 161, 221);
  circle(407, 135 + moveY, 60);
   
  //빨강9개 각사각
  let step = frameCount % 90;

if (step < 10) {
  fill(255,234,234);
} else if (step < 20) {
  fill(255,216,216);
} else if (step < 30) {
  fill(255,203,203);
} else if (step < 40) {
  fill(255,185,185);
} else if (step < 50) {
  fill(255,167,167);
} else if (step < 60) {
  fill(255,149,149);
} else if (step < 70) {
  fill(255,131,131);
} else if (step < 80) {
  fill(255,113,113);
} else {
  fill(255,95,95);
}
rect(157,180,170,12);
  
  //noStroke();
  //fill(255,234,234);
  //rect(157,180,170,12);
   
  if (step < 10) {
  fill(255,216,216);
} else if (step < 20) {
  fill(255,203,203);
} else if (step < 30) {
  fill(255,185,185);
} else if (step < 40) {
  fill(255,167,167);
} else if (step < 50) {
  fill(255,149,149);
} else if (step < 60) {
  fill(255,131,131);
} else if (step < 70) {
  fill(255,113,113);
} else if (step < 80) {
  fill(255,95,95);
} else {
  fill(255,234,234);
}
rect(157,192,170,12);
  
  //noStroke();
  //fill(255, 216, 216);
  //rect(157,192,170,12);
   
  if (step < 10) {
  fill(255,203,203);
} else if (step < 20) {
  fill(255,185,185);
} else if (step < 30) {
  fill(255,167,167);
} else if (step < 40) {
  fill(255,149,149);
} else if (step < 50) {
  fill(255,131,131);
} else if (step < 60) {
  fill(255,113,113);
} else if (step < 70) {
  fill(255,95,95);
} else if (step < 80) {
  fill(255,234,234);
} else {
  fill(255,216,216);
}
  rect(157,204,170,12);
  //noStroke();
  //fill(255,203,203);
  //rect(157,204,170,12);
   
  if (step < 10) {
  fill(255,185,185);
} else if (step < 20) {
  fill(255,167,167);
} else if (step < 30) {
  fill(255,149,149);
} else if (step < 40) {
  fill(255,131,131);
} else if (step < 50) {
  fill(255,113,113);
} else if (step < 60) {
  fill(255,95,95);
} else if (step < 70) {
  fill(255,234,234);
} else if (step < 80) {
  fill(255,216,216);
} else {
  fill(255,203,203);
}  
  rect(157,216,170,12);
  //noStroke();
  //fill(255,185,185);
  //rect(157,216,170,12);
     
  if (step < 10) {
  fill(255,167,167);
} else if (step < 20) {
  fill(255,149,149);
} else if (step < 30) {
  fill(255,131,131);
} else if (step < 40) {
  fill(255,113,113);
} else if (step < 50) {
  fill(255,95,95);
} else if (step < 60) {
  fill(255,234,234);
} else if (step < 70) {
  fill(255,216,216);
} else if (step < 80) {
  fill(255,203,203);
} else {
  fill(255,185,185);
}  
  rect(157,228,170,12);
  //noStroke();
  //fill(255,167,167);
  //rect(157,228,170,12);
   
  if (step < 10) {
  fill(255,149,149);
} else if (step < 20) {
  fill(255,131,131);
} else if (step < 30) {
  fill(255,113,113);
} else if (step < 40) {
  fill(255, 95, 95);
} else if (step < 50) {
  fill(255,234,234);
} else if (step < 60) {
  fill(255,216,216);
} else if (step < 70) {
  fill(255,203,203);
} else if (step < 80) {
  fill(255,185,185);
} else {
  fill(255,167,167);
}  
  rect(157,240,170,12)
  //noStroke();
  //fill(255,149,149);
  //rect(157,240,170,12);
   
    if (step < 10) {
  fill(255,131,131);
} else if (step < 20) {
  fill(255,113,113);
} else if (step < 30) {
  fill(255, 95, 95);
} else if (step < 40) {
  fill(255,234,234);
} else if (step < 50) {
  fill(255,216,216);
} else if (step < 60) {
  fill(255,203,203);
} else if (step < 70) {
  fill(255,185,185);
} else if (step < 80) {
  fill(255,167,167);
} else {
  fill(255,149,149);
}  
  rect(157,252,170,12);
  //noStroke();
  //fill(255, 131, 131);
  //rect(157,252,170,12);
   
      if (step < 10) {
  fill(255,113,113);
} else if (step < 20) {
  fill(255, 95, 95);
} else if (step < 30) {
  fill(255,234,234);
} else if (step < 40) {
  fill(255,216,216);
} else if (step < 50) {
  fill(255,203,203);
} else if (step < 60) {
  fill(255,185,185);
} else if (step < 70) {
  fill(255,167,167);
} else if (step < 80) {
  fill(255,149,149);
} else {
  fill(255,131,131);
} 
  //noStroke();
  //fill(255, 113, 113);
  rect(157,264,170,12);
   
      if (step < 10) {
  fill(255, 95, 95);
} else if (step < 20) {
  fill(255,234,234);
} else if (step < 30) {
  fill(255,216,216);
} else if (step < 40) {
  fill(255,203,203);
} else if (step < 50) {
  fill(255,185,185);
} else if (step < 60) {
  fill(255,167,167);
} else if (step < 70) {
  fill(255,149,149);
} else if (step < 80) {
  fill(255,131,131);
} else {
  fill(255,113,113);
} 
  //noStroke();
  //fill(255, 95, 95);
  rect(157,276,170,12);
   
  //핑크 긴 사각
  noStroke();
  fill(pinkCol);
  rect(75,50,40,200);
  
  //파랑4 삼각형
  noStroke();
  fill(24, 49, 114);
  triangle(48,121, 48,333, 227, 333); 
   
  noStroke();
  fill(81, 107, 185);
  triangle(93, 174, 93, 333, 227, 333); 
  
  noStroke();
  fill(141, 161, 221);
  triangle(137, 225, 137, 333, 227, 333); 
   
  noStroke();
  fill(175, 190, 235);
  triangle(183, 280, 183, 333, 227, 333); 
   
  //파랑2 긴 사각
  noStroke();
  fill(235,238,245);
  rect(317,220,23,150);
   
  noStroke();
  fill(197,208,241);
  rect(340,220,23,150);

  //조로록 빨강원
  noStroke();
  fill(255,234,234);
  circle(427, 50, 50);
   
  noStroke();
  fill(255,203,203);
  circle(477, 84, 40);
   
  noStroke();
  fill(255,167,167);
  circle(497, 138, 30);
   
  noStroke();
  fill(255, 131, 131);
  circle(491, 186, 18);  
   
  //빨간 2원원
  noStroke();
  fill(255, 95, 95);
  circle(307,110, sizePulse2);
   
  noStroke();
  fill(255, 131, 131);
  circle(270,80, 25);
   
  
  //빨간 같은 색 원3
  noStroke();
  fill(255,167,167);
  circle(362,245, sizePulse);
   
  noStroke();
  fill(255,167,167);
  circle(362,295, sizePulse);  
   
  noStroke();
  fill(255,167,167);
  circle(362,345, sizePulse);
   
  //반원들 ....
  noStroke();
  fill(175, 190, 235);
  arc(150, 70+(moveY), 100, 100, 0, radians(180));
   
  noStroke();
  fill(81, 107, 185);
  arc(207, 150+(moveY2), 100, 100, radians(180),0);
   
  noStroke();
  fill(pinkCol);
  arc(170, 360, 100, 100, radians(180),0);
}
  function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 10);
  }}
 