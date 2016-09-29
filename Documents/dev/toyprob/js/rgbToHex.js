// https://www.codewars.com/kata/rgb-to-hex-conversion/train/javascript

/*
The rgb() method is incomplete.
Complete the method so that passing in RGB decimal values will result in
a hexadecimal representation being returned.
The valid decimal values for RGB are 0 - 255.
Any (r,g,b) argument values that fall out of that range should be rounded
to the closest valid value.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/

function rgb(r, g, b){
  r = r < 0 ? 0: r;
  g = g < 0 ? 0: g;
  b = b < 0 ? 0: b;

  r = r > 255 ? 255: r;
  g = g > 255 ? 255: g;
  b = b > 255 ? 255: b;
  var hexStr = ('00' + r.toString(16)).slice(-2) + ('00' + g.toString(16)).slice(-2) + ('00' + b.toString(16)).slice(-2);
  console.log(hexStr);
  return hexStr.toUpperCase();
};

console.log(rgb(255, 255, 255), 'FFFFFF');
console.log(rgb(255, 255, 300), 'FFFFFF');
console.log(rgb(0,0,0), '000000');
console.log(rgb(148, 0, 211), '9400D3');

// best practice
function rgb(r, g, b){
  return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
  if(d < 0 ) {return "00";}
  if(d > 255 ) {return "FF";}
  return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase();
}
