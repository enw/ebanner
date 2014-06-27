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


