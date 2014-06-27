var B=require('../lib/banner'),
 printableChars= B.printableChars,
 printBanner= B.printBanner;

// test printableChars
var chars = printableChars();
console.log('printableChars', chars);

for (var i=0;i<chars.length;i++) {
  printBanner(chars[i]);
}

printBanner(chars);

printBanner('hello', function(stuff) {console.log('CUSTOM PRINTER',stuff)});
