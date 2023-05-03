
noseX=0;
noseY=0;

function preload(){
clown_nose = loadImage('https://i.postimg.cc/59vtCxyy/CLOWN-NOSE-removebg-preview.png');
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCanvas(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,300,300);
    image(clown_nose, noseX-15, noseY-15, 30, 30)
}

function modelLoaded(){
    console.log('poseNet is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        console.log("nose x ="+ noseX);
        console.log("nose y ="+ noseY);
    }
}







