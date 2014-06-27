var B=require('../lib/banner');

$(function () {
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
              var charray = B.banner(char); // BIG TEXT ARRAY

              // APPEND BIG TEXT TO CURRENT TEXT
              var t = output.text(),
                tarr = t.split('\n'),
                bnr = B.banner(char);
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

