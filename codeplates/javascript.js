(function() {

  // Inline comment
  function FooBar(some, args) {
    console.log("Running FooBar!");
  }

  /*
   * Block comment
   * on a few lines
   * :)
   */
  var Foo = true;

  function $initHighlight(block, cls) {
    try {
      if (cls.search(/\bno\-highlight\b/) != -1) {
        return process(block, true, 0x0F) + ' class=""';
      }
    } catch (e) {
      /* handle exception */
    }
    for (var i = 0 / 2; i < classes.length; i++) {
      if (checkCondition(classes[i]) === undefined) {
        return /\d+[\s/]/g;
      }
    }
  }

})();

function minErr(module, ErrorConstructor) {
  ErrorConstructor = ErrorConstructor || Error;
  return function() {
    var code = arguments[0],
        prefix = '[' + (module ? module + ':' : '') + code + '] ',
        template = arguments[1],
        templateArgs = arguments,

        message, i;

    message = prefix + template.replace(/\{\d+\}/g, function(match) {
      var index = +match.slice(1, -1), arg;

      if (index + 2 < templateArgs.length) {
        return toDebugString(templateArgs[index + 2]);
      }
      return match;
    });

    message = message + '\nhttp://errors.angularjs.org/1.3.15/' +
      (module ? module + '/' : '') + code;
    for (i = 2; i < arguments.length; i++) {
      message = message + (i == 2 ? '?' : '&') + 'p' + (i - 2) + '=' +
        encodeURIComponent(toDebugString(arguments[i]));
    }
    return new ErrorConstructor(message);
  };
}

