window.addEventListener("load", init);

var  w = canvas.width = window.innerWidth,
        h = canvas.height = window.innerHeight,
        countNum = 1,  //透明度
        boxCounter = 0,
        plusarufaCounter = 1,
        timerId;　//
        
        boxCounterN = 0; //
        handTickboxCounter = 0; // tickのsettimeout増加数
        var shapeList = [];
        var listener ; // timerStop

function blocks(n){

  this.init = function(x,y){
        var stage = new createjs.Stage('canvas');
        var boxNumber = 30;
        var boxWidth = w/boxNumber;
        var g = Math.ceil(boxWidth);
        var countNumberTimer = 10; // 列のboxが入れ替わる数値
        var boxHeightNumber = Math.ceil(h/boxNumber);

        var container = new createjs.Container();
        container.x = 0;
        container.y = 0;
        stage.addChild(container);
        this.Number = 0;

        var makeBox = function(height){

                  this.Number = height;

                  for (var s = 0; s < boxHeightNumber; s++) {
                    shapeList[s] = [];
                        for (var i = 0; i < boxNumber; i++) {
                        
                          this.shapeN = new createjs.Shape();
                          this.shapeN.graphics.beginFill('#98fb98').drawRect(0,0,boxWidth,boxWidth);
                          this.shapeN.x = boxWidth*i + boxWidth/2 ;
                          this.shapeN.y = boxWidth*s + boxWidth/2 ;
                          this.shapeN.regX = boxWidth/2;
                          this.shapeN.regY = boxWidth/2;
                              shapeList[s][i]  = this.shapeN;
                              container.addChild(this.shapeN);
                        }
                 }

                          stage.update();

                        listener = createjs.Ticker.addEventListener("tick", handTick);

          }

                function handTick(){

                  // plusarufa(0,100,0);                 

                  for (let index = 0; index < boxHeightNumber; index++) {
                    setTimeout(function(){
                      plusarufa(0,100,index);
                    },30*index);

                  }
                    

                            stage.update();
                            countNum -= 0.1;

                                if(countNum <= 0){
                                  countNum = 0;
                                }

                          

                            handTickboxCounter ++;

                            if(handTickboxCounter >= 1000){
                              createjs.Ticker.removeEventListener('tick', listener);
                            }
                }


function plusarufa(xx,yy,k){

  if(this.plusarufaCounter == 0){
    this.scaleNumber = 1;
  }

  for (var n = 0; n < boxNumber; n++) {

    this.shapeN = shapeList[k][n];
    this.shapeN.regX = boxWidth/2;
    this.shapeN.regY = boxWidth/2;
    if(this.shapeN.scaleX <= 0 ){
      this.shapeN.scaleX = 0;
      this.shapeN.scaleY = 0;
    }else{
      this.shapeN.scaleX -= 0.1;
      this.shapeN.scaleY -= 0.1;
    }
    this.shapeN.alpha -= 0.2;

  }
  
} 

    makeBox(0);


    }// this.init

  }

var n = function(){}

n.prototype = new blocks();
var d = new n();

function init(){

setTimeout(function(){
  n.prototype.init(function(){
    makeBox(100);
  });
},200);


    d.init(function(){
      makeBox(0);
    });

  }
