var self = (window = this)
window.top = window.parent = window
;(function (window) {
  var octo = (window.octo = new GlobalUtils())
  var support = (window.support = new WindowSupport())

  window.devicePixelRatio = octo.devicePixelRatio
  window.innerWidth = octo.screenWidth
  window.innerHeight = octo.screenHeight

  Object.defineProperty(window, 'orientation', {
    get: function () {
      return octo.orientation
    },
  })

  window.screen = {
    availWidth: window.innerWidth,
    availHeight: window.innerHeight,
  }

  window.navigator = {
    language: octo.language,
    userAgent: octo.userAgent,
    appVersion: octo.appVersion,
    platform: octo.platform,
  }

  window.console = {
    _arrayMaxLength: 32,

    _toString: function (obj, deep) {
      if (deep) {
        return JSON.stringify(obj)
      } else if (obj instanceof Array || ArrayBuffer.isView(obj)) {
        var s = '',
          length = Math.min(obj.length, window.console._arrayMaxLength),
          omitted = obj.length - length
        for (var i = 0; i < length; i++) {
          s += (i === 0 ? '' : ', ') + window.console._toStringFlat(obj[i])
        }
        return '[' + s + (omitted ? ', ...' + omitted + ' more]' : ']')
      } else {
        var s = '',
          first = true
        for (var i in obj) {
          s +=
            (first ? '' : ', ') +
            i +
            ': ' +
            window.console._toStringFlat(obj[i])
          first = false
        }
        return '{' + s + '}'
      }
    },

    _toStringFlat: function (obj) {
      if (typeof obj === 'function') {
        return '[Function]'
      } else if (obj instanceof Array || ArrayBuffer.isView(obj)) {
        return '[Array ' + obj.length + ']'
      } else {
        return obj
      }
    },

    _log: function (level, args, deep) {
      var s = level + ':'
      for (var i = 0; i < args.length; i++) {
        var arg = args[i]
        s +=
          ' ' +
          (!arg || typeof arg !== 'object'
            ? arg
            : window.console._toString(arg, deep))
      }
      octo.log(s)
    },

    assert: function () {
      var args = Array.prototype.slice.call(arguments)
      var assertion = args.shift()
      if (!assertion) {
        octo.log('Assertion failed: ' + args.join(', '))
      }
    },
  }
  window.console.debug = function () {
    window.console._log('DEBUG', arguments)
  }
  window.console.info = function () {
    window.console._log('INFO', arguments)
  }
  window.console.warn = function () {
    window.console._log('WARN', arguments)
  }
  window.console.error = function () {
    window.console._log('ERROR', arguments)
  }
  window.console.log = function () {
    window.console._log('LOG', arguments)
  }
  window.console.logJSON = function () {
    window.console._log('JSON', arguments, true)
  }

  var consoleTimers = {}
  console.time = function (name) {
    consoleTimers[name] = octo.performanceNow()
  }

  console.timeEnd = function (name) {
    var timeStart = consoleTimers[name]
    if (!timeStart) {
      return
    }

    var timeElapsed = octo.performanceNow() - timeStart
    console.log(name + ': ' + timeElapsed + 'ms')
    delete consoleTimers[name]
  }

  window.setTimeout = function (cb, t) {
    return support.setTimeout(cb, t || 0)
  }
  window.setInterval = function (cb, t) {
    return support.setInterval(cb, t || 0)
  }
  window.clearTimeout = function (id) {
    return support.clearTimeout(id)
  }
  window.clearInterval = function (id) {
    return support.clearInterval(id)
  }
  window.requestAnimationFrame = function (cb, element) {
    return support.requestAnimationFrame(cb)
  }
  window.cancelAnimationFrame = function (id) {
    return support.cancelAnimationFrame(id)
  }

  class Event {
    constructor(typeArg, eventInit) {
      this.type = typeArg
      this.bubbles = true
      this.cancelBubble = false
      this.cancelable = false
      this.composed = false
      this.target = null
      this.currentTarget = null
      this.timeStamp = octo.performanceNow()

      if (eventInit !== undefined && eventInit !== null) {
        this.bubbles = eventInit.bubbles || true
        this.cancelable = eventInit.cancelable || false
        this.composed = eventInit.composed || false
      }
    }

    preventDefault() {}
    stopPropagation() {}
  }

  class TouchEvent extends Event {
    constructor(typeArg, eventInit) {
      super(typeArg, eventInit)
      this.targetTouches = null
      this.changedTouches = null
    }
  }

  window.Event = Event
  window.TouchEvent = TouchEvent

  window.location = {href: 'index.js', hash: ''}
  window.location.reload = function () {
    octo.load('index.js')
  }

  window.open = function (url) {
    octo.openURL(url)
  }

  HTMLElement = function (tagName) {
    this.tagName = tagName.toUpperCase()
    this.children = []
    this.style = {}
  }

  HTMLElement.prototype.appendChild = function (element) {
    this.children.push(element)

    if (element.tagName && element.tagName.toLowerCase() == 'script') {
      if (element.src) {
        octo.setTimeout(function () {
          octo.include(element.src)
          if (element.onload) {
            element.onload({
              type: 'load',
              currentTarget: element,
            })
          }
        }, 1)
      } else if (element.text) {
        window.eval(element.text)
      }
    }
  }

  HTMLElement.prototype.insertBefore = function (newElement, existingElement) {
    // Just append; we don't care about order here
    this.appendChild(newElement)
  }

  HTMLElement.prototype.removeChild = function (node) {
    for (var i = this.children.length; i--; ) {
      if (this.children[i] === node) {
        this.children.splice(i, 1)
      }
    }
  }

  HTMLElement.prototype.getBoundingClientRect = function () {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }

  HTMLElement.prototype.setAttribute = function (attr, value) {
    this[attr] = value
  }

  HTMLElement.prototype.getAttribute = function (attr) {
    return this[attr]
  }

  HTMLElement.prototype.addEventListener = function (event, method) {
    if (event === 'load') {
      this.onload = method
    }
  }

  HTMLElement.prototype.removeEventListener = function (event, method) {
    if (event === 'load') {
      this.onload = undefined
    }
  }

  window.document = {
    readyState: 'complete',
    documentElement: window,
    location: window.location,
    visibilityState: 'visible',
    hidden: false,
    style: {},

    head: new HTMLElement('head'),
    body: new HTMLElement('body'),

    events: {},
    currentScript: '',

    createElement: function (name) {
      return new HTMLElement(name)
    },

    createEvent: function (type) {
      return new window.Event(type)
    },

    addEventListener: function (type, callback, useCapture) {
      if (type == 'DOMContentLoaded') {
        octo.setTimeout(callback, 1)
        return
      }
      if (!this.events[type]) {
        this.events[type] = []

        if (typeof this._eventInitializers[type] == 'function') {
          this._eventInitializers[type]()
        }
      }
      this.events[type].push(callback)
    },

    removeEventListener: function (type, callback) {
      var listeners = this.events[type]
      if (!listeners) {
        return
      }

      for (var i = listeners.length; i--; ) {
        if (listeners[i] === callback) {
          listeners.splice(i, 1)
        }
      }
    },

    _eventInitializers: {},
    dispatchEvent: function (event) {
      var listeners = this.events[event.type]
      if (!listeners) {
        return
      }

      for (var i = 0; i < listeners.length; i++) {
        listeners[i](event)
      }
    },
  }

  window.addEventListener = function (type, callback) {
    window.document.addEventListener(type, callback)
  }

  window.removeEventListener = function (type, callback) {
    window.document.removeEventListener(type, callback)
  }

  var eventInit = document._eventInitializers

  window.ontouchstart =
    window.ontouchend =
    window.ontouchmove =
    window.ontouchcancel =
      null
  document.ontouchstart =
    document.ontouchend =
    document.ontouchmove =
    document.ontouchcancel =
      null

  var touchInput = null
  var touchEvent = new window.TouchEvent()

  var dispatchTouchEvent = function (type, all, changed, timeStamp) {
    touchEvent.touches = all
    touchEvent.targetTouches = all
    touchEvent.changedTouches = changed
    touchEvent.type = type
    touchEvent.timeStamp = timeStamp

    document.dispatchEvent(touchEvent)
  }
  eventInit.touchstart =
    eventInit.touchend =
    eventInit.touchmove =
    eventInit.touchcancel =
      function () {
        if (touchInput === null || touchInput === undefined) {
          touchInput = new TouchInput()
        }
        touchInput.ontouchstart = dispatchTouchEvent.bind(window, 'touchstart')
        touchInput.ontouchend = dispatchTouchEvent.bind(window, 'touchend')
        touchInput.ontouchmove = dispatchTouchEvent.bind(window, 'touchmove')
        touchInput.ontouchcancel = dispatchTouchEvent.bind(
          window,
          'touchcancel'
        )
      }

  var windowEvents = new WindowEvents()

  var lifecycleEvent = new window.Event('pagehide')
  lifecycleEvent.target = window.document
  lifecycleEvent.currentTarget = window.document

  var resizeEvent = new window.Event('resize')
  resizeEvent.target = window
  resizeEvent.currentTarget = window

  var visibilityEvent = new window.Event('visibilitychange')
  visibilityEvent.target = window.document
  visibilityEvent.currentTarget = window.document

  windowEvents.onpagehide = function () {
    document.hidden = true
    document.visibilityState = 'hidden'
    visibilityEvent.timeStamp = octo.performanceNow()
    document.dispatchEvent(visibilityEvent)

    lifecycleEvent.type = 'pagehide'
    document.dispatchEvent(lifecycleEvent)
  }

  windowEvents.onpageshow = function () {
    document.hidden = false
    document.visibilityState = 'visible'
    visibilityEvent.timeStamp = octo.performanceNow()
    document.dispatchEvent(visibilityEvent)

    lifecycleEvent.type = 'pageshow'
    document.dispatchEvent(lifecycleEvent)
  }

  windowEvents.onresize = function () {
    window.innerWidth = octo.screenWidth
    window.innerHeight = octo.screenHeight
    window.screen = {
      availWidth: window.innerWidth,
      availHeight: window.innerHeight,
    }
    resizeEvent.timeStamp = octo.performanceNow()
    document.dispatchEvent(resizeEvent)
  }

  window.history = {
    state: 1,
    replaceState: function (data, unused, url) {},
  }

  window.performance = {
    mark: function (name) {},

    now: function () {
      return octo.performanceNow()
    },

    measure: function (name, startMark, endMark) {},
  }

  window.flutterCanvasKit = new CanvasKit()
  window.flutterCanvasKit.Path = SkPath
  window.flutterCanvasKit.PictureRecorder = SkPictureRecorder
  window.flutterCanvasKit.Paint = SkPaint
  window.flutterCanvasKit.ColorSpace = SkColorSpace
  window.flutterCanvasKit.TypefaceFontProvider = TypefaceFontProvider
  window.flutterCanvasKit.Font = SkFont
  window.flutterCanvasKit.GrContext = SkGrContext
  window.flutterCanvasKit.ContourMeasureIter = SkContourMeasureIter
  window.invokePlatform = function (data, bytes, limit) {
    octo.invokePlatform(data, bytes, limit)
  }
  window.binaryMessenger = function (callback) {
    octo.binaryMessenger(callback)
  }
  window.fetchImageData = function (
    bid,
    src,
    width,
    height,
    local,
    headers,
    callback
  ) {
    octo.fetchImageData(bid, src, width, height, local, headers, callback)
  }
  window.saveImageToFile = function (
    name,
    width,
    height,
    bytes,
    limit,
    callback
  ) {
    octo.saveImageToFile(name, width, height, bytes, limit, callback)
  }
  window.appEnvironmentReady = function () {
    octo.appEnvironmentReady()
  }
  window.shutApp = function (bid) {
    octo.shutApp(bid)
  }
  window.launchApp = function (bid) {
    octo.launchApp(bid)
  }
  window.fastTouchEvent = function (callback) {
    support.fastTouchEvent(callback)
  }
  window.dartDeferredLibraryLoader = function (uri, successCallback, errorCallback, loadId) {
    octo.dartDeferredLibraryLoader(uri, successCallback, errorCallback, loadId)
  }
})(this)