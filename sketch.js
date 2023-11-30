noseX = 0;
noseY = 0;

function setup() {
  canvas = createCanvas(400, 400);
  video = createCapture(VIDEO);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function draw() {
  background(0);
  image(video, 0, 0, 400, 400);
  fill(255, 0, 0);
  stroke(255, 0, 0);
  circle(noseX, noseY, 20);
}

function modelLoaded() {}

function gotPoses(results) {
  noseX = results[0].pose.nose.x;
  noseY = results[0].pose.nose.y;
}
