var points = [];
var mult = 0.004;

function setup() {
createCanvas(windowWidth, windowHeight/2);
background(0, 41, 58);
angleMode(DEGREES);
noiseDetail(20);

var density = 100;
var space = width / density ;

for (var x = 0; x < width; x += space){
 for(var y = 0; y <height; y +=  space){
 var p = createVector(x + random(-10, 10),y+ random(-10, 10));
 points.push(p);
 } 
}

}


function draw() {
noStroke();

smooth();

for(var i = 0; i < points.length; i++){
  
    //esta parte genera colores de forma aleatoria, lo comenté porque me interesa la atmósfera marina que tiene ahora
 // var r = map(points[i].x, 0, width, 50, 255);
 // var g = map(points[i].y, 0, height, 50, 255);
 // var b = map(points[i].x, 0, width, 255, 50);
  
  //fill(r, g, b);
    
    fill (230);
  var angle = map(noise (points[i].x * mult, points[i].y* mult), 0, 1, 0, 720);
  points[i].add(createVector(cos(angle), sin(angle)));
  
ellipse(points[i].x, points[i].y, 1);

}
}


function mousePressed(){


}
