ebanner
======
> make ascii banners from the command-line

## usage
    ebanner [string]

## example
```
0 enw@hesse::~/proj/banner$ ebanner hi, wrld.
HH  HH  IIIIII                  W     W RRRRR   LL      DDDD
HH  HH    II                    W     W RR  RR  LL      DD DD
HHHHHH    II        ,,           W W W  RRRRR   LL      DD  DD
HH  HH    II        ,,            W W   RR  RR  LL      DD DD       ..
HH  HH  IIIIII       ,            w w   RR  RR  LLLLLL  DDDD        ..

0 enw@hesse::~/proj/banner$
```

## API
```
  printableChars() - returns a list of the printable ASCII characters
  banner(input) - returns banner as array of strings, one for each row
  printBanner(input[, printfxn]) - uses console.log() or custom printfxn to print banner.  watch out for wrapping!
```

## installation for nodejs

1. install - ``` npm install ebanner ```
2. require - ``` require('ebanner') ```
3. be crative

(using browserify)
1. install ebanner - ```npm install --save ebanner``` - ```--save``` adds ```ebanner``` to your package.json
2. use in code - e.g. created a ```browser.js``` file that uses ```require('ebanner')``` (see example in test)
3. browserify - e.g. ```browserify browser.js -o bundle.js```
4. include ```bundle.js``` in your HTML

## installation for command-line

1. ```git clone http://github.com/enw/ebanner```
2. ``cd ebanner && npm link```
3. run ``ebanner``` (see usage)

## testing
run ``` npm test ```
