var j = require("johnny-five");
var circuito = new j.board();
var bombillo, motorcito, celda;
var turno = 0;

circuito.on("ready", prender);

function prender()
{
  var configuración = {pin:"A0", freq: 50}
  celda = new j.Sensor(confuguración);

  bombillo = new j.Led(13);
  bombillo.on();

  motorcito = new j.Servo(9);
  motorcito.to(90);

  ondear();
}

function ondear()
{
    console.log("luz: " + celda.value);
    var luz = celda.value;
    if(luz>800)
    {
      if(turno == 1)
      {
        turno = 0;
        motorcito.to(170);
      }
      else
      {
        turno = 1;
        motorcito.to(190);
      }
    }
    else
    {
      motoricito.to(30);
    }
    setTimeOut(ondear, 1000);
}
