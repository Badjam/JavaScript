function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var context = canvas.getContext('2d');
    var path = new Path2D();
    path.moveTo(25,200);
    path.arcTo(
      25,               // Kontrollpunkt x1-Koordinate
      25,               // Kontrollpunkt y1-Koordinate
      200,              // Kontrollpunkt x2-Koordinate
      25,               // Kontrollpunkt y2-Koordinate
      90                // Radius
    );
    path.lineTo(200, 25);
    context.stroke(path);
  }
}