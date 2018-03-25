
/* eslint-disable node/no-missing-require */
'use strict';

// Use a Readline parser

const SerialPort = require('serialport');
const parsers = SerialPort.parsers;

// Use a `\r\n` as a line terminator
const parser = new parsers.Readline({ 
  delimiter: '\r\n'
});

const port = new SerialPort('COM3', {
  baudRate: 9600
});

port.pipe(parser);

port.on('open', () => console.log('Port open'));

parser.on('data', console.log);

