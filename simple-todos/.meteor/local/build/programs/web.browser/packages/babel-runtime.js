//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var meteorInstall = Package.modules.meteorInstall;
var Buffer = Package.modules.Buffer;
var process = Package.modules.process;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var meteorBabelHelpers;

var require = meteorInstall({"node_modules":{"meteor":{"babel-runtime":{"babel-runtime.js":["meteor-babel-helpers","regenerator-runtime",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/babel-runtime/babel-runtime.js                                                                 //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
var hasOwn = Object.prototype.hasOwnProperty;                                                              // 1
var S = typeof Symbol === "function" ? Symbol : {};                                                        // 2
var iteratorSymbol = S.iterator || "@@iterator";                                                           // 3
                                                                                                           // 4
var hasDefineProperty = false;                                                                             // 5
try {                                                                                                      // 6
  // IE 8 has a broken Object.defineProperty, so feature-test by                                           // 7
  // trying to call it.                                                                                    // 8
  Object.defineProperty({}, 'x', {});                                                                      // 9
  hasDefineProperty = true;                                                                                // 10
} catch (e) {}                                                                                             // 11
                                                                                                           // 12
function defineProperties(target, props) {                                                                 // 13
  for (var i = 0; i < props.length; i++) {                                                                 // 14
    var descriptor = props[i];                                                                             // 15
    descriptor.enumerable = descriptor.enumerable || false;                                                // 16
    descriptor.configurable = true;                                                                        // 17
    if ("value" in descriptor) descriptor.writable = true;                                                 // 18
    Object.defineProperty(target, descriptor.key, descriptor);                                             // 19
  }                                                                                                        // 20
}                                                                                                          // 21
                                                                                                           // 22
exports.meteorBabelHelpers = require("meteor-babel-helpers");                                              // 23
                                                                                                           // 24
// Returns true if a given absolute identifier will be provided at runtime                                 // 25
// by the babel-runtime package.                                                                           // 26
exports.checkHelper = function checkHelper(id) {                                                           // 27
  var parts = id.split("/");                                                                               // 28
  var index = 0;                                                                                           // 29
                                                                                                           // 30
  // Skip over leading / and node_modules.                                                                 // 31
  if (parts[index] === "") ++index;                                                                        // 32
  if (parts[index] === "node_modules") ++index;                                                            // 33
                                                                                                           // 34
  if (parts[index] !== "babel-runtime") {                                                                  // 35
    return false;                                                                                          // 36
  }                                                                                                        // 37
                                                                                                           // 38
  // Skip over babel-runtime.                                                                              // 39
  ++index;                                                                                                 // 40
                                                                                                           // 41
  if (parts.length - index === 2) {                                                                        // 42
    return parts[index] === "helpers" &&                                                                   // 43
      hasOwn.call(BabelRuntime, stripDotJS(parts[index + 1]));                                             // 44
  }                                                                                                        // 45
                                                                                                           // 46
  if (parts.length - index === 1) {                                                                        // 47
    return stripDotJS(parts[index]) === "regenerator";                                                     // 48
  }                                                                                                        // 49
                                                                                                           // 50
  return false;                                                                                            // 51
};                                                                                                         // 52
                                                                                                           // 53
function stripDotJS(name) {                                                                                // 54
  return name.replace(/\.js$/, "");                                                                        // 55
}                                                                                                          // 56
                                                                                                           // 57
var BabelRuntime = {                                                                                       // 58
  // es6.templateLiterals                                                                                  // 59
  // Constructs the object passed to the tag function in a tagged                                          // 60
  // template literal.                                                                                     // 61
  taggedTemplateLiteralLoose: function (strings, raw) {                                                    // 62
    // Babel's own version of this calls Object.freeze on `strings` and                                    // 63
    // `strings.raw`, but it doesn't seem worth the compatibility and                                      // 64
    // performance concerns.  If you're writing code against this helper,                                  // 65
    // don't add properties to these objects.                                                              // 66
    strings.raw = raw;                                                                                     // 67
    return strings;                                                                                        // 68
  },                                                                                                       // 69
                                                                                                           // 70
  // es6.classes                                                                                           // 71
  // Checks that a class constructor is being called with `new`, and throws                                // 72
  // an error if it is not.                                                                                // 73
  classCallCheck: function (instance, Constructor) {                                                       // 74
    if (!(instance instanceof Constructor)) {                                                              // 75
      throw new TypeError("Cannot call a class as a function");                                            // 76
    }                                                                                                      // 77
  },                                                                                                       // 78
                                                                                                           // 79
  // es6.classes                                                                                           // 80
  inherits: function (subClass, superClass) {                                                              // 81
    if (typeof superClass !== "function" && superClass !== null) {                                         // 82
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }                                                                                                      // 84
                                                                                                           // 85
    if (superClass) {                                                                                      // 86
      if (Object.create) {                                                                                 // 87
        // All but IE 8                                                                                    // 88
        subClass.prototype = Object.create(superClass && superClass.prototype, {                           // 89
          constructor: {                                                                                   // 90
            value: subClass,                                                                               // 91
            enumerable: false,                                                                             // 92
            writable: true,                                                                                // 93
            configurable: true                                                                             // 94
          }                                                                                                // 95
        });                                                                                                // 96
      } else {                                                                                             // 97
        // IE 8 path.  Slightly worse for modern browsers, because `constructor`                           // 98
        // is enumerable and shows up in the inspector unnecessarily.                                      // 99
        // It's not an "own" property of any instance though.                                              // 100
        //                                                                                                 // 101
        // For correctness when writing code,                                                              // 102
        // don't enumerate all the own-and-inherited properties of an instance                             // 103
        // of a class and expect not to find `constructor` (but who does that?).                           // 104
        var F = function () {                                                                              // 105
          this.constructor = subClass;                                                                     // 106
        };                                                                                                 // 107
        F.prototype = superClass && superClass.prototype;                                                  // 108
        subClass.prototype = new F();                                                                      // 109
      }                                                                                                    // 110
                                                                                                           // 111
      if (Object.setPrototypeOf) {                                                                         // 112
        Object.setPrototypeOf(subClass, superClass);                                                       // 113
      } else {                                                                                             // 114
        subClass.__proto__ = superClass;                                                                   // 115
      }                                                                                                    // 116
    }                                                                                                      // 117
  },                                                                                                       // 118
                                                                                                           // 119
  defineProperty: function (obj, key, value) {                                                             // 120
    if (hasDefineProperty && (key in obj)) {                                                               // 121
      Object.defineProperty(obj, key, {                                                                    // 122
        value: value,                                                                                      // 123
        enumerable: true,                                                                                  // 124
        configurable: true,                                                                                // 125
        writable: true                                                                                     // 126
      });                                                                                                  // 127
    } else {                                                                                               // 128
      obj[key] = value;                                                                                    // 129
    }                                                                                                      // 130
                                                                                                           // 131
    return obj;                                                                                            // 132
  },                                                                                                       // 133
                                                                                                           // 134
  createClass: function (Constructor, protoProps, staticProps) {                                           // 135
    if (! hasDefineProperty) {                                                                             // 136
      // e.g. `class Foo { get bar() {} }`.  If you try to use getters and                                 // 137
      // setters in IE 8, you will get a big nasty error, with or without                                  // 138
      // Babel.  I don't know of any other syntax features besides getters                                 // 139
      // and setters that will trigger this error.                                                         // 140
      throw new Error(                                                                                     // 141
        "Your browser does not support this type of class property.  " +                                   // 142
          "For example, Internet Explorer 8 does not support getters and " +                               // 143
          "setters.");                                                                                     // 144
    }                                                                                                      // 145
                                                                                                           // 146
    if (protoProps) defineProperties(Constructor.prototype, protoProps);                                   // 147
    if (staticProps) defineProperties(Constructor, staticProps);                                           // 148
    return Constructor;                                                                                    // 149
  },                                                                                                       // 150
                                                                                                           // 151
  "typeof": function (obj) {                                                                               // 152
    return obj && obj.constructor === Symbol ? "symbol" : typeof obj;                                      // 153
  },                                                                                                       // 154
                                                                                                           // 155
  possibleConstructorReturn: function (self, call) {                                                       // 156
    if (! self) {                                                                                          // 157
      throw new ReferenceError(                                                                            // 158
        "this hasn't been initialised - super() hasn't been called"                                        // 159
      );                                                                                                   // 160
    }                                                                                                      // 161
                                                                                                           // 162
    var callType = typeof call;                                                                            // 163
    if (call &&                                                                                            // 164
        callType === "function" ||                                                                         // 165
        callType === "object") {                                                                           // 166
      return call;                                                                                         // 167
    }                                                                                                      // 168
                                                                                                           // 169
    return self;                                                                                           // 170
  },                                                                                                       // 171
                                                                                                           // 172
  interopRequireDefault: function (obj) {                                                                  // 173
    return obj && obj.__esModule ? obj : { 'default': obj };                                               // 174
  },                                                                                                       // 175
                                                                                                           // 176
  interopRequireWildcard: function (obj) {                                                                 // 177
    if (obj && obj.__esModule) {                                                                           // 178
      return obj;                                                                                          // 179
    }                                                                                                      // 180
                                                                                                           // 181
    var newObj = {};                                                                                       // 182
                                                                                                           // 183
    if (obj != null) {                                                                                     // 184
      for (var key in obj) {                                                                               // 185
        if (hasOwn.call(obj, key)) {                                                                       // 186
          newObj[key] = obj[key];                                                                          // 187
        }                                                                                                  // 188
      }                                                                                                    // 189
    }                                                                                                      // 190
                                                                                                           // 191
    newObj["default"] = obj;                                                                               // 192
    return newObj;                                                                                         // 193
  },                                                                                                       // 194
                                                                                                           // 195
  interopExportWildcard: function (obj, defaults) {                                                        // 196
    var newObj = defaults({}, obj);                                                                        // 197
    delete newObj["default"];                                                                              // 198
    return newObj;                                                                                         // 199
  },                                                                                                       // 200
                                                                                                           // 201
  defaults: function (obj, defaults) {                                                                     // 202
    Object.getOwnPropertyNames(defaults).forEach(function (key) {                                          // 203
      var desc = Object.getOwnPropertyDescriptor(defaults, key);                                           // 204
      if (desc && desc.configurable && typeof obj[key] === "undefined") {                                  // 205
        Object.defineProperty(obj, key, desc);                                                             // 206
      }                                                                                                    // 207
    });                                                                                                    // 208
                                                                                                           // 209
    return obj;                                                                                            // 210
  },                                                                                                       // 211
                                                                                                           // 212
  // es7.objectRestSpread and react (JSX)                                                                  // 213
  "extends": Object.assign || (function (target) {                                                         // 214
    for (var i = 1; i < arguments.length; i++) {                                                           // 215
      var source = arguments[i];                                                                           // 216
      for (var key in source) {                                                                            // 217
        if (hasOwn.call(source, key)) {                                                                    // 218
          target[key] = source[key];                                                                       // 219
        }                                                                                                  // 220
      }                                                                                                    // 221
    }                                                                                                      // 222
    return target;                                                                                         // 223
  }),                                                                                                      // 224
                                                                                                           // 225
  // es6.destructuring                                                                                     // 226
  objectWithoutProperties: function (obj, keys) {                                                          // 227
    var target = {};                                                                                       // 228
    outer: for (var i in obj) {                                                                            // 229
      if (! hasOwn.call(obj, i)) continue;                                                                 // 230
      for (var j = 0; j < keys.length; j++) {                                                              // 231
        if (keys[j] === i) continue outer;                                                                 // 232
      }                                                                                                    // 233
      target[i] = obj[i];                                                                                  // 234
    }                                                                                                      // 235
    return target;                                                                                         // 236
  },                                                                                                       // 237
                                                                                                           // 238
  // es6.destructuring                                                                                     // 239
  objectDestructuringEmpty: function (obj) {                                                               // 240
    if (obj == null) throw new TypeError("Cannot destructure undefined");                                  // 241
  },                                                                                                       // 242
                                                                                                           // 243
  // es6.spread                                                                                            // 244
  bind: Function.prototype.bind || (function () {                                                          // 245
    var isCallable = function (value) { return typeof value === 'function'; };                             // 246
    var $Object = Object;                                                                                  // 247
    var to_string = Object.prototype.toString;                                                             // 248
    var array_slice = Array.prototype.slice;                                                               // 249
    var array_concat = Array.prototype.concat;                                                             // 250
    var array_push = Array.prototype.push;                                                                 // 251
    var max = Math.max;                                                                                    // 252
    var Empty = function Empty() {};                                                                       // 253
                                                                                                           // 254
    // Copied from es5-shim.js (3ac7942).  See original for more comments.                                 // 255
    return function bind(that) {                                                                           // 256
      var target = this;                                                                                   // 257
      if (!isCallable(target)) {                                                                           // 258
        throw new TypeError('Function.prototype.bind called on incompatible ' + target);                   // 259
      }                                                                                                    // 260
                                                                                                           // 261
      var args = array_slice.call(arguments, 1);                                                           // 262
                                                                                                           // 263
      var bound;                                                                                           // 264
      var binder = function () {                                                                           // 265
                                                                                                           // 266
        if (this instanceof bound) {                                                                       // 267
          var result = target.apply(                                                                       // 268
            this,                                                                                          // 269
            array_concat.call(args, array_slice.call(arguments))                                           // 270
          );                                                                                               // 271
          if ($Object(result) === result) {                                                                // 272
            return result;                                                                                 // 273
          }                                                                                                // 274
          return this;                                                                                     // 275
        } else {                                                                                           // 276
          return target.apply(                                                                             // 277
            that,                                                                                          // 278
            array_concat.call(args, array_slice.call(arguments))                                           // 279
          );                                                                                               // 280
        }                                                                                                  // 281
      };                                                                                                   // 282
                                                                                                           // 283
      var boundLength = max(0, target.length - args.length);                                               // 284
                                                                                                           // 285
      var boundArgs = [];                                                                                  // 286
      for (var i = 0; i < boundLength; i++) {                                                              // 287
        array_push.call(boundArgs, '$' + i);                                                               // 288
      }                                                                                                    // 289
                                                                                                           // 290
      // Create a Function from source code so that it has the right `.length`.                            // 291
      // Probably not important for Babel.  This code violates CSPs that ban                               // 292
      // `eval`, but the browsers that need this polyfill don't have CSP!                                  // 293
      bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);
                                                                                                           // 295
      if (target.prototype) {                                                                              // 296
        Empty.prototype = target.prototype;                                                                // 297
        bound.prototype = new Empty();                                                                     // 298
        Empty.prototype = null;                                                                            // 299
      }                                                                                                    // 300
                                                                                                           // 301
      return bound;                                                                                        // 302
    };                                                                                                     // 303
                                                                                                           // 304
  })(),                                                                                                    // 305
                                                                                                           // 306
  toConsumableArray: function (arr) {                                                                      // 307
    if (Array.isArray(arr)) {                                                                              // 308
      for (var i = arr.length - 1, arr2 = Array(i + 1); i >= 0; --i) {                                     // 309
        arr2[i] = arr[i];                                                                                  // 310
      }                                                                                                    // 311
                                                                                                           // 312
      return arr2;                                                                                         // 313
    }                                                                                                      // 314
                                                                                                           // 315
    return Array.from(arr);                                                                                // 316
  },                                                                                                       // 317
                                                                                                           // 318
  toArray: function (arr) {                                                                                // 319
    return Array.isArray(arr) ? arr : Array.from(arr);                                                     // 320
  },                                                                                                       // 321
                                                                                                           // 322
  slicedToArray: function (iterable, limit) {                                                              // 323
    if (Array.isArray(iterable)) {                                                                         // 324
      return iterable;                                                                                     // 325
    }                                                                                                      // 326
                                                                                                           // 327
    if (iterable) {                                                                                        // 328
      var it = iterable[iteratorSymbol]();                                                                 // 329
      var result = [];                                                                                     // 330
      var info;                                                                                            // 331
                                                                                                           // 332
      if (typeof limit !== "number") {                                                                     // 333
        limit = Infinity;                                                                                  // 334
      }                                                                                                    // 335
                                                                                                           // 336
      while (result.length < limit &&                                                                      // 337
             ! (info = it.next()).done) {                                                                  // 338
        result.push(info.value);                                                                           // 339
      }                                                                                                    // 340
                                                                                                           // 341
      return result;                                                                                       // 342
    }                                                                                                      // 343
                                                                                                           // 344
    throw new TypeError(                                                                                   // 345
      "Invalid attempt to destructure non-iterable instance"                                               // 346
    );                                                                                                     // 347
  },                                                                                                       // 348
                                                                                                           // 349
  slice: Array.prototype.slice                                                                             // 350
};                                                                                                         // 351
                                                                                                           // 352
// Use meteorInstall to install all of the above helper functions within                                   // 353
// node_modules/babel-runtime/helpers.                                                                     // 354
Object.keys(BabelRuntime).forEach(function (helperName) {                                                  // 355
  var helpers = {};                                                                                        // 356
                                                                                                           // 357
  helpers[helperName + ".js"] = function (require, exports, module) {                                      // 358
    module.exports = BabelRuntime[helperName];                                                             // 359
  };                                                                                                       // 360
                                                                                                           // 361
  meteorInstall({                                                                                          // 362
    node_modules: {                                                                                        // 363
      "babel-runtime": {                                                                                   // 364
        helpers: helpers                                                                                   // 365
      }                                                                                                    // 366
    }                                                                                                      // 367
  });                                                                                                      // 368
});                                                                                                        // 369
                                                                                                           // 370
// Use meteorInstall to install the regenerator runtime at                                                 // 371
// node_modules/babel-runtime/regenerator.                                                                 // 372
meteorInstall({                                                                                            // 373
  node_modules: {                                                                                          // 374
    "babel-runtime": {                                                                                     // 375
      "regenerator.js": function (r, e, module) {                                                          // 376
        // Note that we use the require function provided to the                                           // 377
        // babel-runtime.js file, not the one named 'r' above.                                             // 378
        var runtime = require("regenerator-runtime");                                                      // 379
                                                                                                           // 380
        // If Promise.asyncApply is defined, use it to wrap calls to                                       // 381
        // runtime.async so that the entire async function will run in its                                 // 382
        // own Fiber, not just the code that comes after the first await.                                  // 383
        if (typeof Promise === "function" &&                                                               // 384
            typeof Promise.asyncApply === "function") {                                                    // 385
          var realAsync = runtime.async;                                                                   // 386
          runtime.async = function () {                                                                    // 387
            return Promise.asyncApply(realAsync, runtime, arguments);                                      // 388
          };                                                                                               // 389
        }                                                                                                  // 390
                                                                                                           // 391
        module.exports = runtime;                                                                          // 392
      }                                                                                                    // 393
    }                                                                                                      // 394
  }                                                                                                        // 395
});                                                                                                        // 396
                                                                                                           // 397
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"node_modules":{"meteor-babel-helpers":{"package.json":function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// ../npm/node_modules/meteor-babel-helpers/package.json                                                   //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
exports.name = "meteor-babel-helpers";                                                                     // 1
exports.version = "0.0.3";                                                                                 // 2
exports.main = "index.js";                                                                                 // 3
                                                                                                           // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// node_modules/meteor/babel-runtime/node_modules/meteor-babel-helpers/index.js                            //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
function canDefineNonEnumerableProperties() {                                                              // 1
  var testObj = {};                                                                                        // 2
  var testPropName = "t";                                                                                  // 3
                                                                                                           // 4
  try {                                                                                                    // 5
    Object.defineProperty(testObj, testPropName, {                                                         // 6
      enumerable: false,                                                                                   // 7
      value: testObj                                                                                       // 8
    });                                                                                                    // 9
                                                                                                           // 10
    for (var k in testObj) {                                                                               // 11
      if (k === testPropName) {                                                                            // 12
        return false;                                                                                      // 13
      }                                                                                                    // 14
    }                                                                                                      // 15
  } catch (e) {                                                                                            // 16
    return false;                                                                                          // 17
  }                                                                                                        // 18
                                                                                                           // 19
  return testObj[testPropName] === testObj;                                                                // 20
}                                                                                                          // 21
                                                                                                           // 22
function sanitizeEasy(value) {                                                                             // 23
  return value;                                                                                            // 24
}                                                                                                          // 25
                                                                                                           // 26
function sanitizeHard(obj) {                                                                               // 27
  if (Array.isArray(obj)) {                                                                                // 28
    var newObj = {};                                                                                       // 29
    var keys = Object.keys(obj);                                                                           // 30
    var keyCount = keys.length;                                                                            // 31
    for (var i = 0; i < keyCount; ++i) {                                                                   // 32
      var key = keys[i];                                                                                   // 33
      newObj[key] = obj[key];                                                                              // 34
    }                                                                                                      // 35
    return newObj;                                                                                         // 36
  }                                                                                                        // 37
                                                                                                           // 38
  return obj;                                                                                              // 39
}                                                                                                          // 40
                                                                                                           // 41
meteorBabelHelpers = module.exports = {                                                                    // 42
  // Meteor-specific runtime helper for wrapping the object of for-in                                      // 43
  // loops, so that inherited Array methods defined by es5-shim can be                                     // 44
  // ignored in browsers where they cannot be defined as non-enumerable.                                   // 45
  sanitizeForInObject: canDefineNonEnumerableProperties()                                                  // 46
    ? sanitizeEasy                                                                                         // 47
    : sanitizeHard,                                                                                        // 48
                                                                                                           // 49
  // Exposed so that we can test sanitizeForInObject in environments that                                  // 50
  // support defining non-enumerable properties.                                                           // 51
  _sanitizeForInObjectHard: sanitizeHard                                                                   // 52
};                                                                                                         // 53
                                                                                                           // 54
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"regenerator-runtime":{"package.json":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// ../npm/node_modules/regenerator-runtime/package.json                                                    //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
exports.name = "regenerator-runtime";                                                                      // 1
exports.version = "0.9.5";                                                                                 // 2
exports.main = "runtime-module.js";                                                                        // 3
                                                                                                           // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"runtime-module.js":["./runtime",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// node_modules/meteor/babel-runtime/node_modules/regenerator-runtime/runtime-module.js                    //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
// This method of obtaining a reference to the global object needs to be                                   // 1
// kept identical to the way it is obtained in runtime.js                                                  // 2
var g =                                                                                                    // 3
  typeof global === "object" ? global :                                                                    // 4
  typeof window === "object" ? window :                                                                    // 5
  typeof self === "object" ? self : this;                                                                  // 6
                                                                                                           // 7
// Use `getOwnPropertyNames` because not all browsers support calling                                      // 8
// `hasOwnProperty` on the global `self` object in a worker. See #183.                                     // 9
var hadRuntime = g.regeneratorRuntime &&                                                                   // 10
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;                                        // 11
                                                                                                           // 12
// Save the old regeneratorRuntime in case it needs to be restored later.                                  // 13
var oldRuntime = hadRuntime && g.regeneratorRuntime;                                                       // 14
                                                                                                           // 15
// Force reevalutation of runtime.js.                                                                      // 16
g.regeneratorRuntime = undefined;                                                                          // 17
                                                                                                           // 18
module.exports = require("./runtime");                                                                     // 19
                                                                                                           // 20
if (hadRuntime) {                                                                                          // 21
  // Restore the original runtime.                                                                         // 22
  g.regeneratorRuntime = oldRuntime;                                                                       // 23
} else {                                                                                                   // 24
  // Remove the global property added by runtime.js.                                                       // 25
  try {                                                                                                    // 26
    delete g.regeneratorRuntime;                                                                           // 27
  } catch(e) {                                                                                             // 28
    g.regeneratorRuntime = undefined;                                                                      // 29
  }                                                                                                        // 30
}                                                                                                          // 31
                                                                                                           // 32
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"runtime.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// node_modules/meteor/babel-runtime/node_modules/regenerator-runtime/runtime.js                           //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
/**                                                                                                        // 1
 * Copyright (c) 2014, Facebook, Inc.                                                                      // 2
 * All rights reserved.                                                                                    // 3
 *                                                                                                         // 4
 * This source code is licensed under the BSD-style license found in the                                   // 5
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An                                     // 6
 * additional grant of patent rights can be found in the PATENTS file in                                   // 7
 * the same directory.                                                                                     // 8
 */                                                                                                        // 9
                                                                                                           // 10
!(function(global) {                                                                                       // 11
  "use strict";                                                                                            // 12
                                                                                                           // 13
  var hasOwn = Object.prototype.hasOwnProperty;                                                            // 14
  var undefined; // More compressible than void 0.                                                         // 15
  var $Symbol = typeof Symbol === "function" ? Symbol : {};                                                // 16
  var iteratorSymbol = $Symbol.iterator || "@@iterator";                                                   // 17
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";                                          // 18
                                                                                                           // 19
  var inModule = typeof module === "object";                                                               // 20
  var runtime = global.regeneratorRuntime;                                                                 // 21
  if (runtime) {                                                                                           // 22
    if (inModule) {                                                                                        // 23
      // If regeneratorRuntime is defined globally and we're in a module,                                  // 24
      // make the exports object identical to regeneratorRuntime.                                          // 25
      module.exports = runtime;                                                                            // 26
    }                                                                                                      // 27
    // Don't bother evaluating the rest of this file if the runtime was                                    // 28
    // already defined globally.                                                                           // 29
    return;                                                                                                // 30
  }                                                                                                        // 31
                                                                                                           // 32
  // Define the runtime globally (as expected by generated code) as either                                 // 33
  // module.exports (if we're in a module) or a new, empty object.                                         // 34
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};                                    // 35
                                                                                                           // 36
  function wrap(innerFn, outerFn, self, tryLocsList) {                                                     // 37
    // If outerFn provided, then outerFn.prototype instanceof Generator.                                   // 38
    var generator = Object.create((outerFn || Generator).prototype);                                       // 39
    var context = new Context(tryLocsList || []);                                                          // 40
                                                                                                           // 41
    // The ._invoke method unifies the implementations of the .next,                                       // 42
    // .throw, and .return methods.                                                                        // 43
    generator._invoke = makeInvokeMethod(innerFn, self, context);                                          // 44
                                                                                                           // 45
    return generator;                                                                                      // 46
  }                                                                                                        // 47
  runtime.wrap = wrap;                                                                                     // 48
                                                                                                           // 49
  // Try/catch helper to minimize deoptimizations. Returns a completion                                    // 50
  // record like context.tryEntries[i].completion. This interface could                                    // 51
  // have been (and was previously) designed to take a closure to be                                       // 52
  // invoked without arguments, but in all the cases we care about we                                      // 53
  // already have an existing method we want to call, so there's no need                                   // 54
  // to create a new function object. We can even get away with assuming                                   // 55
  // the method takes exactly one argument, since that happens to be true                                  // 56
  // in every case, so we don't have to touch the arguments object. The                                    // 57
  // only additional allocation required is the completion record, which                                   // 58
  // has a stable shape and so hopefully should be cheap to allocate.                                      // 59
  function tryCatch(fn, obj, arg) {                                                                        // 60
    try {                                                                                                  // 61
      return { type: "normal", arg: fn.call(obj, arg) };                                                   // 62
    } catch (err) {                                                                                        // 63
      return { type: "throw", arg: err };                                                                  // 64
    }                                                                                                      // 65
  }                                                                                                        // 66
                                                                                                           // 67
  var GenStateSuspendedStart = "suspendedStart";                                                           // 68
  var GenStateSuspendedYield = "suspendedYield";                                                           // 69
  var GenStateExecuting = "executing";                                                                     // 70
  var GenStateCompleted = "completed";                                                                     // 71
                                                                                                           // 72
  // Returning this object from the innerFn has the same effect as                                         // 73
  // breaking out of the dispatch switch statement.                                                        // 74
  var ContinueSentinel = {};                                                                               // 75
                                                                                                           // 76
  // Dummy constructor functions that we use as the .constructor and                                       // 77
  // .constructor.prototype properties for functions that return Generator                                 // 78
  // objects. For full spec compliance, you may wish to configure your                                     // 79
  // minifier not to mangle the names of these two functions.                                              // 80
  function Generator() {}                                                                                  // 81
  function GeneratorFunction() {}                                                                          // 82
  function GeneratorFunctionPrototype() {}                                                                 // 83
                                                                                                           // 84
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;                                     // 85
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;                               // 86
  GeneratorFunctionPrototype.constructor = GeneratorFunction;                                              // 87
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";     // 88
                                                                                                           // 89
  // Helper for defining the .next, .throw, and .return methods of the                                     // 90
  // Iterator interface in terms of a single ._invoke method.                                              // 91
  function defineIteratorMethods(prototype) {                                                              // 92
    ["next", "throw", "return"].forEach(function(method) {                                                 // 93
      prototype[method] = function(arg) {                                                                  // 94
        return this._invoke(method, arg);                                                                  // 95
      };                                                                                                   // 96
    });                                                                                                    // 97
  }                                                                                                        // 98
                                                                                                           // 99
  runtime.isGeneratorFunction = function(genFun) {                                                         // 100
    var ctor = typeof genFun === "function" && genFun.constructor;                                         // 101
    return ctor                                                                                            // 102
      ? ctor === GeneratorFunction ||                                                                      // 103
        // For the native GeneratorFunction constructor, the best we can                                   // 104
        // do is to check its .name property.                                                              // 105
        (ctor.displayName || ctor.name) === "GeneratorFunction"                                            // 106
      : false;                                                                                             // 107
  };                                                                                                       // 108
                                                                                                           // 109
  runtime.mark = function(genFun) {                                                                        // 110
    if (Object.setPrototypeOf) {                                                                           // 111
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);                                           // 112
    } else {                                                                                               // 113
      genFun.__proto__ = GeneratorFunctionPrototype;                                                       // 114
      if (!(toStringTagSymbol in genFun)) {                                                                // 115
        genFun[toStringTagSymbol] = "GeneratorFunction";                                                   // 116
      }                                                                                                    // 117
    }                                                                                                      // 118
    genFun.prototype = Object.create(Gp);                                                                  // 119
    return genFun;                                                                                         // 120
  };                                                                                                       // 121
                                                                                                           // 122
  // Within the body of any async function, `await x` is transformed to                                    // 123
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test                                     // 124
  // `value instanceof AwaitArgument` to determine if the yielded value is                                 // 125
  // meant to be awaited. Some may consider the name of this method too                                    // 126
  // cutesy, but they are curmudgeons.                                                                     // 127
  runtime.awrap = function(arg) {                                                                          // 128
    return new AwaitArgument(arg);                                                                         // 129
  };                                                                                                       // 130
                                                                                                           // 131
  function AwaitArgument(arg) {                                                                            // 132
    this.arg = arg;                                                                                        // 133
  }                                                                                                        // 134
                                                                                                           // 135
  function AsyncIterator(generator) {                                                                      // 136
    function invoke(method, arg, resolve, reject) {                                                        // 137
      var record = tryCatch(generator[method], generator, arg);                                            // 138
      if (record.type === "throw") {                                                                       // 139
        reject(record.arg);                                                                                // 140
      } else {                                                                                             // 141
        var result = record.arg;                                                                           // 142
        var value = result.value;                                                                          // 143
        if (value instanceof AwaitArgument) {                                                              // 144
          return Promise.resolve(value.arg).then(function(value) {                                         // 145
            invoke("next", value, resolve, reject);                                                        // 146
          }, function(err) {                                                                               // 147
            invoke("throw", err, resolve, reject);                                                         // 148
          });                                                                                              // 149
        }                                                                                                  // 150
                                                                                                           // 151
        return Promise.resolve(value).then(function(unwrapped) {                                           // 152
          // When a yielded Promise is resolved, its final value becomes                                   // 153
          // the .value of the Promise<{value,done}> result for the                                        // 154
          // current iteration. If the Promise is rejected, however, the                                   // 155
          // result for this iteration will be rejected with the same                                      // 156
          // reason. Note that rejections of yielded Promises are not                                      // 157
          // thrown back into the generator function, as is the case                                       // 158
          // when an awaited Promise is rejected. This difference in                                       // 159
          // behavior between yield and await is important, because it                                     // 160
          // allows the consumer to decide what to do with the yielded                                     // 161
          // rejection (swallow it and continue, manually .throw it back                                   // 162
          // into the generator, abandon iteration, whatever). With                                        // 163
          // await, by contrast, there is no opportunity to examine the                                    // 164
          // rejection reason outside the generator function, so the                                       // 165
          // only option is to throw it from the await expression, and                                     // 166
          // let the generator function handle the exception.                                              // 167
          result.value = unwrapped;                                                                        // 168
          resolve(result);                                                                                 // 169
        }, reject);                                                                                        // 170
      }                                                                                                    // 171
    }                                                                                                      // 172
                                                                                                           // 173
    if (typeof process === "object" && process.domain) {                                                   // 174
      invoke = process.domain.bind(invoke);                                                                // 175
    }                                                                                                      // 176
                                                                                                           // 177
    var previousPromise;                                                                                   // 178
                                                                                                           // 179
    function enqueue(method, arg) {                                                                        // 180
      function callInvokeWithMethodAndArg() {                                                              // 181
        return new Promise(function(resolve, reject) {                                                     // 182
          invoke(method, arg, resolve, reject);                                                            // 183
        });                                                                                                // 184
      }                                                                                                    // 185
                                                                                                           // 186
      return previousPromise =                                                                             // 187
        // If enqueue has been called before, then we want to wait until                                   // 188
        // all previous Promises have been resolved before calling invoke,                                 // 189
        // so that results are always delivered in the correct order. If                                   // 190
        // enqueue has not been called before, then it is important to                                     // 191
        // call invoke immediately, without waiting on a callback to fire,                                 // 192
        // so that the async generator function has the opportunity to do                                  // 193
        // any necessary setup in a predictable way. This predictability                                   // 194
        // is why the Promise constructor synchronously invokes its                                        // 195
        // executor callback, and why async functions synchronously                                        // 196
        // execute code before the first await. Since we implement simple                                  // 197
        // async functions in terms of async generators, it is especially                                  // 198
        // important to get this right, even though it requires care.                                      // 199
        previousPromise ? previousPromise.then(                                                            // 200
          callInvokeWithMethodAndArg,                                                                      // 201
          // Avoid propagating failures to Promises returned by later                                      // 202
          // invocations of the iterator.                                                                  // 203
          callInvokeWithMethodAndArg                                                                       // 204
        ) : callInvokeWithMethodAndArg();                                                                  // 205
    }                                                                                                      // 206
                                                                                                           // 207
    // Define the unified helper method that is used to implement .next,                                   // 208
    // .throw, and .return (see defineIteratorMethods).                                                    // 209
    this._invoke = enqueue;                                                                                // 210
  }                                                                                                        // 211
                                                                                                           // 212
  defineIteratorMethods(AsyncIterator.prototype);                                                          // 213
                                                                                                           // 214
  // Note that simple async functions are implemented on top of                                            // 215
  // AsyncIterator objects; they just return a Promise for the value of                                    // 216
  // the final result produced by the iterator.                                                            // 217
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {                                          // 218
    var iter = new AsyncIterator(                                                                          // 219
      wrap(innerFn, outerFn, self, tryLocsList)                                                            // 220
    );                                                                                                     // 221
                                                                                                           // 222
    return runtime.isGeneratorFunction(outerFn)                                                            // 223
      ? iter // If outerFn is a generator, return the full iterator.                                       // 224
      : iter.next().then(function(result) {                                                                // 225
          return result.done ? result.value : iter.next();                                                 // 226
        });                                                                                                // 227
  };                                                                                                       // 228
                                                                                                           // 229
  function makeInvokeMethod(innerFn, self, context) {                                                      // 230
    var state = GenStateSuspendedStart;                                                                    // 231
                                                                                                           // 232
    return function invoke(method, arg) {                                                                  // 233
      if (state === GenStateExecuting) {                                                                   // 234
        throw new Error("Generator is already running");                                                   // 235
      }                                                                                                    // 236
                                                                                                           // 237
      if (state === GenStateCompleted) {                                                                   // 238
        if (method === "throw") {                                                                          // 239
          throw arg;                                                                                       // 240
        }                                                                                                  // 241
                                                                                                           // 242
        // Be forgiving, per 25.3.3.3.3 of the spec:                                                       // 243
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume                       // 244
        return doneResult();                                                                               // 245
      }                                                                                                    // 246
                                                                                                           // 247
      while (true) {                                                                                       // 248
        var delegate = context.delegate;                                                                   // 249
        if (delegate) {                                                                                    // 250
          if (method === "return" ||                                                                       // 251
              (method === "throw" && delegate.iterator[method] === undefined)) {                           // 252
            // A return or throw (when the delegate iterator has no throw                                  // 253
            // method) always terminates the yield* loop.                                                  // 254
            context.delegate = null;                                                                       // 255
                                                                                                           // 256
            // If the delegate iterator has a return method, give it a                                     // 257
            // chance to clean up.                                                                         // 258
            var returnMethod = delegate.iterator["return"];                                                // 259
            if (returnMethod) {                                                                            // 260
              var record = tryCatch(returnMethod, delegate.iterator, arg);                                 // 261
              if (record.type === "throw") {                                                               // 262
                // If the return method threw an exception, let that                                       // 263
                // exception prevail over the original return or throw.                                    // 264
                method = "throw";                                                                          // 265
                arg = record.arg;                                                                          // 266
                continue;                                                                                  // 267
              }                                                                                            // 268
            }                                                                                              // 269
                                                                                                           // 270
            if (method === "return") {                                                                     // 271
              // Continue with the outer return, now that the delegate                                     // 272
              // iterator has been terminated.                                                             // 273
              continue;                                                                                    // 274
            }                                                                                              // 275
          }                                                                                                // 276
                                                                                                           // 277
          var record = tryCatch(                                                                           // 278
            delegate.iterator[method],                                                                     // 279
            delegate.iterator,                                                                             // 280
            arg                                                                                            // 281
          );                                                                                               // 282
                                                                                                           // 283
          if (record.type === "throw") {                                                                   // 284
            context.delegate = null;                                                                       // 285
                                                                                                           // 286
            // Like returning generator.throw(uncaught), but without the                                   // 287
            // overhead of an extra function call.                                                         // 288
            method = "throw";                                                                              // 289
            arg = record.arg;                                                                              // 290
            continue;                                                                                      // 291
          }                                                                                                // 292
                                                                                                           // 293
          // Delegate generator ran and handled its own exceptions so                                      // 294
          // regardless of what the method was, we continue as if it is                                    // 295
          // "next" with an undefined arg.                                                                 // 296
          method = "next";                                                                                 // 297
          arg = undefined;                                                                                 // 298
                                                                                                           // 299
          var info = record.arg;                                                                           // 300
          if (info.done) {                                                                                 // 301
            context[delegate.resultName] = info.value;                                                     // 302
            context.next = delegate.nextLoc;                                                               // 303
          } else {                                                                                         // 304
            state = GenStateSuspendedYield;                                                                // 305
            return info;                                                                                   // 306
          }                                                                                                // 307
                                                                                                           // 308
          context.delegate = null;                                                                         // 309
        }                                                                                                  // 310
                                                                                                           // 311
        if (method === "next") {                                                                           // 312
          // Setting context._sent for legacy support of Babel's                                           // 313
          // function.sent implementation.                                                                 // 314
          context.sent = context._sent = arg;                                                              // 315
                                                                                                           // 316
        } else if (method === "throw") {                                                                   // 317
          if (state === GenStateSuspendedStart) {                                                          // 318
            state = GenStateCompleted;                                                                     // 319
            throw arg;                                                                                     // 320
          }                                                                                                // 321
                                                                                                           // 322
          if (context.dispatchException(arg)) {                                                            // 323
            // If the dispatched exception was caught by a catch block,                                    // 324
            // then let that catch block handle the exception normally.                                    // 325
            method = "next";                                                                               // 326
            arg = undefined;                                                                               // 327
          }                                                                                                // 328
                                                                                                           // 329
        } else if (method === "return") {                                                                  // 330
          context.abrupt("return", arg);                                                                   // 331
        }                                                                                                  // 332
                                                                                                           // 333
        state = GenStateExecuting;                                                                         // 334
                                                                                                           // 335
        var record = tryCatch(innerFn, self, context);                                                     // 336
        if (record.type === "normal") {                                                                    // 337
          // If an exception is thrown from innerFn, we leave state ===                                    // 338
          // GenStateExecuting and loop back for another invocation.                                       // 339
          state = context.done                                                                             // 340
            ? GenStateCompleted                                                                            // 341
            : GenStateSuspendedYield;                                                                      // 342
                                                                                                           // 343
          var info = {                                                                                     // 344
            value: record.arg,                                                                             // 345
            done: context.done                                                                             // 346
          };                                                                                               // 347
                                                                                                           // 348
          if (record.arg === ContinueSentinel) {                                                           // 349
            if (context.delegate && method === "next") {                                                   // 350
              // Deliberately forget the last sent value so that we don't                                  // 351
              // accidentally pass it on to the delegate.                                                  // 352
              arg = undefined;                                                                             // 353
            }                                                                                              // 354
          } else {                                                                                         // 355
            return info;                                                                                   // 356
          }                                                                                                // 357
                                                                                                           // 358
        } else if (record.type === "throw") {                                                              // 359
          state = GenStateCompleted;                                                                       // 360
          // Dispatch the exception by looping back around to the                                          // 361
          // context.dispatchException(arg) call above.                                                    // 362
          method = "throw";                                                                                // 363
          arg = record.arg;                                                                                // 364
        }                                                                                                  // 365
      }                                                                                                    // 366
    };                                                                                                     // 367
  }                                                                                                        // 368
                                                                                                           // 369
  // Define Generator.prototype.{next,throw,return} in terms of the                                        // 370
  // unified ._invoke helper method.                                                                       // 371
  defineIteratorMethods(Gp);                                                                               // 372
                                                                                                           // 373
  Gp[iteratorSymbol] = function() {                                                                        // 374
    return this;                                                                                           // 375
  };                                                                                                       // 376
                                                                                                           // 377
  Gp[toStringTagSymbol] = "Generator";                                                                     // 378
                                                                                                           // 379
  Gp.toString = function() {                                                                               // 380
    return "[object Generator]";                                                                           // 381
  };                                                                                                       // 382
                                                                                                           // 383
  function pushTryEntry(locs) {                                                                            // 384
    var entry = { tryLoc: locs[0] };                                                                       // 385
                                                                                                           // 386
    if (1 in locs) {                                                                                       // 387
      entry.catchLoc = locs[1];                                                                            // 388
    }                                                                                                      // 389
                                                                                                           // 390
    if (2 in locs) {                                                                                       // 391
      entry.finallyLoc = locs[2];                                                                          // 392
      entry.afterLoc = locs[3];                                                                            // 393
    }                                                                                                      // 394
                                                                                                           // 395
    this.tryEntries.push(entry);                                                                           // 396
  }                                                                                                        // 397
                                                                                                           // 398
  function resetTryEntry(entry) {                                                                          // 399
    var record = entry.completion || {};                                                                   // 400
    record.type = "normal";                                                                                // 401
    delete record.arg;                                                                                     // 402
    entry.completion = record;                                                                             // 403
  }                                                                                                        // 404
                                                                                                           // 405
  function Context(tryLocsList) {                                                                          // 406
    // The root entry object (effectively a try statement without a catch                                  // 407
    // or a finally block) gives us a place to store values thrown from                                    // 408
    // locations where there is no enclosing try statement.                                                // 409
    this.tryEntries = [{ tryLoc: "root" }];                                                                // 410
    tryLocsList.forEach(pushTryEntry, this);                                                               // 411
    this.reset(true);                                                                                      // 412
  }                                                                                                        // 413
                                                                                                           // 414
  runtime.keys = function(object) {                                                                        // 415
    var keys = [];                                                                                         // 416
    for (var key in object) {                                                                              // 417
      keys.push(key);                                                                                      // 418
    }                                                                                                      // 419
    keys.reverse();                                                                                        // 420
                                                                                                           // 421
    // Rather than returning an object with a next method, we keep                                         // 422
    // things simple and return the next function itself.                                                  // 423
    return function next() {                                                                               // 424
      while (keys.length) {                                                                                // 425
        var key = keys.pop();                                                                              // 426
        if (key in object) {                                                                               // 427
          next.value = key;                                                                                // 428
          next.done = false;                                                                               // 429
          return next;                                                                                     // 430
        }                                                                                                  // 431
      }                                                                                                    // 432
                                                                                                           // 433
      // To avoid creating an additional object, we just hang the .value                                   // 434
      // and .done properties off the next function object itself. This                                    // 435
      // also ensures that the minifier will not anonymize the function.                                   // 436
      next.done = true;                                                                                    // 437
      return next;                                                                                         // 438
    };                                                                                                     // 439
  };                                                                                                       // 440
                                                                                                           // 441
  function values(iterable) {                                                                              // 442
    if (iterable) {                                                                                        // 443
      var iteratorMethod = iterable[iteratorSymbol];                                                       // 444
      if (iteratorMethod) {                                                                                // 445
        return iteratorMethod.call(iterable);                                                              // 446
      }                                                                                                    // 447
                                                                                                           // 448
      if (typeof iterable.next === "function") {                                                           // 449
        return iterable;                                                                                   // 450
      }                                                                                                    // 451
                                                                                                           // 452
      if (!isNaN(iterable.length)) {                                                                       // 453
        var i = -1, next = function next() {                                                               // 454
          while (++i < iterable.length) {                                                                  // 455
            if (hasOwn.call(iterable, i)) {                                                                // 456
              next.value = iterable[i];                                                                    // 457
              next.done = false;                                                                           // 458
              return next;                                                                                 // 459
            }                                                                                              // 460
          }                                                                                                // 461
                                                                                                           // 462
          next.value = undefined;                                                                          // 463
          next.done = true;                                                                                // 464
                                                                                                           // 465
          return next;                                                                                     // 466
        };                                                                                                 // 467
                                                                                                           // 468
        return next.next = next;                                                                           // 469
      }                                                                                                    // 470
    }                                                                                                      // 471
                                                                                                           // 472
    // Return an iterator with no values.                                                                  // 473
    return { next: doneResult };                                                                           // 474
  }                                                                                                        // 475
  runtime.values = values;                                                                                 // 476
                                                                                                           // 477
  function doneResult() {                                                                                  // 478
    return { value: undefined, done: true };                                                               // 479
  }                                                                                                        // 480
                                                                                                           // 481
  Context.prototype = {                                                                                    // 482
    constructor: Context,                                                                                  // 483
                                                                                                           // 484
    reset: function(skipTempReset) {                                                                       // 485
      this.prev = 0;                                                                                       // 486
      this.next = 0;                                                                                       // 487
      // Resetting context._sent for legacy support of Babel's                                             // 488
      // function.sent implementation.                                                                     // 489
      this.sent = this._sent = undefined;                                                                  // 490
      this.done = false;                                                                                   // 491
      this.delegate = null;                                                                                // 492
                                                                                                           // 493
      this.tryEntries.forEach(resetTryEntry);                                                              // 494
                                                                                                           // 495
      if (!skipTempReset) {                                                                                // 496
        for (var name in this) {                                                                           // 497
          // Not sure about the optimal order of these conditions:                                         // 498
          if (name.charAt(0) === "t" &&                                                                    // 499
              hasOwn.call(this, name) &&                                                                   // 500
              !isNaN(+name.slice(1))) {                                                                    // 501
            this[name] = undefined;                                                                        // 502
          }                                                                                                // 503
        }                                                                                                  // 504
      }                                                                                                    // 505
    },                                                                                                     // 506
                                                                                                           // 507
    stop: function() {                                                                                     // 508
      this.done = true;                                                                                    // 509
                                                                                                           // 510
      var rootEntry = this.tryEntries[0];                                                                  // 511
      var rootRecord = rootEntry.completion;                                                               // 512
      if (rootRecord.type === "throw") {                                                                   // 513
        throw rootRecord.arg;                                                                              // 514
      }                                                                                                    // 515
                                                                                                           // 516
      return this.rval;                                                                                    // 517
    },                                                                                                     // 518
                                                                                                           // 519
    dispatchException: function(exception) {                                                               // 520
      if (this.done) {                                                                                     // 521
        throw exception;                                                                                   // 522
      }                                                                                                    // 523
                                                                                                           // 524
      var context = this;                                                                                  // 525
      function handle(loc, caught) {                                                                       // 526
        record.type = "throw";                                                                             // 527
        record.arg = exception;                                                                            // 528
        context.next = loc;                                                                                // 529
        return !!caught;                                                                                   // 530
      }                                                                                                    // 531
                                                                                                           // 532
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {                                              // 533
        var entry = this.tryEntries[i];                                                                    // 534
        var record = entry.completion;                                                                     // 535
                                                                                                           // 536
        if (entry.tryLoc === "root") {                                                                     // 537
          // Exception thrown outside of any try block that could handle                                   // 538
          // it, so set the completion value of the entire function to                                     // 539
          // throw the exception.                                                                          // 540
          return handle("end");                                                                            // 541
        }                                                                                                  // 542
                                                                                                           // 543
        if (entry.tryLoc <= this.prev) {                                                                   // 544
          var hasCatch = hasOwn.call(entry, "catchLoc");                                                   // 545
          var hasFinally = hasOwn.call(entry, "finallyLoc");                                               // 546
                                                                                                           // 547
          if (hasCatch && hasFinally) {                                                                    // 548
            if (this.prev < entry.catchLoc) {                                                              // 549
              return handle(entry.catchLoc, true);                                                         // 550
            } else if (this.prev < entry.finallyLoc) {                                                     // 551
              return handle(entry.finallyLoc);                                                             // 552
            }                                                                                              // 553
                                                                                                           // 554
          } else if (hasCatch) {                                                                           // 555
            if (this.prev < entry.catchLoc) {                                                              // 556
              return handle(entry.catchLoc, true);                                                         // 557
            }                                                                                              // 558
                                                                                                           // 559
          } else if (hasFinally) {                                                                         // 560
            if (this.prev < entry.finallyLoc) {                                                            // 561
              return handle(entry.finallyLoc);                                                             // 562
            }                                                                                              // 563
                                                                                                           // 564
          } else {                                                                                         // 565
            throw new Error("try statement without catch or finally");                                     // 566
          }                                                                                                // 567
        }                                                                                                  // 568
      }                                                                                                    // 569
    },                                                                                                     // 570
                                                                                                           // 571
    abrupt: function(type, arg) {                                                                          // 572
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {                                              // 573
        var entry = this.tryEntries[i];                                                                    // 574
        if (entry.tryLoc <= this.prev &&                                                                   // 575
            hasOwn.call(entry, "finallyLoc") &&                                                            // 576
            this.prev < entry.finallyLoc) {                                                                // 577
          var finallyEntry = entry;                                                                        // 578
          break;                                                                                           // 579
        }                                                                                                  // 580
      }                                                                                                    // 581
                                                                                                           // 582
      if (finallyEntry &&                                                                                  // 583
          (type === "break" ||                                                                             // 584
           type === "continue") &&                                                                         // 585
          finallyEntry.tryLoc <= arg &&                                                                    // 586
          arg <= finallyEntry.finallyLoc) {                                                                // 587
        // Ignore the finally entry if control is not jumping to a                                         // 588
        // location outside the try/catch block.                                                           // 589
        finallyEntry = null;                                                                               // 590
      }                                                                                                    // 591
                                                                                                           // 592
      var record = finallyEntry ? finallyEntry.completion : {};                                            // 593
      record.type = type;                                                                                  // 594
      record.arg = arg;                                                                                    // 595
                                                                                                           // 596
      if (finallyEntry) {                                                                                  // 597
        this.next = finallyEntry.finallyLoc;                                                               // 598
      } else {                                                                                             // 599
        this.complete(record);                                                                             // 600
      }                                                                                                    // 601
                                                                                                           // 602
      return ContinueSentinel;                                                                             // 603
    },                                                                                                     // 604
                                                                                                           // 605
    complete: function(record, afterLoc) {                                                                 // 606
      if (record.type === "throw") {                                                                       // 607
        throw record.arg;                                                                                  // 608
      }                                                                                                    // 609
                                                                                                           // 610
      if (record.type === "break" ||                                                                       // 611
          record.type === "continue") {                                                                    // 612
        this.next = record.arg;                                                                            // 613
      } else if (record.type === "return") {                                                               // 614
        this.rval = record.arg;                                                                            // 615
        this.next = "end";                                                                                 // 616
      } else if (record.type === "normal" && afterLoc) {                                                   // 617
        this.next = afterLoc;                                                                              // 618
      }                                                                                                    // 619
    },                                                                                                     // 620
                                                                                                           // 621
    finish: function(finallyLoc) {                                                                         // 622
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {                                              // 623
        var entry = this.tryEntries[i];                                                                    // 624
        if (entry.finallyLoc === finallyLoc) {                                                             // 625
          this.complete(entry.completion, entry.afterLoc);                                                 // 626
          resetTryEntry(entry);                                                                            // 627
          return ContinueSentinel;                                                                         // 628
        }                                                                                                  // 629
      }                                                                                                    // 630
    },                                                                                                     // 631
                                                                                                           // 632
    "catch": function(tryLoc) {                                                                            // 633
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {                                              // 634
        var entry = this.tryEntries[i];                                                                    // 635
        if (entry.tryLoc === tryLoc) {                                                                     // 636
          var record = entry.completion;                                                                   // 637
          if (record.type === "throw") {                                                                   // 638
            var thrown = record.arg;                                                                       // 639
            resetTryEntry(entry);                                                                          // 640
          }                                                                                                // 641
          return thrown;                                                                                   // 642
        }                                                                                                  // 643
      }                                                                                                    // 644
                                                                                                           // 645
      // The context.catch method must only be called with a location                                      // 646
      // argument that corresponds to a known catch block.                                                 // 647
      throw new Error("illegal catch attempt");                                                            // 648
    },                                                                                                     // 649
                                                                                                           // 650
    delegateYield: function(iterable, resultName, nextLoc) {                                               // 651
      this.delegate = {                                                                                    // 652
        iterator: values(iterable),                                                                        // 653
        resultName: resultName,                                                                            // 654
        nextLoc: nextLoc                                                                                   // 655
      };                                                                                                   // 656
                                                                                                           // 657
      return ContinueSentinel;                                                                             // 658
    }                                                                                                      // 659
  };                                                                                                       // 660
})(                                                                                                        // 661
  // Among the various tricks for obtaining a reference to the global                                      // 662
  // object, this seems to be the most reliable technique that does not                                    // 663
  // use indirect eval (which violates Content Security Policy).                                           // 664
  typeof global === "object" ? global :                                                                    // 665
  typeof window === "object" ? window :                                                                    // 666
  typeof self === "object" ? self : this                                                                   // 667
);                                                                                                         // 668
                                                                                                           // 669
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{"extensions":[".js",".json"]});
var exports = require("./node_modules/meteor/babel-runtime/babel-runtime.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['babel-runtime'] = exports, {
  meteorBabelHelpers: meteorBabelHelpers
});

})();
