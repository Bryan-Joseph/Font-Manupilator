var rWX = 0;
var lWX = 0;

var difference = 0;

function preload() {

}

function setup() {
    canv = createCanvas(400, 400);
    cam = createCapture(VIDEO);
    cam.size(510, 400);

    document.getElementById('canvHolder').append(cam.elt);
    document.getElementById('canvHolder').append(canv.elt);

    var poseNet = ml5.poseNet(cam, () => {
        console.log('model loaded');
    })

    poseNet.on('pose', result => {
        if (result.length > 0) {
            console.log(result);

            rWX = result[0].pose.rightWrist.x;
            lWX = result[0].pose.leftWrist.x;

            difference = Math.abs(Math.round(rWX - lWX));


            console.log({ rWX });
            console.log({ lWX });

            console.log({ difference });
        }
    });
}

function draw() {
    background(255, 255, 255);


    strokeWeight(10);
    textSize(difference);
    text('Peter', 50, 250);
    
    document.getElementById('dimensionsS').innerHTML = `The size of the font is ${difference}px`
}