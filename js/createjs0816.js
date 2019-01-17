window.addEventListener("load", init);

var  w = canvas.width = window.innerWidth,
        h = canvas.height = window.innerHeight,
        countNum = 1;  //透明度
        boxCounter = 0;　//
        boxCounterN = 0; //
        handTickboxCounter = 0; // tickのsettimeout増加数
        var shapeList = [];

function blocks(){

  this.init = function(x,y){
      var stage = new createjs.Stage('canvas');
      var boxNumber = 20;
      var boxWidth = w/boxNumber;
      var g = Math.ceil(boxWidth);
      var countNumberTimer = 10; // 列のboxが入れ替わる数値
      var boxHeightNumber = Math.ceil(h/boxNumber);

      var container = new createjs.Container();
      container.x = 0;
      container.y = 0;
      stage.addChild(container);

   for (var s = 0; s < boxHeightNumber; s++) {
        shapeList[s] = [];
            for (var i = 0; i < boxNumber; i++) {

                var  shape = new createjs.Shape();
                  shape.graphics.beginFill("#7fffd4").drawRect(0,0,boxWidth,boxWidth);
                  shape.x = boxWidth*i + boxWidth/2 ;
                  shape.y = boxWidth*s + boxWidth/2 ;
                  shapeList[s][i]  = shape;
                  container.addChild(shape);
            }
    }

  var listener = createjs.Ticker.addEventListener("tick", handTick);

        function handTick(){

              for (var s = 0; s < boxHeightNumber; s++) {
                  for (var n = 0; n < boxNumber; n++) {

                        if( boxCounter > s ){

                            shape = shapeList[boxCounter][n];
                            shape.regX = boxWidth/2;
                            shape.regY = boxWidth/2;
                            shape.scaleX = 0;
                            shape.scaleY = 0;

                        }

                        // if( boxWidth/2 == countNumberTimer/2 ){

                        //     shape = shapeList[boxCounter][n];
                        //     shape.regX = boxWidth/2;
                        //     shape.regY = boxWidth/2;
                        //     shape.scaleX = countNum;
                        //     shape.scaleY = countNum;
                        //     shape.alpha -= 0.1;

                        // }

                        if( boxCounter == s ){

                            shape = shapeList[(boxCounter)][n];
                            shape.regX = boxWidth/2;
                            shape.regY = boxWidth/2;
                            shape.scaleX = countNum;
                            shape.scaleY = countNum;
                            shape.alpha -= 0.1;

                      }else {

                            shape = shapeList[s][n];
                            shape.regX = boxWidth/2;
                            shape.regY = boxWidth/2;
                            shape.scaleX = 1;
                            shape.scaleY = 1;

                        }

                       // if( countNumberTimer%4 >= s ){

                       //      shape = shapeList[(boxCounter+1)][n];
                       //      shape.regX = boxWidth/2;
                       //      shape.regY = boxWidth/2;
                       //      shape.scaleX = countNum;
                       //      shape.scaleY = countNum;
                       //      shape.alpha -= 0.1;

                       //  }


                  }
                }

                if( handTickboxCounter == countNumberTimer ){
                  boxCounter ++;
                }

              stage.update();
              countNum -= 0.1;

                  if(countNum <= 0){
                    countNum = 0;
                  }

                  if( handTickboxCounter == countNumberTimer  ){
                    handTickboxCounter = 0;
                    countNum = 1;
                  }

              handTickboxCounter ++;
              console.log(handTickboxCounter);


if(boxCounter >= 16){
 createjs.Ticker.removeEventListener('tick', listener);
}

              }
  }

}

var n = new blocks();
var d = new blocks();

function init(){

    n.init(10,10);

  }
