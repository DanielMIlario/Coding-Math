window.onload = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;

  context.translate(0, height / 2);
  context.scale(1, -1);
  
    var rads = (1 * Math.PI) / 180;
  for(var angle = 0; angle <=  Math.PI * 2; angle += rads) {
      var x = angle * 200;
      var y =Math.sin(angle) * 200;

      context.fillRect(x, y, 5, 5);
  }
}
