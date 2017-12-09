// var myGamePiece;
//
// function startGame() {
//     myGameArea.start();
//     myGamePiece = new component(30, 30, "red", 10, 120);
// }
//
// var myGameArea = {
//     canvas : document.createElement("canvas"),
//     start : function() {
//         this.canvas.width = 480;
//         this.canvas.height = 270;
//         this.context = this.canvas.getContext("2d");
//         document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//         this.interval = setInterval(updateGameArea, 20);
//         window.addEventListener('keydown', function (e) {
//             myGameArea.keys = (myGameArea.keys || []);
//             myGameArea.keys[e.keyCode] = (e.type == "keydown");
//         })
//         window.addEventListener('keyup', function (e) {
//             myGameArea.keys[e.keyCode] = (e.type == "keydown");
//         })
//     },
//     clear : function(){
//         this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//     }
// }
//
// function component(width, height, color, x, y) {
//     this.gamearea = myGameArea;
//     this.width = width;
//     this.height = height;
//     this.speedX = 0;
//     this.speedY = 0;
//     this.x = x;
//     this.y = y;
//     this.update = function() {
//         ctx = myGameArea.context;
//         ctx.fillStyle = color;
//         ctx.fillRect(this.x, this.y, this.width, this.height);
//     }
//     this.newPos = function() {
//         this.x += this.speedX;
//         this.y += this.speedY;
//     }
// }
//
// function updateGameArea() {
//     myGameArea.clear();
//     myGamePiece.speedX = 0;
//     myGamePiece.speedY = 0;
//     if (myGameArea.keys && myGameArea.keys[37]) {myGamePiece.speedX = -5; }
//     if (myGameArea.keys && myGameArea.keys[39]) {myGamePiece.speedX = 5; }
//     if (myGameArea.keys && myGameArea.keys[38]) {myGamePiece.speedY = -5; }
//     if (myGameArea.keys && myGameArea.keys[40]) {myGamePiece.speedY = 5; }
//     myGamePiece.newPos();
//     myGamePiece.update();
// }


///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

// document.onkeydown = checkKey;
//
// function checkKey(e) {
//
//     e = e || window.event;
//
//     if (e.keyCode == '38') {
//         // up arrow
//     }
//     else if (e.keyCode == '40') {
//         // down arrow
//     }
//     else if (e.keyCode == '37') {
//        // left arrow
//     }
//     else if (e.keyCode == '39') {
//        // right arrow
//     }
//
// }


///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

var canvas = document.getElementById('gamearea');
canvas.getContext('2d');


var spatialship = document.getElementById('spatialship');
var verticalPosition = (canvas.offsetHeight - spatialship.offsetHeight)/2;
var horizontalPosition = 10;
spatialship.style.top = verticalPosition + 'px';
spatialship.style.left = horizontalPosition + 'px';
// var interval = setInterval(myFunction, 20);


// var mySpatialship = new spatialship(50, 50, 0, 0, 'blue', canvas);
//
// function spatialship(width, height, posX, posY, color, canvas){
//   this.gamearea = canvas;
//   this.width = width;
//   this.height = height;
//   this.x = posX;
//   this.y = posY;
//   this.color = color;
// }


window.onkeydown = myFunction;

function myFunction(event){
  var key = event.which || event.keyCode;   //pour mozilla

  if(key == '40'){
    verticalPosition += 10;
  }
  if (key == '38'){
    verticalPosition -= 10;
  }
  if(key == '37'){
    horizontalPosition -= 10;
  }
  if (key == '39'){
    horizontalPosition += 10;
  }

  spatialship.style.top = verticalPosition + 'px';
  spatialship.style.left = horizontalPosition + 'px';
}
