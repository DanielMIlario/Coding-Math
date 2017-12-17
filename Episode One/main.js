window.onload = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;

    function line(x1, y1, x2, y2) {
      context.beginPath();
      context.moveTo(x1, y1)
      context.lineTo(x2, y2)
      context.stroke();
    }
    for(var i = 0; i < 100; i += 1) {
        var startX = Math.random() * width;
        var startY = Math.random() * height;
        var endX = Math.random() * width;
        var endY = Math.random() * height;
        context.strokeStyle = 'rgb(160, 32, 240)'
        line(startX, startY, endX, endY);




    }
};
