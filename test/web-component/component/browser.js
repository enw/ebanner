var B=require('../../../lib/banner');
console.log('browser.js', this);

    console.log('anonymous function');
    var output = $('#output', this);
    console.log('output',output);
function getOnKeyDown(output) { return function (e) {
  console.log('keydown', output)
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
            //            output.html('');
            //            break;

          default:
              var char = String.fromCharCode(e.which);
              var charray = B.banner(char); // BIG TEXT ARRAY

              // APPEND BIG TEXT TO CURRENT TEXT
              var t = output.innerText,
                tarr = t.split('\n'),
                bnr = B.banner(char);
              for (var i=0;i<bnr.length;i++) {
                if (!tarr[i]) tarr[i]='';
                tarr[i] += bnr[i];
              };
              t = tarr.join('\n');
              output.innerText = t;

              break;
        };
  }};


        Polymer('e-banner', {
            // Fires when the "<polymer-element>" has been fully prepared
            ready: function() {
              console.log('ready', this, output);
              //              this.$.output.text('ready');
            },

            // Fires when the element was inserted into the document
            attached: function() {
              console.log('attached', this.$.output)
                window.onkeydown = getOnKeyDown(this.$.output);
            },

            // Fires when the element was removed from the document
            detached: function() {},

            // Fires when an attribute was added, removed, or updated
            attributeChanged: function(attr, oldVal, newVal) {}
        });
