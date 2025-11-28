let happy = false;
let heartX, heartY;

function setup() {
  createCanvas(600, 400);
  heartX = 150;
  heartY = 60;
  
  saveGif('mySketch', 10);
}

function draw() {
  background(199, 211, 237);

  // 뒷머리
  noStroke();
  fill(111,72,72);
  arc(300, 170, 270, 250, radians(180), radians(0));
  rect(165, 170, 270, 200);

  // 목
  fill(255,229,217);
  rect(260, 260, 80, 40);
  fill(234,208,196);
  arc(300, 260, 80, 70, 0, radians(180));
  fill(255,229,217);
  arc(300, 300, 80, 70, 0, radians(180));

  // 옷
  fill(255);
  quad(260,300,340,300,400,320,200,320);
  rect(200,320,200,100);
  fill(245);
  quad(200,320,200,400,160,400,160,350);
  quad(400,320,400,400,440,400,440,350);

  // 귀
  stroke(214,188,176);
  fill(255,229,217);
  ellipse(190,190,50,50);
  ellipse(410,190,50,50);

  // 얼굴
  stroke(214,188,176);
  fill(255,229,217);
  ellipse(300,180,220,200);

  // 볼
  noStroke();
  fill(255,216,216);
  ellipse(232,220,50,50);
  ellipse(368,220,50,50);

  // 눈
  if (happy) {
    fill(111,72,72);
    ellipse(355,180,45,45);
    ellipse(245,180,45,45);
    fill(255);
    ellipse(235,180,15,15);
    ellipse(253,175,15,15);
    ellipse(363,175,15,15);
    ellipse(345,180,15,15);
  } else {
    stroke(111,72,72);
    line(260,180,220,160);
    line(260,180,220,200);
    line(260,180,220,180);
    line(340,180,380,160);
    line(340,180,380,200);
    line(340,180,380,180);
  }

  // 코
  stroke(214,188,176);
  fill(255,229,217);
  triangle(300,180,290,200,310,200);

  // 점
  noStroke();
  fill(214,188,176);
  circle(380,220,2);

  // 입
  noStroke();
  fill(214,188,176);
  if (happy) {
    arc(300, 210, 80, 70, 0, radians(180), radians(0));
  } else {
    arc(300, 210, 80, 70, 0, radians(180), radians(0));
    fill(255,229,217);
    arc(300, 205, 80, 70, 0, radians(180), radians(0));
  }

  // 앞머리
  noStroke();
  fill(111,72,72);
  arc(300, 140, 180, 150, radians(180), radians(0));
  fill(255,229,217);
  triangle(300,120,310,140,290,140);
  triangle(250,120,240,140,260,140);
  triangle(350,120,340,140,360,140);

  // 하트 (행복할 때만)
  if (happy) {
    drawHeart(heartX, heartY, 40); // 원래 20이었음 → 2배로 40
  }
}

function mousePressed() {
  happy = !happy;
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    heartX -= 10;
  } else if (keyCode === RIGHT_ARROW) {
    heartX += 10;
  } else if (keyCode === UP_ARROW) {
    heartY -= 10;
  } else if (keyCode === DOWN_ARROW) {
    heartY += 10;
  }
}

// 하트 그리기
function drawHeart(x, y, size) {
  fill(255,100,150);
  noStroke();
  beginShape();
  vertex(x, y);
  bezierVertex(x - size/2, y - size/2, x - size, y + size/3, x, y + size);
  bezierVertex(x + size, y + size/3, x + size/2, y - size/2, x, y);
  endShape(CLOSE);
}
