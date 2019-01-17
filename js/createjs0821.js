window.addEventListener("load", init);

function getRandom(min, max){
  return Math.floor(Math.random() * (max - min) +min) ;
}

var  w = canvas.width = window.innerWidth,
        h = canvas.height = window.innerHeight,
        countNum = 1,
        countNumBoxInner = 1,
        Ball,
        boxWidth = 5;  //透明度
        handTickboxCounter = 0; // tickのsettimeout増加数
        var shapeList = [];
        var randomColor = ['#98fb98','#7fff00','#adff2f','#7fffd4','#7fffd4','#e0ffff'];

function blocks(y,x,documentId){
  var stage = new createjs.Stage(documentId);
  var container = new createjs.Container();
  container.x = x;
  container.y = y;
  var speedX = 3;
  var speedY = 3;
  stage.addChild(container);

  this.init = function(x,y){

  ballBlock(100,10);
  ballBlock(300,10);
  var listener = createjs.Ticker.addEventListener("tick", handTick);

  function handTick(){

    var nn =  function() {
      container.x += speedX;
      container.y += speedY;
    }

    stage.addChild(container);
    stage.update();

    if( countNum > 0 && countNum <= 10 ){

      speedX += 8;
      speedY += -3;
      nn();

    }else if( countNum > 10 && countNum <= 20 ){

      speedX += -10;
      speedY += 8;
      nn();

    }else if( countNum > 20 && countNum <= 30 ){

      speedX += 5;
      speedY += -8;
      nn();

    } else if( countNum > 30 && countNum <= 50 ){
      
      for (let d = 0; d < 10; d++) {
        for (let g = 0; g < 10; g++) {

         Ball = shapeList[d][g];
          // Ball = new createjs.Shape();
          Ball.graphics.beginFill('#ccc').drawRect(0,0,boxWidth,boxWidth);

          if( countNum > 30 && countNum <= 40 ){
            if(g < 5){
              Ball.x += g/2;
              Ball.y += d;
              console.log(countNum);
            }else {
              Ball.x += g/2;
              Ball.y += d; 
            }
          }else if(countNum > 40 && countNum <= 50){
             Ball.rotation += 5;
             Ball.x -= g/2;
             Ball.y -= d; 
          }

          container.addChild(Ball);
          
        }
      }

      stage.update();

      countNumBoxInner ++;

    }else if(countNum > 120 && countNum <= 140 ){

      speedX += -3;
      speedY += 10;
      nn();

    }

    if(countNum == 140){
      countNum = 0;
    }

    countNum ++;
  //createjs.Ticker.removeEventListener('tick', listener);  end event

}

        
  }

  
  var ballBlock = function(py,px){

    container.x = px;
    container.y = py;z

    for (let d = 0; d < 10; d++) {
      shapeList[d] = [];
      for (let g = 0; g < 10; g++) {

        Ball = new createjs.Shape();
        Ball.graphics.beginFill('#ccc').drawRect(0,0,boxWidth,boxWidth);
        Ball.x = 10*g;
        Ball.y = 10*d;

        shapeList[d][g] = Ball;
        container.addChild(Ball);
        
      }
    }

    stage.update();
  }

}

var c = new blocks(400,50,canvas);

function init(){
    c.init();
  }
