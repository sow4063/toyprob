// https://www.codewars.com/kata/petes-inappropriate-speech/train/javascript

/*
Our friendly friend Pete is really a nice person, but he tends to be rather... Inappropriate.

And possibly loud, if given enough ethanol and free rein,
so we ask you to write a function that should take its not always "clean" speech
and cover as much as possible of it, in order not to offend some more sensible spirits.

For example, given an input like

What the hell am I doing here? And where is my wallet? PETE SMASH!
You are expected to turn it into something like:

W**t t*e h**l am i d***g h**e? A*d w***e is my w****t? P**e s***h!
In case you didn't figure out the rules yet: any words longer than 2 characters
need to have its "inside" (meaning every character which is not the first or the last)
changed into *; as we do not want Pete to scream too much, every uppercase letter
which is not at the beginning of the string or coming after a punctuation mark
among [".","!","?"] needs to be put to lowercase; spaces and other punctuation marks can be ignored.

Conversely, you need to be sure that the start of each sentence has a capitalized word at the beginning.
Sentences are divided by the aforementioned punctuation marks.

Finally, the function will take an additional parameter consisting of an array/list of allowed words
which are not to be replaced.

Extra cookies if you can do it all in some efficient way and/or using our dear regexes ;)

Note: Absolutely not related to a certain codewarrior I know :p
*/

function peteTalk(str, ok) {
  if (!ok)
    ok = [];

  ok = ok.map(word => word.toLowerCase());

  return str.replace(/\b\S([A-Za-z]+)\S\b/g, (mat, sub) => ok.indexOf(mat.toLowerCase()) < 0 ? mat.replace(sub, sub => Array(sub.length + 1).join('*')) : mat)
            .replace(/([A-Z])/g, (mat, sub) => mat.replace(sub, sub.toLowerCase()))
            .replace(/(?:[?!.]\s)([a-z])/g, (mat, sub) => mat.replace(sub, sub.toUpperCase()))
            .replace(/^([a-z])/, (mat,sub) => mat.replace(sub, sub.toUpperCase()));
};

console.log( peteTalk("I want to punch someone in the face"), " === ", "I w**t to p***h s*****e in t*e f**e");
console.log( peteTalk("uh!"), "===", "Uh!");
console.log( peteTalk("What the hell am I doing here? And where is my wallet? PETE SMASH!"), " === ", "W**t t*e h**l am i d***g h**e? A*d w***e is my w****t? P**e s***h!");
console.log( peteTalk("I want to punch someone in the face",["someone","face"]), " === ", "I w**t to p***h someone in t*e face");
console.log( peteTalk("I want to punch someone in the face",["drink","job","girls"]), " === ", "I w**t to p***h s*****e in t*e f**e");
console.log( peteTalk("GIRL. job FOOD cool. hot. CHICK? QUEEN: WINE: invite TO EAT TO MOVE WORK JOB FACE UNDER ALCOHOL for: to woman! work COUCH PIPPI DRINK! in; of from inviting COOL BEHIND under",["wine", "hot", "nice", "beer", "cool", "sweet", "food", "girl", "turn", "alcohol", "drink", "couch", "from", "Queen", "chair", "of", "face", "reason", "behind", "to", "move", "the", "Pippi"]), " === ", "Girl. J*b food cool. Hot. C***k? Queen: wine: i****e to e*t to move w**k j*b face u***r alcohol f*r: to w***n! W**k couch pippi drink! In; of from i******g cool behind u***r");

// best practice
function peteTalk(speech, ok){
  ok = (ok||[]).map(function(s){ return s.toLowerCase(); });
  return speech.toLowerCase()
    // cover
    .replace(/(\w)(\w+)(\w)/g, function(s,a,b,c){ return ok.indexOf(s)>=0 ? s : a+b.replace(/./g, '*')+c; })
    // capitalize
    .replace(/(^|!|\?|\.)\s*\w/g, function(s){ return s.toUpperCase(); });
}
