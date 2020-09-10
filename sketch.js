var ball;
var database;
var position;

function setup(){
    createCanvas(500,500);
    database = firebase.database()
    ball = createSprite(0,0,10,10);
    ball.shapeColor = "red";
    var ballref = database.ref("ball/position");
    ballref.on("value",readPosition)
}

function draw(){
    background("white");
    if(position != undefined){

    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
    }
}

function readPosition(data){
    console.log(data.val())
    position = data.val()
    ball.x = position.x
    ball.y = position.y
}

function changePosition(x,y){
    database.ref("ball/position").update({
        "x": position.x + x,
        "y": position.y + y
    })
}