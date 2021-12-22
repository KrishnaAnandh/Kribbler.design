$(function() {
    var stageWidth;
    var stageHeight;
    var container = document.querySelector(".dot-pattern")
    var dotPatternCanvas = document.createElement("canvas")
    var context = dotPatternCanvas.getContext('2d');
    var objectList;
    var timeout;
    
    var smallDotSize = 1.5;
    var bigDotSize = 0.5;


    container.appendChild(dotPatternCanvas)   

    var prms = {
      fps: 5, // speed
      objectDistance: 20, // distance between each dot
      objectWidth: bigDotSize, // radius/size of the dots
      objectRotationV: Math.PI * .09,
      objectRadius: 1 // spiral level; keep 0 to get a circle
    };

    // change these to change the angle of the flow - radial, diagonal, etc
    var xAngle = 25;
    var yAngle = -25;


    $(window).resize(reset);
    reset();

    function reset() {

      stageWidth = $('.dot-pattern').width();
      stageHeight = $('.dot-pattern').height();

      $('.dot-pattern canvas').attr('width',stageWidth);
      $('.dot-pattern canvas').attr('height',stageHeight);

      // Create display object
      objectList = [];

      var x = 4; // -prms.objectDistance * .5;
      var y = 4;

      while(x < stageWidth + prms.objectDistance * .5) {
        y = 4; // -prms.objectDistance * .5;

        while(y < stageHeight + prms.objectDistance * .5) {
          var xDistance = x - stageWidth * xAngle;
          var yDistance = y - stageHeight * yAngle;
          var distance = Math.sqrt(xDistance*xDistance + yDistance*yDistance);
          var circleRotation = Math.PI*.005*distance;

          objectList.push(
            new Circle(
              x,
              y,
              circleRotation // _rotationV
            )
          );

          y += prms.objectDistance;
        }

        x += prms.objectDistance;
      }

      // Reset timer
      if(timeout){
        clearTimeout(timeout);
      }
      timeout = setTimeout(onEnterFrame, 1000/prms.fps);
    }

    function Circle(_x, _y, _rotation){
      this.x = _x;
      this.y = _y;
      this.vx = 0;
      this.vy = 0;
      this.ax = 0;
      this.ay = 0;
      this.rotation = _rotation;
      this.cx = _x;
      this.cy = _y;
    }

    Circle.prototype.width = prms.objectWidth;
    Circle.prototype.rotationV = prms.objectRotationV;
    Circle.prototype.radius = prms.objectRadius;
    Circle.prototype.tick = function(){
      this.rotation += this.rotationV;
      this.x = this.radius * Math.cos(this.rotation) + this.cx;
      this.y = this.radius * Math.sin(this.rotation) + this.cy;
      this.width = (smallDotSize + Math.cos(this.rotation))*Circle.prototype.width; // change the dim/small dot size
    };

    Circle.prototype.draw = function(_context){
      //console.log(this);
      //console.log(this.x - this.width*.5, this.y - this.height*.5, this.width, this.height);
      _context.beginPath();
      _context.arc(this.x, this.y, this.width * .5, 0, Math.PI*2, false);
      _context.fill();
      _context.closePath();
    };

    function onEnterFrame(){

      var len = objectList.length;
      var object;
      // Calculate the position of the display object

      while(len > 0){
        len -= 1;
        object = objectList[len];
        object.tick();
      }

      // console.log(objectList);

      // Draw a display object
      //context.fillStyle = 'rgba(0,0,0,.2)';
      //context.fillRect(0, 0, stageWidth, stageHeight);
      context.clearRect(0, 0, stageWidth, stageHeight);
      context.fillStyle = '#000';
      len = objectList.length;
      while(len > 0){
        len -= 1;
        object = objectList[len];
        object.draw(context);
      }

      // Next frame call
      timeout = setTimeout(onEnterFrame, 1000/prms.fps);
    }

  });