noseX=0;
noseY=0;



function preload(){
    clownose=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function setup(){

        canvas=createCanvas(650,500);
        canvas.center();
        video=createCapture(VIDEO);
        video.hide();
    posenet=ml5.poseNet(video,modeloaded);
    posenet.on('pose',getposes);
    }

    function draw(){
        image(video,0,0,650,500);
        image(clownose,noseX,noseY,50,50);
     
    }
    function take_snapshot(){
        save("mahima.png");
    }    

    function modeloaded(){
        console.log("model is loaded");
    }


function getposes(results){
    console.log(results);
    noseX=results[0].pose.nose.x-15;
    noseY=results[0].pose.nose.y-15;
    
}






