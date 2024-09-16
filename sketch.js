function setup() {
    createCanvas(400, 269);
    angleMode(DEGREES);
    //(x, y, width, height);
}
function draw(){
    background(100);
    
    //color
    fill(324, 212, 206);
    rect(10, 0, 240, 130);
    fill(5, 16, 145);
    ellipse(1, 74, 55, 115);
    ellipse(25, 65, 30, 45);
    fill(232, 244, 255);
    ellipse(47, 21, 30, 85);
    rotate(-45);
    rect(-7, -8, 22, 80)
    resetMatrix();
    ellipse(30, 10, 30, 30);
    fill(232, 244, 255);
    rect(320, 0, 80, 100);
    fill(324, 212, 206);
    rect(277, 0, 40, 95);
    ellipse(315, 75, 30, 60)
    ellipse(315, 0, 20, 20);

    //white paneling nonslant
    fill(255, 255, 255);
    noStroke();
    rect(285, 100, 115, 30);

    //red
    fill(255, 0, 0);
    noStroke();
    rect(0, 135, width, height/2);

    //white paneling slant
    fill(255,255,255);
    noStroke();
    rotate(83);
    rect(25, -270, 140, 30);

    //black paneling slant 1
    fill(0, 0, 0);
    noStroke();
    rect(15, -240, 150, 9);

    //black paneling slant 2
    fill(0, 0, 0);
    noStroke();
    rect(20, -275, 150, 9);

    //black line on small white
    fill(0,0,0);
    resetMatrix();
    noStroke();
    rect(285, 95, 115, 7);

     //black line 1
     fill(0, 0, 0);
     rect(0,130,width,7);

     //black line 2
     fill(0,0,0);
     rect(0, 168, width, 7);

     //blac line 3
     fill(0,0,0);
     rect(0, 200, width, 7);

     //curve black lines
     stroke(0);
     strokeWeight(7);
     noFill();
     curve(-5, 62, 10, 132, 60, 60, 200, 200);
     curve(300, 200, 330, 96, 316, 50, 267, 100);
     curve(500, 600, 320, 0, 320, 45, 270, 330);

     //line connections
     strokeWeight(7);
     line(0, 15, 45, 60);
     line(62, 60, 246, 71);
     line(66, -12, 55, 58)
     strokeWeight(10);
     line(215, -1, 237, 8);
     strokeWeight(7);
     line(315, 49, 279, 40);
     strokeWeight(6);
     line(323, 10, 330, 0);
     
    fill(0);
    noStroke();
}