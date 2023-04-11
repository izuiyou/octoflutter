//iOS Safari support for globalThis is version 12.2 or later.
//https://github.com/tc39/proposal-global/blob/master/polyfill.js
(function (global) {
    if (!global.globalThis) {
        if (Object.defineProperty) {
            Object.defineProperty(global, 'globalThis', {
                configurable: true,
                enumerable: false,
                value: global,
                writable: true
            });
        } else {
            global.globalThis = global;
        }
    }
})(typeof this === 'object' ? this : Function('return this')())

//*****fake browserSupportsFinalizationRegistry*****
window.FinalizationRegistry = 'fake';

//*****补充flutterCanvasKit*****
window.flutterCanvasKit.ColorSpace.SRGB = window.flutterCanvasKit.ColorSpace.MakeSRGB();

window.flutterCanvasKit.Surface = SkSurface;
window.flutterCanvasKit.ContourMeasureIter = SkContourMeasureIter;

window.flutterCanvasKit.ParagraphStyle = function(s) {
    return myParagraphStyle(s);
};
window.flutterCanvasKit.TextStyle = function(s) {
    return myTextStyle(s);
};
window.flutterCanvasKit.Malloc = function(type, size) {
    var array = new SkFloat32List(size);
    return array;
};

//-------------------deprecated，兼容老版本
// 程序加载点
window.loadJsApp = function() {
    octo.loadJsApp();
};
//-------------------

class SkFloat32List {
    constructor(size) {
      this.size = size;
    }

    toTypedArray() {
        var array = new Float32Array(this.size);
        return array;
    }
}

//*****适配iOS10以下*****
if (octo.iOS10Available == false) {
    //*****改造XMLHttpRequest*****
    Object.defineProperty(XMLHttpRequest.prototype, "response", {
        get() {
            // 借助js代码返回typedArray
            var temp = this.getRealResponse();
            if (this.responseType == 'arraybuffer' ||
                this.responseType == 'blob') {
                var array = new Uint8Array(temp);
                return array.buffer;
            }
            return temp;
        }
    });
    
    //*****改造SkImage*****
    SkImage.prototype.encodeToBytes = function() {
        var temp = this.realEncodeToBytes();
        var array = new Uint8Array(temp);
        return array;
    };
    SkImage.prototype.readPixels = function(srcX, srcY, imageInfo) {
        var temp = this.realReadPixels(srcX, srcY, imageInfo);
        var array = new Uint8Array(temp);
        return array;
    };
}

//*****覆盖原有方法，直接通过js转化array*****
SkParagraph.prototype.getRectsForRange = function(start, end, heightStyle, widthStyle) {
    var temp = this.realGetRectsForRange(start, end, heightStyle, widthStyle);
    for( var i = 0; i < temp.length; i++ ) {
        var array = new Float32Array(temp[i]);
        temp[i] = array;
    }
    return temp;
};
SkParagraph.prototype.getRectsForPlaceholders = function() {
    var temp = this.realGetRectsForPlaceholders();
    for( var i = 0; i < temp.length; i++ ) {
        var array = new Float32Array(temp[i]);
        temp[i] = array;
    }
    return temp;
};

window.fastTouchEvent = function (callback) {
    if (octo.iOS10Available) {
        window.octo.fastTouchEvent(callback);
    }
    else {
        window.octo.fastTouchEvent(function(array, position){
            var tmp = new Uint8Array(array);
            callback(tmp, position);
        });
    }
};

//*****两端通信*****
window.invokePlatform = function(data, buffer, limit) {
    window.octo.invokePlatform(data, buffer, limit);
};

window.binaryMessenger = function(callback) {
   window.binaryMessengerCallback = callback;
   window.octo.binaryMessenger(myBinaryMessenger);
};
myBinaryMessenger = function( str, arr, count ) {
   var array = new Uint8Array(arr);
   window.binaryMessengerCallback(str, array, count);
};

//*****程序退出时作清理*****
window.disposeAll = function() {
    window.octo.stopAllTimer();
    window.flutterCanvasKit.clear();
};

//*****文字格式辅助方法*****
function myParagraphStyle(s) {
    s = s || {};

    var pStyle = new SkParagraphStyle();
    pStyle.disableHinting = s['disableHinting'] || false;
    pStyle.ellipsis = s['ellipsis'] || '';
    pStyle.heightMultiplier = s['heightMultiplier'] || 0;
    pStyle.maxLines = s['maxLines'] || 0;
    pStyle.strutStyle = myStrutStyle(s['strutStyle']);
    pStyle.textAlign = s['textAlign'] || window.flutterCanvasKit.TextAlign.Start;
    pStyle.textDirection = s['textDirection'] || window.flutterCanvasKit.TextDirection.LTR;
    pStyle.textHeightBehavior = s['textHeightBehavior'] || 0;
    pStyle.textStyle = myTextStyle(s['textStyle']);
    return pStyle;
}

function myTextStyle(s) {
    s = s || {};

    var tStyle = new SkTextStyle();
    if (s['color']) {
        var rgba = s['color'];
        tStyle.color = [rgba[0],rgba[1],rgba[2],rgba[3]];
    }
    else {
        tStyle.color = [0, 0, 0, 1];
    }

    tStyle.fontFamilies = s['fontFamilies'];
    tStyle.decoration = s['decoration'] || 0;
    tStyle.decorationThickness = s['decorationThickness'] || 0;
    tStyle.decorationStyle = s['decorationStyle'] || window.flutterCanvasKit.DecorationStyle.Solid;
    tStyle.textBaseline = s['textBaseline'] || window.flutterCanvasKit.TextBaseline.Alphabetic;
    tStyle.fontSize = s['fontSize'] || 0;
    tStyle.letterSpacing = s['letterSpacing'] || 0;
    tStyle.wordSpacing = s['wordSpacing'] || 0;
    tStyle.heightMultiplier = s['heightMultiplier'] || 0;
    tStyle.halfLeading = s['halfLeading'] || false;
    tStyle.fontStyle = myFontStyle(s['fontStyle']);
    return tStyle;
}

function myStrutStyle(s) {
    if (s === undefined) {
        return null;
    }
    var sStyle = new SkStrutStyleProperties();
    sStyle.strutEnabled = s['strutEnabled'] || false;
    sStyle.fontFamilies = s['fontFamilies'];
    sStyle.fontStyle = myFontStyle(s['fontStyle']);
    sStyle.fontSize = s['fontSize'] || 0;
    sStyle.halfLeading = s['halfLeading'] || false;
    sStyle.leading = s['leading'] || 0;
    sStyle.forceStrutHeight = s['forceStrutHeight'] || false;
    sStyle.heightMultiplier = s['heightMultiplier'] || 0;
    return sStyle;
}

function myFontStyle(s) {
    var fStyle = new SkFontStyle();
    s = s || {};
    fStyle.weight = s['weight'] || window.flutterCanvasKit.FontWeight.Normal;
    fStyle.width = s['width'] || window.flutterCanvasKit.FontWidth.Normal;
    fStyle.slant = s['slant'] || window.flutterCanvasKit.FontSlant.Upright;
    return fStyle;
}

//*****encode string*****
class TextEncoder {
    encode(str) {
        window.octo.log('TextEncoder-str:' + str);
        
        var tmp = window.octo.encodeString(str);
        var array = new Uint8Array(tmp);
        return array;
    }
}

//*****engine key*****
window.flutterCanvasKit.engineKey = window.octo.currentEngineKey();

window.flutterCanvasKit.TypefaceFontProvider.Make = function() {
    return window.flutterCanvasKit.TypefaceFontProvider.MakeWithEngineKey(window.octo.currentEngineKey());
};

XMLHttpRequest.prototype.open = function(a, b, c) {
    this.realOpen(a, b, c, window.octo.currentEngineKey());
};

XMLHttpRequest.prototype.send = function(a) {
    // 认为a是Uint8Array
    if (a !== null && a !== undefined ) {
        // Uint8Array转普通数组
        this.realSend(Array.from(a));
    }
    else {
        this.realSend(null);
    }
};
