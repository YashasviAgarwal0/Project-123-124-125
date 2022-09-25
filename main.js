leftwrist = 0;
rightwrist = 0;
difference = 0;

function preload()
{

}

function setup()
{
    canvas = createCanvas(400, 400);
    canvas.position(600, 225);

    video = createCapture(VIDEO);
    video.size(350, 350);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('Model is Loaded!');
}

function draw()
{
    background('white');
    textSize(difference);
    fill('blue');
    text('Drawing', 30, 100);
}

function gotPoses(results)
{
  if(results.length>0)
  {
     console.log(results);

     leftwristx = results[0].pose.leftWrist.x;
     rightwristx = results[0].pose.rightWrist.x;
     difference = floor(leftwristx - rightwristx);
  }
}