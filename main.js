function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNET = ml5.poseNet(video, modleLoaded);


}

function modleLoaded(){
    console.log("PoseNet Is Initialized");
}
function gotPoses (results) {
    if(results.length > 0)
    {
    console.log(results);
    }
    }
song1 = "";
song2 = "";

function preload(){
    song1 =  loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
    

}

function draw(){
    image(video, 0, 0, 640, 420);
    
          

}

rightWristX = 0;
rightWristY = 0;

lefttWristX = 0;
leftWristY = 0;


