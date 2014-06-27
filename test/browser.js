console.log('main.js', this);
var B=require('../lib/banner');

$(function () {
    console.log('init');
    var output = $('#output');

    $(document.body).on('keydown', function(e) {
      switch (e.which) {
          // key code for left arrow
          case 37:
              console.log('left arrow key pressed!');
              break;

          // key code for right arrow
          case 39:
              console.log('right arrow key pressed!');
              break;

          // key code for return
          case 13:
              output.html('');
              break;

          default:
              var char = String.fromCharCode(e.which);
              console.log('uncaught key', e.which, char);
              var charray = B.banner(char);
              console.log(charray);
              console.log(output.text());

              var t = output.text(),
                tarr = t.split('\n'),
                bnr = B.banner(char);
              console.log(tarr);
              for (var i=0;i<bnr.length;i++) {
                if (!tarr[i]) tarr[i]='';
                tarr[i] += bnr[i];
              };
              t = tarr.join('\n');
              output.text(t);
              break;
        };
    });
});

