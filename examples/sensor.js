var arduino = require('../'),
    board, sensor;

board = new arduino.Board({
  debug: true
});

sensor = new arduino.Sensor({
  board: board,
  pin: 'A0'
});

sensor.on('read', function(err, value) {
  value = +value;
  // |value| is reading of the light dependent resistor
  console.log(value/4);
});

// Tested with:
// SoftPot
//  http://www.spectrasymbol.com/how-it-works-softpot
//  http://www.sparkfun.com/datasheets/Sensors/Flex/SoftPot-Datasheet.pdf
//
// sensor
//  http://www.ladyada.net/learn/sensors/cds.html
