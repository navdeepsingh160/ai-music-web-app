function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);


}

function modelLoaded(){
    console.log("PoseNet Is Initialized");
}


function gotPoses (results) {
    if(results.length > 0)
    {
    console.log(results);


    scoreLeftWrist = results[0].pose.keypoints[9].score;
    scoreRightWrist = results[0].pose.keypoints[10].score;

    console.log("scoreRightWrist = "+ scoreRightWrist + "score left = " + scoreLeftWrist);

    }
}


song1 = "";
song2 = "";

rightWristX = 0;
rightWristY = 0;

lefttWristX = 0;
leftWristY = 0;

scoreLeftWrist = 0;
scoreRightWrist = 0;

song1_status = "";
song2_status = "";

function preload(){
    song1 =  loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
    

}

function draw(){
    image(video, 0, 0, 640, 420);

    fill("#FF0000");
    stroke("#FF0000");

    song1_status = song1.isPlaying();
    song2_status = song2.isPlaying();

    if(scoreLeftWrist > 0.2)
    {
        circle(leftWristX, leftWristY, 20);
        song2.stop();

        if(song1_status == false)
        {
            song1.play();
            document.getElementById("song").innerHTML = "playing harrypoter song";
            
        }
    }
    
          

}




