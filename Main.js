nose_x=""
nose_y=""
function preload() {
   img=loadImage("https://i.postimg.cc/W3LZLKs4/6cp5-Gyy9i.png")
}
function setup() {
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    posenet=ml5.poseNet(video,model_loaded)
    posenet.on("pose",getPoses)
}
function draw() {
    image(video,0,0,300,300)
    fill("red")
    stroke("black")
    image(img,nose_x-30,nose_y-15,60,60)
}
function TakeSnapshot() {
    save("Filter-ed.png")
}
function getPoses(Results) {
    if (Results.length>0) {
        console.log(Results)
        nose_x=Results[0].pose.nose.x
        nose_y=Results[0].pose.nose.y
        console.log(nose_x,nose_y)
    }
    
}
function model_loaded() {
    console.log("PoseNet is initialiezed")
}