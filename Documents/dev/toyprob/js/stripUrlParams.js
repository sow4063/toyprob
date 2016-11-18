// https://www.codewars.com/kata/51646de80fd67f442c000013

/*
Description:

Complete the method so that it does the following:

Removes any duplicate query string parameters from the url
Removes any query string parameters specified within the 2nd argument (optional array)
Examples:

stripUrlParams('www.codewars.com?a=1&b=2&a=2') // returns 'www.codewars.com?a=1&b=2'
stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) // returns 'www.codewars.com?a=1'
stripUrlParams('www.codewars.com', ['b']) // returns 'www.codewars.com'
*/

function stripUrlParams(url, paramsToStrip){
  var str = url.split('?');
  var params = paramsToStrip ? paramsToStrip : [];

  var options = {};
  if( str.length > 1 ) {
    str[1].split('&').forEach(function(v){
      if( !options[v[0]] && ( params.indexOf(v[0]) === -1 ) )
        options[v[0]] = v.substr(1,2);
    });
  }

  var snd = [];
  for( key in options ) {
    snd.push(key + options[key]);
  }

  return snd.length ? str[0] + '?' + snd.join('&') : str[0];
};

module.exports = stripUrlParams;

// best practice
function stripUrlParams(url, paramsToStrip){
  return url.replace(/&?([^?=]+)=.+?/g, function(m, p1, qPos) {
    return url.indexOf(p1 + '=') < qPos || (paramsToStrip||[]).indexOf(p1) > -1 ? "": m;
   });
}

// clever
