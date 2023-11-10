function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

}
song1 = "";
song2 = "";

function preload(){
    song1 =  loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
    

}

function draw(){
    image(img, 0, 0, 640, 420);
    
          

}


