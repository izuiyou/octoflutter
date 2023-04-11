import {Color} from '@octoflutter/dartsdk'
import {ColorSwatch} from '../painting/colors'

export class MaterialColor extends ColorSwatch<number> {
  private swatch: Map<number, Color>

  constructor(primary: number, swatch: Map<number, Color>) {
    super(primary, swatch)
    this.swatch = swatch
  }

  get shade50(): Color {
    return this.swatch[50]
  }

  get shade100(): Color {
    return this.swatch[100]
  }

  get shade200(): Color {
    return this.swatch[200]
  }

  get shade300(): Color {
    return this.swatch[300]
  }

  get shade400(): Color {
    return this.swatch[400]
  }

  get shade500(): Color {
    return this.swatch[500]
  }

  get shade600(): Color {
    return this.swatch[600]
  }

  get shade700(): Color {
    return this.swatch[700]
  }

  get shade800(): Color {
    return this.swatch[800]
  }

  get shade900(): Color {
    return this.swatch[900]
  }
}

export class MaterialAccentColor extends ColorSwatch<number> {
  private swatch: Map<number, Color>

  constructor(primary: number, swatch: Map<number, Color>) {
    super(primary, swatch)
    this.swatch = swatch
  }

  get shade100(): Color {
    return this.swatch[100]
  }

  get shade200(): Color {
    return this.swatch[200]
  }

  get shade400(): Color {
    return this.swatch[400]
  }

  get shade700(): Color {
    return this.swatch[700]
  }
}

export class Colors {
  static transparent = new Color(0x00000000)

  static black = new Color(0xff000000)

  static black87 = new Color(0xdd000000)

  static black54 = new Color(0x8a000000)

  static black45 = new Color(0x73000000)

  static black38 = new Color(0x61000000)

  static black26 = new Color(0x42000000)

  static black12 = new Color(0x1f000000)

  static white = new Color(0xffffffff)

  static white70 = new Color(0xb3ffffff)

  static white60 = new Color(0x99ffffff)

  static white54 = new Color(0x8affffff)

  static white38 = new Color(0x62ffffff)

  static white30 = new Color(0x4dffffff)

  static white24 = new Color(0x3dffffff)

  static white12 = new Color(0x1fffffff)

  static white10 = new Color(0x1affffff)

  static red = new MaterialColor(
    0xfff44336,
    new Map<number, Color>([
      [50, new Color(0xffffebee)],
      [100, new Color(0xffffcdd2)],
      [200, new Color(0xffef9a9a)],
      [300, new Color(0xffe57373)],
      [400, new Color(0xffef5350)],
      [500, new Color(0xfff44336)],
      [600, new Color(0xffe53935)],
      [700, new Color(0xffd32f2f)],
      [800, new Color(0xffc62828)],
      [900, new Color(0xffb71c1c)],
    ])
  )

  static redAccent = new MaterialAccentColor(
    0xffff5252,
    new Map<number, Color>([
      [100, new Color(0xffff8a80)],
      [200, new Color(0xffff5252)],
      [400, new Color(0xffff1744)],
      [700, new Color(0xffd50000)],
    ])
  )

  static blue = new MaterialColor(
    0xff2196f3,
    new Map<number, Color>([
      [50, new Color(0xffe3f2fd)],
      [100, new Color(0xffbbdefb)],
      [200, new Color(0xff90caf9)],
      [300, new Color(0xff64b5f6)],
      [400, new Color(0xff42a5f5)],
      [500, new Color(0xff2196f3)],
      [600, new Color(0xff1e88e5)],
      [700, new Color(0xff1976d2)],
      [800, new Color(0xff1565c0)],
      [900, new Color(0xff0d47a1)],
    ])
  )

  static blueAccent = new MaterialAccentColor(
    0xff448aff,
    new Map<number, Color>([
      [100, new Color(0xff82b1ff)],
      [200, new Color(0xff448aff)],
      [400, new Color(0xff2979ff)],
      [700, new Color(0xff2962ff)],
    ])
  )

  static green = new MaterialColor(
    0xff4caf50,
    new Map<number, Color>([
      [50, new Color(0xffe8f5e9)],
      [100, new Color(0xffc8e6c9)],
      [200, new Color(0xffa5d6a7)],
      [300, new Color(0xff81c784)],
      [400, new Color(0xff66bb6a)],
      [500, new Color(0xff4caf50)],
      [600, new Color(0xff43a047)],
      [700, new Color(0xff388e3c)],
      [800, new Color(0xff2e7d32)],
      [900, new Color(0xff1b5e20)],
    ])
  )

  static greenAccent = new MaterialAccentColor(
    0xff69f0ae,
    new Map<number, Color>([
      [100, new Color(0xffb9f6ca)],
      [200, new Color(0xff69f0ae)],
      [400, new Color(0xff00e676)],
      [700, new Color(0xff00c853)],
    ])
  )

  static grey = new MaterialColor(
    0xff9e9e9e,
    new Map<number, Color>([
      [50, new Color(0xfffafafa)],
      [100, new Color(0xfff5f5f5)],
      [200, new Color(0xffeeeeee)],
      [300, new Color(0xffe0e0e0)],
      [350, new Color(0xffd6d6d6)],
      [400, new Color(0xffbdbdbd)],
      [500, new Color(0xff9e9e9e)],
      [600, new Color(0xff757575)],
      [700, new Color(0xff616161)],
      [800, new Color(0xff424242)],
      [850, new Color(0xff303030)],
      [900, new Color(0xff212121)],
    ])
  )

  static brown = new MaterialColor(
    0xff795548,
    new Map<number, Color>([
      [50, new Color(0xffefebe9)],
      [100, new Color(0xffd7ccc8)],
      [200, new Color(0xffbcaaa4)],
      [300, new Color(0xffa1887f)],
      [400, new Color(0xff8d6e63)],
      [500, new Color(0xff795548)],
      [600, new Color(0xff6d4c41)],
      [700, new Color(0xff5d4037)],
      [800, new Color(0xff4e342e)],
      [900, new Color(0xff3e2723)],
    ])
  )

  static yellow = new MaterialColor(
    0xffffeb3b,
    new Map<number, Color>([
      [50, new Color(0xfffffde7)],
      [100, new Color(0xfffff9c4)],
      [200, new Color(0xfffff59d)],
      [300, new Color(0xfffff176)],
      [400, new Color(0xffffee58)],
      [500, new Color(0xffffeb3b)],
      [600, new Color(0xfffdd835)],
      [700, new Color(0xfffbc02d)],
      [800, new Color(0xfff9a825)],
      [900, new Color(0xfff57f17)],
    ])
  )

  static yellowAccent = new MaterialAccentColor(
    0xffffff00,
    new Map<number, Color>([
      [100, new Color(0xffffff8d)],
      [200, new Color(0xffffff00)],
      [400, new Color(0xffffea00)],
      [700, new Color(0xffffd600)],
    ])
  )

  static orange = new MaterialColor(
    0xffff9800,
    new Map<number, Color>([
      [50, new Color(0xfffff3e0)],
      [100, new Color(0xffffe0b2)],
      [200, new Color(0xffffcc80)],
      [300, new Color(0xffffb74d)],
      [400, new Color(0xffffa726)],
      [500, new Color(0xffff9800)],
      [600, new Color(0xfffb8c00)],
      [700, new Color(0xfff57c00)],
      [800, new Color(0xffef6c00)],
      [900, new Color(0xffe65100)],
    ])
  )

  static orangeAccent = new MaterialAccentColor(
    0xffffab40,
    new Map<number, Color>([
      [100, new Color(0xffffd180)],
      [200, new Color(0xffffab40)],
      [400, new Color(0xffff9100)],
      [700, new Color(0xffff6d00)],
    ])
  )

  static pink = new MaterialColor(
    0xffe91e63,
    new Map<number, Color>([
      [50, new Color(0xfffce4ec)],
      [100, new Color(0xfff8bbd0)],
      [200, new Color(0xfff48fb1)],
      [300, new Color(0xfff06292)],
      [400, new Color(0xffec407a)],
      [500, new Color(0xffe91e63)],
      [600, new Color(0xffd81b60)],
      [700, new Color(0xffc2185b)],
      [800, new Color(0xffad1457)],
      [900, new Color(0xff880e4f)],
    ])
  )

  static pinkAccent = new MaterialAccentColor(
    0xffff4081,
    new Map<number, Color>([
      [100, new Color(0xffff80ab)],
      [200, new Color(0xffff4081)],
      [400, new Color(0xfff50057)],
      [700, new Color(0xffc51162)],
    ])
  )

  static purple = new MaterialColor(
    0xff9c27b0,
    new Map<number, Color>([
      [50, new Color(0xfff3e5f5)],
      [100, new Color(0xffe1bee7)],
      [200, new Color(0xffce93d8)],
      [300, new Color(0xffba68c8)],
      [400, new Color(0xffab47bc)],
      [500, new Color(0xff9c27b0)],
      [600, new Color(0xff8e24aa)],
      [700, new Color(0xff7b1fa2)],
      [800, new Color(0xff6a1b9a)],
      [900, new Color(0xff4a148c)],
    ])
  )

  static purpleAccent = new MaterialAccentColor(
    0xffe040fb,
    new Map<number, Color>([
      [100, new Color(0xffea80fc)],
      [200, new Color(0xffe040fb)],
      [400, new Color(0xffd500f9)],
      [700, new Color(0xffaa00ff)],
    ])
  )

  static cyan = new MaterialColor(
    0xff00bcd4,
    new Map<number, Color>([
      [50, new Color(0xffe0f7fa)],
      [100, new Color(0xffb2ebf2)],
      [200, new Color(0xff80deea)],
      [300, new Color(0xff4dd0e1)],
      [400, new Color(0xff26c6da)],
      [500, new Color(0xff00bcd4)],
      [600, new Color(0xff00acc1)],
      [700, new Color(0xff0097a7)],
      [800, new Color(0xff00838f)],
      [900, new Color(0xff006064)],
    ])
  )

  static cyanAccent = new MaterialAccentColor(
    0xff18ffff,
    new Map<number, Color>([
      [100, new Color(0xff84ffff)],
      [200, new Color(0xff18ffff)],
      [400, new Color(0xff00e5ff)],
      [700, new Color(0xff00b8d4)],
    ])
  )
}
