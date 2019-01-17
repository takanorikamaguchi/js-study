
window.addEventListener('load', init);

var obj;
var  w = canvas.width = window.innerWidth,
        h = canvas.height = window.innerHeight;

       var container = new createjs.Container();
        container.x = 200;
        container.y = 0;

function CreateCircle(x,y,radius,color){

    this.x = x;
    this.y = x;
    this.Shape_constructor();
    this.initialize(x,y,radius,color);

}

createjs.extend(CreateCircle,createjs.Shape);
createjs.promote(CreateCircle,'Shape');

function shikaku(x,y,width,height,colorR){

    this.x = x;
    this.y = y;
    this.Rect_constructor();
    this.nnn(x,y,width,height,colorR);
}

createjs.extend(shikaku,createjs.Shape);
createjs.promote(shikaku,'Rect');

shikaku.prototype.nnn = function(x,y,width,height,colorR){
    this.graphics.beginFill(colorR).drawRect(x,y,width,height);
    this.x = x;
    this.y = y;
}

CreateCircle.prototype.initialize = function(x,y,radius,color){
    this.graphics.beginFill(color).drawCircle(0,0,radius);
    this.x = x;
    this.y = y;
    this.radius = radius;
}

var container;
function init(){
    var stage = new createjs.Stage('canvas');
    stage.addChild(container);
    obj = new CreateCircle(10,10,10, '#ff0');
    stage.addChild(obj);

    objx = new shikaku(10,100,120,120, '#ccc');
    this.objx01 = new shikaku(100,100,30,30, '#333');
    this.objx02 = new shikaku(70,100,50,50, '#000');
    container.addChild(objx);
    container.addChild(this.objx01);
    container.addChild(this.objx02);
    stage.update();

  var listener = createjs.Ticker.addEventListener("tick", handTick);
function handTick(){

    container.rotation += 1;
    stage.update();

  }
}

