(function (console) {

  'use strict';

  if (!console) return;

  var gifs = [
    'wink', 'shake-space', 'peepers', 'prizza',
    'hat', 'gradient', 'fat', 'rainbow',
    'sunglasses', 'derp', 'shake'
  ];

  var wow = ['', 'wow! ', 'amaze! ', 'dazzle! '];

  var words = ['so', 'such', 'many', 'much', 'very'];

  var randomizr = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  var type = function (obj) {
    return Object.prototype.toString.call(obj).match(/\[object(.*)\]/)[1].replace(/\s/g, '');
  };

  if (!console.loge) {
    console.loge = function (args) {
      var random = '%c ' + randomizr(wow) + randomizr(words) + ' ' + type(args) + ': ';
      var css = 'background: url(http://d1e3ezyatlol8u.cloudfront.net/img/212/doge-' +
                randomizr(gifs) + '-212.gif) no-repeat 0 0; background-size: 80px 80px;' +
                'font-family: \'Comic Sans MS\'; text-shadow: 0 1px 1px #000; font-size: 14px;' +
                'padding: 25px; line-height: 70px; color: #fff; font-weight: 100;';
      console.log.apply(console, type(args) === 'String' ? [random += args, css] : [random, css, args]);
    };
  }

})(this.console);
