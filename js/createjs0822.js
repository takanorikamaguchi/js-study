window.addEventListener("load", init);

function getRandom(min, max){
  return Math.floor(Math.random() * (max - min) +min) ;
}

var  w = canvas.width = window.innerWidth,
        h = canvas.height = window.innerHeight,
        countNum = 1,
        countNumBoxInner = 1,
        BallBlock,
        BallBlockInNumber = 30,
        BallList = [];
        boxWidth = 5; 
        handTickboxCounter = 0;


function blocko(){

  var stage = new createjs.Stage('canvas')

  this.blockN = function(){

    var bll = new createjs.Shape();

    bll.graphics.beginFill('#ff0');
    bll.graphics.drawCircle(100,0,100);
    bll.x = 100;
    bll.y = 100;

    stage.addChild(bll);
    stage.update();

  };

  this.blockC = function(){

    var bll = new createjs.Shape();

    bll.graphics.beginFill('#000');
    bll.graphics.drawCircle(100,0,80);
    bll.x = 500;
    bll.y = 100;

    stage.addChild(bll);
    stage.update();

  };

  this.blockG = function(){

    var bll = new createjs.Shape();

    bll.graphics.beginFill('#ccc');
    bll.graphics.drawCircle(100,0,50);
    bll.x = 300;
    bll.y = 400;

    stage.addChild(bll);
    stage.update();

  };

  function blockGroup() {
    this.BallGpPosX = 500;
    this.BallGpPosY = 500;
  }

  blockGroup.prototype = new blockGroup();

  blockGroup.prototype.bn01 = function(){

    var BallGp = new createjs.Container();
    stage.addChild(BallGp);

    for (let l = 0; l < BallBlockInNumber; l++) {
       BallList[l] = [];
      for (let n = 0; n < BallBlockInNumber; n++) {
        BallBlock = new createjs.Shape();
        BallBlock.graphics.beginFill('#ccc').drawCircle(0,0,2);
        
        BallBlock.x = 15*n;
        BallBlock.y = 15*l;

        BallList[l][n] = BallBlock;

        BallGp.addChild(BallBlock);
        
      }
    }

    BallGp.x = this.BallGpPosX;
    BallGp.y = this.BallGpPosY;

    stage.update();

  };

  blockGroup();

  blockGroup.prototype.n02 = function(){

    let BallGp = new createjs.Container();
    stage.addChild(BallGp);
    let shapeListn = []
    let Ballk;

    for (let l = 0; l < BallBlockInNumber; l++) {
      shapeListn[l] = [];
      for (let n = 0; n < BallBlockInNumber; n++) {
        Ballk = new createjs.Shape();
        Ballk.graphics.beginFill('#ff0').drawCircle(0,0,2);
        
        Ballk.x = 15*n;
        Ballk.y = 15*l;

        shapeListn[l][n] = Ballk;

        BallGp.addChild(Ballk);
        
      }
    }

    this.BallGpPosX = 100;
    this.BallGpPosY = 100;
    console.log(this.BallGpPosX);

    BallGp.x = this.BallGpPosX;
    BallGp.y = this.BallGpPosY;
    stage.update();

  } 

  var bn = new blockGroup();


  // bn.n01();
  console.log( bn.n01());


  this.update = function(){
    stage.update();
  }


 }

var b = new blocko();

function init(){
  b.blockN();
  b.blockC();
  b.blockG();
  b.update();
  // b.blockGroup();
}
