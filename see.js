(function(w){
var isArray = Array.isArray;

function property(object, path){
  if( object == null || typeof object != 'object' ) return;
  return (isArray(object)) ? object.map(createProcessFunction(path)) : createProcess;
}

function createProcessFunction(path){
  if( typeof path == 'string' ) path = path.split('.');
  if( !isArray(path) ) path = [path];

  return function(object){
    var index = 0,
          length = path.length;
          while(index < length) {
            object = object[toString(path[index++])];
          }
          return (index  && index == length) ? object :void 0;
  };
 }

 })();

var c = document.getElementById('canvas');
var ctx = c.getContext("2d");
var mask;

var pointCount = 500;
var str = "NNN";
var fontStr = "bold 128pt Helvetica Neue, Helvetica, Arial, sans-serif";

ctx.font = fontStr;
ctx.textAlign = "center";
c.width = ctx.measureText(str).width;
c.height = 128; // Set to font size

var wPixels = [];
var points = [];
var point = function(x,y,vx,vy){
  this.x = x;
  this.y = y;
  this.vx = vx || 1;
  this.vy = vy || 1;
}

point.prototype.update = function() {
  ctx.beginPath();
  ctx.fillStyle = '#95a5a6';
  ctx.arc(this.x,this.y,4,0,4*Math.PI);
  ctx.fill();
  ctx.closePath();

  if(this.x+this.vx >= c.width || this.x+this.vx < 0 || mask.data[coordsToI(this.x + this.vx, this.y, mask.width)] != 255 ){
    this.vx *=-1;
    this.x += 20;
  }
  if(this.y+this.vy >= c.height || this.y+this.vy < 0 || mask.data[coordsToI(this.x, this.y + this.vy,  mask.width)] != 255 ){
    this.vy *=-1;
    this.y += 20;
  }

  for (let k = 0, m =  points.length; k<m; k++) {
    if(points[k] ===this ) continue;
    
    var d = Math.sqrt(Math.pow(this.x-points[k].x,2)+Math.pow(this.y-points[k].y,2));

    // if(d < 5){
    //   ctx.lineWidth = .2;
    //   ctx.beginPath();
    //   ctx.moveTo(this.x,this.y);
    //   ctx.lineTo(points[k].x,points[k].y);
    //   ctx.stroke();
    // }
    // if(d < 20){
    //   ctx.lineWidth = .1;
    //   ctx.beginPath();
    //   ctx.moveTo(this.x,this.y);
    //   ctx.lineTo(points[k].x,points[k].y);
    //   ctx.stroke();
    // }
  }

  this.x += this.vx;
  this.y += this.vy;

}

function loop(){
  ctx.clearRect(0,0,c.width,c.height);
  for (let k = 0; k < points.length; k++) {
    points[k].update();
  }
}

function init(){
  ctx.beginPath();
  ctx.fillStyle = "#000";
  ctx.rect(0,0,c.width, c.height );
  ctx.fill();
  ctx.font = fontStr;
  ctx.textAlign = "left";
  ctx.fillStyle = "#fff";
  ctx.fillText(str,0,c.height/2+(c.height / 2));
  ctx.closePath();

 mask = ctx.getImageData(0,0, c.width, c.height);

 ctx.clearRect(0,0,c.width,c.height);

   for (let i = 0; i < mask.data.length; i +=4) {
     
      if(mask.data[i] == 255 && mask.data[i+1] == 255 && mask.data[i+2] == 255 && mask.data[i+3] == 255 ){
        wPixels.push([iToX(i, mask.width),iToY(i, mask.width)]);
        // wPixels.push([iToX(i, mask.width),iToY(i, mask.width)]);
      }
    }

    for (let k = 0; k < pointCount; k++) {
      addPoint(k,k);
    }
}


function addPoint(k,k){
  // var spawn = wPixels[Math.floor(Math.random()*wPixels.length)];
  var spawn = wPixels[Math.floor(0.3*wPixels.length+k)];
var p = new point(spawn[0]+k,spawn[1], 3*2-1, 0.2*2-1 );

   points.push(p);
}

function iToX(i,w){
  return ((i%(4*w))/4);
}
function iToY(i,w){
  return (Math.floor(i/(4*w)));
}
function coordsToI(x,y,w){
  return ((mask.width*y)+x)*4;
}

// setInterval(loop,50);
init();
loop();
