/**
 * Created by Valera_alt on 17-Sep-16.
 */
var canvas = document.getElementById('image'),
    ctx = canvas.getContext('2d'),
    w = canvas.width,
    h = canvas.height,
    x1 = -1,                 /// start points
    y1 = -1,
    isDown = false;     /// if mouse button is down

/// handle mouse down
canvas.onmousedown = function(e) {
    isDown = true;
}

/// clear isDown flag to stop
    canvas.onmouseup = function(e) {
    var rect = canvas.getBoundingClientRect();
    x1 = e.clientX - rect.left;
    y1 = e.clientY - rect.top;
    ctx.clearRect(0, 0, w, h);
    drawEllipse(x1, y1 , 1);
    isDown = false;
}
function drawEllipse(x, y, r) {
    ctx.clearRect(0, 0, w, h);
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.fillStyle = "red";
    ctx.arc(x,y,r,0,2*Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x,y,7,0,2*Math.PI);
    ctx.stroke();
}