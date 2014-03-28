# console.loge.js [![Build Status](https://travis-ci.org/toddmotto/console.loge.png)](https://travis-ci.org/toddmotto/console.loge)

Doge-driven debugging. Such console, many logs. Using `console.loge()` brings new light to debugging. Doge will randomise his infamous face amongst some of his most prestigious thoughts to help you debug your application in no time.

[View demo](http://jsfiddle.net/Xx3DN)

Doge's console magic should work in any decent browser. It'll `return;` if `window.console` isn't supported, so you can even leave it in production ;)

![Doge example](http://i.imgur.com/kuvEhlK.png)

## Installing with Bower
Use the repository hook:

```
bower install https://github.com/toddmotto/console.loge.git
```

## Manual installation
Ensure you're using the files from the `dist` directory (contains compiled production-ready code). Ensure you place the script before the closing `</body>` tag.
  
```html
<body>
  <!-- html above -->
  <script src="dist/console.loge.js"></script>
  <script>
  console.loge('AngularJS'); // check your console!
  </script>
</body>
```

## Contributors
There was an interesting story to the creation of this script, but it wouldn't have been possible (or half as amusing) without [Ryan Joyce](https://twitter.com/ryn_j), [Zach Inglis](https://twitter.com/zachinglis), [Aalaap Ghag](https://twitter.com/aalaap) and other random Twitter contributors.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using Grunt.

## Release history

- 1.0.0
  - Initial release
