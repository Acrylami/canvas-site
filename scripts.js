//Get canvas
var c = document.getElementById("myCanvas");

//Create context object
var ctx = c.getContext("2d");

ctx.font = "30px Arial";
ctx.fillText("Hello it's Arlyn", 10, 50);

ctx.moveTo(0, 0);
ctx.lineTo(100, 100);
ctx.strokeStyle = 'rgba(200, 0, 200, 1)';
ctx.stroke();

ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.strokeStyle = 'rgba(150, 200, 26, 1)';
ctx.stroke();
ctx.fillStyle = 'rgba(36, 34, 165, 0.5)';
ctx.fill();
ctx.closePath();

//Postition of circle
var x = 25;
var y = 123;
//Speed of circle
var dx = 3;
var dy = 3;

setInterval(draw, 10);

function draw() {
    //Draw circle
    ctx.clearRect(0, 0, 400, 400);
    ctx.beginPath();
    ctx.arc(x, y, 40, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    x += dx;
    y += dy;

    if (x > 400 || x < 0) {
        dx = -dx;
    } else if (y > 400 || y < 0) {
        dy = -dy;
    }
}
