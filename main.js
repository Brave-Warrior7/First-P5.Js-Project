function preload(){
circle_1=loadImage('https://i.postimg.cc/4nCxW45T/R-removebg-preview.png'); 
}

function setup(){
  canvas=createCanvas(400, 300);
  canvas.center();
  video=createCapture(VIDEO);
  video.hide();
}

function draw(){
  stroke("green");
  rect(40, 35, 330, 230);
  image(video, 100, 70, 210, 160);
  image(circle_1, 350, 246, 40,40);
  image(circle_1, 26, 246, 40,40);
  image(circle_1, 26, 20, 40,40);
  image(circle_1, 350, 20, 40,40);

}



function take_snapshot(){
  save('pic.png');
}
