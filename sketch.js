function setup() {
    createCanvas(400, 269);
    angleMode(DEGREES);
    //(x, y, width, height);
}
function draw(){
    background(100);
    
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

     //line connections
     strokeWeight(7);
     line(0, 15, 45, 60);
     line(62, 60, 246, 71);
     line(66, -12, 55, 58)
     strokeWeight(10);
     line(215, -1, 237, 8);
     strokeWeight(7);
     line(315, 49, 279, 40);
     

    fill(0);
    noStroke();
    text(mouseX, 100, 100);
    text(mouseY, 100, 110);

}