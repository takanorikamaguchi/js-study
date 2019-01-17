(function(){
 "use strict";
 var width = 480;
 var height = 260;

 var App,app;
 var Car;
 var Ground;
 var Mountain;
 var Sun;
 var Grid;
 var Label;

 var img = new Image();


 Ground  = function(){
     this.draw = function(ctx){
        ctx.fillStyle = '#dedede';
        ctx.fillRect(0,150, width,height - 150);
     };
 };

 Label  = function(){
     this.draw = function(ctx){
       ctx.fillStyle = "#cccccc";
       ctx.fillText('hello world!', 325 ,230);

     };
 };

 Sun  = function(){
    this.draw = function(ctx){

var g = ctx.createRadialGradient(420, 20 , 0, 420, 40, 20);
        g.addColorStop(0.0, 'orange');
        g.addColorStop(0.5, 'orange');
        g.addColorStop(1.0, 'red');
       ctx.fillStyle =g;
       ctx.beginPath();
       ctx.arc(420, 50, 20, 0, 2 * Math.PI);
    //    ctx.arc(420, 50, 20, 0, 2 * Math.PI / 360 * 120);
    //    ctx.arc(420, 40, 20, Math.PI  / 180 * 270, Math.PI  / 180 * 330, true);
       ctx.fill();

    };
};

 Car = function(x, y){
    this.x = x;
    this.y = y;
    var angle = 0;

this.drawBody = function(ctx){
        ctx.fillStyle = 'hsl(4, 163%, 94%)';
        ctx.fillRect(this.x,this.y, 100,35);
        ctx.fillRect(this.x,this.y + 35, 130,35);
}

this.drawWindow = function(ctx){
        ctx.shadowColor = 'transparents';
        ctx.fillStyle = 'rgba(19, 114, 73, 0.3';
        ctx.fillRect(this.x + 65, this.y + 10, 35, 25);
        ctx.fillRect(this.x + 30, this.y + 10, 25, 25);
}

this.drawTires = function(ctx){
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x +25, this.y + 70, 15, 0 , 2 * Math.PI);
        ctx.arc(this.x +105, this.y + 70, 15, 0 , 2 * Math.PI);
        ctx.shadowColor = 'rgba(0,0,0, 0.3)';
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;
        ctx.shadowBlur = 5;
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.restore();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
}

this.drawTireArc = function(ctx, offset ){
        ctx.save();
        ctx.translate( this.x + offset, this.y + 70 );
        ctx.rotate(Math.PI / 180 * angle);
        ctx.beginPath();
        ctx.arc(0,0,10,0, Math.PI / 180 * 75);
        ctx.stroke();
        ctx.restore();
}


    this.draw = function(ctx){

this.drawBody(ctx);
this.drawWindow(ctx);
this.drawTires(ctx);
this.drawTireArc(ctx, 25);
this.drawTireArc(ctx, 105);
        //this.x +=2;
        angle += 8;
        if(this.x > width){
            this.x =  -100;
        }
    };
 };

 Mountain = function(x, y){
    this.x = x;
    this.y = y;
    this.draw = function(ctx){
        var g = ctx.createLinearGradient(this.x, this.y - 50 , this.x, this.y + 30);
        g.addColorStop(0.0, 'green');
        g.addColorStop(1.0, 'lightgreen');
       ctx.fillStyle =g;
       ctx.beginPath();
       ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + 80, this.y - 50);
        ctx.lineTo(this.x + 200, this.y);
        ctx.fill();
        this.x -=0.2;
        if(this.x + 200  < 0 ){
            this.x =  width;
        }
    };
 };

 Grid = function(){
    this.draw = function(ctx){
        var step = 20;
        ctx.beginPath();
        for (let i = 0; i <= 10; i++) {
            ctx.moveTo(0, step * i);
            ctx.lineTo(10 * step, step * i);
            ctx.moveTo(step * i, 0);
            ctx.lineTo(step * i, 10 * step);
        }
        ctx.strokeStyle = 'gray';
        ctx.stroke();
        ctx.fillStyle = 'gray';
        ctx.fillRect(0,0, 40,40);

ctx.save();

ctx.translate(40,40);
ctx.scale(2, 2);
ctx.rotate(Math.PI / 180 * 30);

ctx.beginPath();
for (let i = 0; i <= 10; i++) {
    ctx.moveTo(0, step * i);
    ctx.lineTo(10 * step, step * i);
    ctx.moveTo(step * i, 0);
    ctx.lineTo(step * i, 10 * step);
}
ctx.strokeStyle = 'blue';
ctx.stroke();
ctx.fillStyle = 'blue';
ctx.fillRect(0,0, 40,40);

ctx.restore();

    };
 };


App = function(){
    var ctx;
    this.car = new Car(100,100);
    this.label = new Label();
    this.mountain = new Mountain(400, 150);
    this.ground = new Ground();
    this.grid = new Grid();
    this.sun = new Sun();
    this.setup = function() {
 var stage = document.getElementById ('canvas');
 var dpr;
        if( typeof stage.getContext === 'undefined' ) {
            return;
        }

        ctx = stage.getContext('2d');
        dpr = window.devicePixelRatio || 1;

        stage.width =  width * dpr;
        stage.height =  height * dpr;
        ctx.scale(dpr, dpr);
        stage.style.width = width + 'px';
        stage.style.height = height + 'px';
    };

    this.draw = function(){
        ctx.fillStyle = ctx.createPattern(img, 'repeat');
        ctx.fillRect(0,0, width, height);
        //ctx.drawImage(img, 0 , 0);
        this.ground.draw(ctx);
        this.label.draw(ctx);
        this.sun.draw(ctx);
        this.mountain.draw(ctx);
        this.car.draw(ctx);
        //grid.draw();
        setTimeout( function(){
            this.draw();
        }.bind(this), 10);
     };
};


img.src = './img-03.png';
img.addEventListener('load', function(){

app = new App();

app.setup();
app.draw();

});



})();
