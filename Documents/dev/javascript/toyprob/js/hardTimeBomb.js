// https://www.codewars.com/kata/hard-time-bomb/train/javascript

/*
A bomb has been set to go off! You have to find the wire and cut it in order
to stop the timer. There is a global var that holds the numeric ID to which wire to cut.
Find that and then you can Bomb.CutTheWire(wireKey);
*/

console.log(Bomb.CutTheWire.toString());

var wireCode = Object.keys(this).pop();

Bomb.CutTheWire(Number(wireCode));

// DO NOT CHALLENGE IT : BUG!!
