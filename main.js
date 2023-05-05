var nose_x;
var nose_y;

var right_wrist_x;
var left_wrist_x;
var difference;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500)
    canvas  = createCanvas(550,550)
    canvas.position(560,150)

    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotPoses)

}
function modelLoaded(){
    console.log("PoseNet model is initialized")
}
function draw(){
    background("#808080");
    fill("#3BB143")
    stroke("#3BB143")
    textSize(difference)
    text("Amaey has created this app",50,200)
    

}
function gotPoses(results){
    if (results.length > 0){
        console.log(results)
         nose_x  = results[0].pose.nose.x
         nose_y = results[0].pose.nose.y
         console.log("nose x is" + nose_x + "nose y is" + nose_y)

        right_wrist_x = results[0].pose.rightWrist.x;
        left_wrist_x = results[0].pose.leftWrist.x
        difference = floor(left_wrist_x - right_wrist_x);
        console.log("difference = " + difference);
    }


}