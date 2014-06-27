#!/usr/bin/env node
/*
  !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}
                                                                     1         1         1
 3       4         5         6         7         8         9         0         1         2
 2       0         0         0         0         0         0         0         0         0
*/
var FIRST_CODE = 55,
 LETTER_WIDTH = 7,
  SPACER=" ";

// : ; < = > ? @
var bigLetters = [
                  '777777  8888   9999                                      ???    @@@@   AAAA  BBBBB   CCCC  DDDD   EEEEEE FFFFFF  GGGG  HH  HH IIIIII     JJ KK  KK LL     MM   M NN   N  OOOO  PPPPP   QQQ   RRRRR   SSSS  TTTTTT UU  UU V    VVW     WX   XX Y   YY ZZZZZZ ',
                  '    77 88  88 99  99  ;;      ::      <<   ====   >>    ?  ??  @ @@ @ AA  AA BB  BB CC  CC DD DD  EE     FF     GG     HH  HH   II       JJ KK KK  LL     MMM MM NNN  N OO  OO PP  PP QQ  Q  RR  RR SS   S   TT   UU  UU VV  VV W     W X XX   Y YY     ZZ  ',
                  '   77    88     9999                <<              >>    ??   @  @@  AAAAAA BBBBB  CC     DD  DD EEEE   FFFF   GG  GG HHHHHH   II       JJ KKKK   LL     MM M M N NNNN OO  OO PPPPP  QQ  Q  RRRRR    SS     TT   UU  UU  V  V   W W W   XX     YY     ZZ   ',
                  '  77   88  88     99  ;;      ::      <<   ====   >>           @      AA  AA BB  BB CC  CC DD DD  EE     FF     GG   G HH  HH   II   JJ  JJ KK KK  LL     MM   M N   NN OO  OO PP     QQ  Q  RR  RR S   SS   TT   UU  UU   VV     W W   XX X    YY    ZZ    ',
                  '  77     88     99     ;                                  ??    @@@@@ AA  AA BBBBB   CCCC  DDDD   EEEEEE FF      GGGGG HH  HH IIIIII  JJJJ  KK  KK LLLLLL MM   M N    N  OOOO  PP      QQQQQ RR  RR  SSSS    TT    UUUU     V     w w  XX   X   YY   ZZZZZZ '
                  ];
var SPACE = [
             '       ',
             '       ',
             '       ',
             '       ',
             '       '
             ];
var UNKNOWN_LETTER = [
                      '       ',
                      ' x x   ',
                      '  x    ',
                      ' x x   ',
                      '       '
                      ];

function getLetterCount() {
  return bigLetters[0].length / LETTER_WIDTH;
};

function banner(s) {
  var S=s.toUpperCase(),
    ret = ['','','','',''],
    idx, code, start, end,
    letterCount = getLetterCount();

  // iterate through characters
  for (var i=0; i<S.length; i++) {
    char = S[i];
    code = S.charCodeAt(i),
    letterIdx = code-FIRST_CODE;
    start = letterIdx*LETTER_WIDTH;
    end = start + LETTER_WIDTH;

    for (var j=0; j<bigLetters.length; j++) {
      if (code == 32) {
        // handle space
        ret[j]+=SPACE[j].substring(0,LETTER_WIDTH-1)+SPACER;
      } else if (letterIdx < 0 || letterIdx >= letterCount) {
        // handle characters we don't have
        ret[j]+=UNKNOWN_LETTER[j].substring(0,LETTER_WIDTH-1)+SPACER;
        //      console.log('no char for code', code, char);
      } else {
        // handle letters we have
        ret[j]+=bigLetters[j].substring(start,end)+SPACER;
      }
    }
  };
  return ret;
};

function printBanner(s) {
  var barr = banner(s);
  for (var i in barr) {
    console.log(barr[i]);
  };
};

module.exports = {
  banner: banner,
  printBanner: printBanner
};

// get all printable chars
function printableChars () {
  var s='';
for (var i=32; i<128; i++) {
    s+= String.fromCharCode(i);
  }
  return s;
}

// printBanner('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

// printBanner('Hello, World!');

// printBanner(': ; < = > ? @');

/*
printBanner('now is the time.');
console.log(printableChars());

*/
var CLIString = process.argv.slice(2).join(" ");
printBanner(CLIString);
