song= "";

leftwristx= 0;
rightwristx= 0;

rightwristY= 0;
leftwristY= 0;


function preload(){
    song= loadSound("Sunflower.mp3");
}
function setup(){
    canvas= createCanvas(600,500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();

    poseNet= ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500)
    fill("#556b2f");
    stroke("#483d8b");
    circle(leftwristx, leftwristY, 20);
    inNumberleftwristY= Number(leftwristY);
    removeDecimals= floor(inNumberleftwristY);
    volume= removeDecimals/500;
    document.getElementById("volume").innerHTML= " volume = " + volume;
    song.setVolume(volume);
}

function play1(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function modelloaded(){
    console.log('PoseNet is Initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        rightwristX= results[0].pose.rightWrist.x;
        leftwristX= results[0].pose.leftWrist.x;

        rightwristY= results[0].pose.rightWrist.y;
        leftwristY= results[0].pose.leftWrist.y;

        console.log(" leftwristX = " + leftwristX + " leftwristY = " + leftwristY);
        console.log(" rightwristX = " + rightwristX + " rightwristY = " + rightwristY);
    }
}