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
let randinc1 = 0
let randinc2 = 0
let randinc3 = 0
let curr2 = 0
let inc2 = 0


let backx = []
let backy = []
let backx2 = []
let backy2 = []

let foreNum = 50
let foreRange = 200

let forex = []
let forey = []

let forey2 = []
let forex2 = []

let forey3 = []
let forex3 = []

let forey4 = []
let forex4 = []

let forey5 = []
let forex5 = []

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
        forex[j] = innerWidth/3
        forex2[j] = innerWidth/4
        forex3[j] = innerWidth/6
        forex4[j] = innerWidth/7
        forex5[j] = innerWidth/8
        forey[j] = innerHeight/3
        forey2[j] = innerHeight/4
        forey3[j] = innerHeight/5
        forey4[j] = innerHeight/6
        forey5[j] = innerHeight/2
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

    // draw all back
    for (let i = 0; i < backNum; i++){
        fill(255)
        stroke(255)
        ellipse(backx[i], backy[i], 2)
    }

    for (let i = 0; i < 7; i++){
        let x = floor(random(0, backNum-1)) 
        let y = floor(random(0, backNum-1))
        make_dot(backx[x], backy[y])
        make_dot(backx2[x], backy2[y])
    }

    // draw all fore (1 and 2).....
    for ( let i = 1; i < foreNum; i++ ) {
        forex[i - 1] = forex[i];
        forey[i - 1] = forey[i];

        forex2[i - 1] = forex2[i];
        forey2[i - 1] = forey2[i];

        forex3[i - 1] = forex2[i];
        forey3[i - 1] = forey2[i];

        forex4[i - 1] = forex2[i];
        forey4[i - 1] = forey2[i];

        forex5[i - 1] = forex2[i];
        forey5[i - 1] = forey2[i];
    }
    forex[foreNum - 1] += random(-foreRange, foreRange);
    forey[foreNum - 1] += random(-foreRange, foreRange);
    forex[foreNum - 1] = constrain(forex[foreNum - 1], 0, innerWidth/1.03);
    forey[foreNum - 1] = constrain(forey[foreNum - 1], 0, innerHeight/1.6);

    forex2[foreNum - 1] += random(-foreRange, foreRange);
    forey2[foreNum - 1] += random(-foreRange, foreRange);
    forex2[foreNum - 1] = constrain(forex2[foreNum - 1], 0, innerWidth/1.12);
    forey2[foreNum - 1] = constrain(forey2[foreNum - 1], 0, innerHeight/1.13);

    forex3[foreNum - 1] += random(-foreRange, foreRange);
    forey3[foreNum - 1] += random(-foreRange, foreRange);
    forex3[foreNum - 1] = constrain(forex3[foreNum - 1], 0, innerWidth/1.18);
    forey3[foreNum - 1] = constrain(forey3[foreNum - 1], 0, innerHeight/1.07);

    forex4[foreNum - 1] += random(-foreRange, foreRange);
    forey4[foreNum - 1] += random(-foreRange, foreRange);
    forex4[foreNum - 1] = constrain(forex4[foreNum - 1], 0, innerWidth/1.2);
    forey4[foreNum - 1] = constrain(forey4[foreNum - 1], 0, innerHeight/1.1);

    forex5[foreNum - 1] += random(-foreRange, foreRange);
    forey5[foreNum - 1] += random(-foreRange, foreRange);
    forex5[foreNum - 1] = constrain(forex5[foreNum - 1], 0, innerWidth/1.09);
    forey5[foreNum - 1] = constrain(forey5[foreNum - 1], 0, innerHeight/1.11);


    for ( let j = 1; j < foreNum; j++ ) {
        let val = j / foreNum * 204.0 + 51;
        stroke(val);
        line(forex[j - 1], forey[j - 1], forex[j], forey[j]);

        // stroke(val);
        line(forex2[j - 1], forey2[j - 1], forex2[j], forey2[j]);

        // stroke(val);
        line(forex3[j - 1], forey3[j - 1], forex3[j], forey3[j]);

        // stroke(val);
        line(forex4[j - 1], forey4[j - 1], forex4[j], forey4[j]);

        // stroke(val);
        line(forex5[j - 1], forey5[j - 1], forex5[j], forey5[j]);
    }
   
}