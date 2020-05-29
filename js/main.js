/* DISCLAIMER: this is not the best way to write this code
 *      but this was the best way to write it while experimenting
 *      if the mood hits i'll come back and clean it up
 * SOURCES: playing around with the brownian motion code on the p5 examples
 *      https://p5js.org/examples/simulate-brownian-motion.html
 */

let backNum = 200
let rangex = innerWidth
let rangey = innerHeight 
let curr = 0
let inc = 0
let curr2 = 0
let inc2 = 0

let backx = []
let backy = []
let backx2 = []
let backy2 = []

let foreNum = 8
let foreRange = 200

let forex = []
let forey = []

let forey2 = []
let forex2 = []

function setup() {
    var cnv = createCanvas(innerWidth/1.03, innerHeight/1.6)
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);

    for (let i = 0; i < backNum; i++){
        backx[i] = random(0, innerWidth/1.03)
        backy[i] = random(0, innerHeight/1.6)
        backx2[i] = random(0, innerWidth/1.03)
        backy2[i] = random(0, innerHeight/1.6)
    }
    for (let j = 0; j < foreNum; j++){
        forex[j] = innerWidth/2
        forex2[j] = innerWidth/2
        forey[j] = innerHeight/2
        forey2[j] = innerHeight/2
    }
    frameRate(1)
}

function make_dot(x, y) {
    stroke(random (100, 255), random (100, 255), random (100, 255))
    fill(random (100, 255), random (100, 255), random (100, 255))
    ellipse(x, y, 40) 
    stroke(random (50, 100), random (50, 100), random (50, 100))
    fill(random (50, 100), random (50, 100), random (50, 100))
    ellipse(x, y, 30) 
    stroke(random (0, 50), random (0, 50), random (0, 50))
    fill(random (0, 50), random (0, 50), random (0, 50))
    ellipse(x, y, 15) 
}

function draw() {
    background(10)

    // draw all fore (1 and 2).....
    for ( let i = 1; i < foreNum; i++ ) {
        forex[i - 1] = forex[i];
        forey[i - 1] = forey[i];
    }
    forex[foreNum - 1] += random(-foreRange, foreRange);
    forey[foreNum - 1] += random(-foreRange, foreRange);
    forex[foreNum - 1] = constrain(forex[foreNum - 1], 0, innerWidth/1.03);
    forey[foreNum - 1] = constrain(forey[foreNum - 1], 0, innerHeight/1.6);
    for ( let j = 1; j < foreNum; j++ ) {
        let val = j / foreNum * 204.0 + 51;
        stroke(val);
        line(forex[j - 1], forey[j - 1], forex[j], forey[j]);
    }

    for ( let i = 1; i < foreNum; i++ ) {
        forex2[i - 1] = forex2[i];
        forey2[i - 1] = forey2[i];
    }
    forex2[foreNum - 1] += random(-foreRange, foreRange);
    forey2[foreNum - 1] += random(-foreRange, foreRange);
    forex2[foreNum - 1] = constrain(forex2[foreNum - 1], 0, innerWidth/1.2);
    forey2[foreNum - 1] = constrain(forey2[foreNum - 1], 0, innerHeight/1.1);
    for ( let j = 1; j < foreNum; j++ ) {
        let val = j / foreNum * 204.0 + 51;
        stroke(val);
        line(forex2[j - 1], forey2[j - 1], forex2[j], forey2[j]);
    }

    // draw all back
    for (let i = 0; i < backNum; i++){
        fill(255)
        stroke(255)
        ellipse(backx[i], backy[i], 2)
    }

    // line between curr and next 
    if (curr < backNum - 1) inc = curr + 1
    else inc = 0
    
    make_dot(backx[curr], backy[curr])

    make_dot(backx[inc], backy[inc])
    
    curr = inc

    if (curr2 < backNum - 1) inc2 = curr2 + 1
    else inc2 = 0
    make_dot(backx2[curr2], backy2[curr2])

    make_dot(backx2[inc2], backy2[inc2])
    
    curr2 = inc2
    
}