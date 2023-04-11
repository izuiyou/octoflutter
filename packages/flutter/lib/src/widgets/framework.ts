import {isNullOrUndefined, Size, VoidCallback} from '@octoflutter/dartsdk'
import {Key, LocalKey, octoKey} from '../foundation/key'
import {RenderObject} from '../rendering/object'

export class UniqueKey extends LocalKey {
  constructor() {
    super(null)
    this[octoKey] = N.uniqueKeyInstance()
  }
}

export class ObjectKey extends LocalKey {
  constructor(value?: any) {
    super(null)
    this[octoKey] = N.objectKeyInstance()
  }
}

export class GlobalKey<T extends State<StatefulWidget>> extends Key {
  constructor(debugLabel?: string) {
    super(null)
    this[octoKey] = N.globalKeyInstance(debugLabel)
  }

  _state: T

  public get currentState(): T {
    return this._state
  }

  public get currentWidget() {
    return this._state?.widget
  }

  public get currentContext(): BuildContext {
    return (
      this._state?.context ?? new BuildContext(N.stateBuildContext(this._state))
    )
  }
}

export class GlobalObjectKey<
  T extends State<StatefulWidget>
> extends GlobalKey<T> {
  constructor(value?: any) {
    super(null)
    this.value = value
    this[octoKey] = N.globalObjectKeyInstance(value)
  }

  value?: any
}

export abstract class Widget extends N.Widget {
  constructor(args?: {key?: Key}) {
    super()
  }
}

export abstract class StatelessWidget extends N.OctoStatelessWidget {
  constructor(args?: {key?: Key}) {
    super(args?.key?.[octoKey])
  }

  abstract build(context: BuildContext): Widget

  context: BuildContext

  private wgb(_: any, ctx: any) {
    this.context = new BuildContext(ctx)
    return this.build(this.context)
  }
}

export abstract class State<T extends StatefulWidget> extends N.OctoState {
  constructor() {
    super()
  }

  abstract build(context: BuildContext): Widget

  private wgb(_: any, context: any) {
    return this.build(this.context)
  }

  initState() {
    super.initState()
  }

  didUpdateWidget(oldWidget: Widget) {
    super.didUpdateWidget(oldWidget)
  }

  didChangeDependencies() {
    super.didChangeDependencies()
  }

  deactivate() {
    super.deactivate()
  }

  dispose() {
    super.dispose()
  }

  setState(fn: VoidCallback) {
    super.setState(fn)
  }

  public get mounted(): boolean {
    return N.isStateMounted(this) as boolean
  }

  public get widget(): T {
    return N.stateGetWidget(this) as T
  }

  _context: BuildContext

  public get context(): BuildContext {
    if (isNullOrUndefined(this._context)) {
      this._context = new BuildContext(N.stateBuildContext(this))
    }
    return this._context
  }
}

export abstract class StatefulWidget extends N.OctoStatefulWidget {
  private key?: Key

  constructor(args?: {key?: Key}) {
    super(args?.key?.[octoKey])
    this.key = args?.key
  }

  private wga() {
    const state = this.createState()
    if (!isNullOrUndefined(this.key) && this.key instanceof GlobalKey) {
      this.key._state = state
    }
    return state
  }

  abstract createState(): State<StatefulWidget>
}

export const octoNavigatorState = Symbol('octoNavigatorState')

export const octoModalRoute = Symbol('octoModalRoute')

export const octoThemeData = Symbol('octoThemeData')

export const octoMediaQuery = Symbol('octoMediaQuery')

export const octoTabCtrl = Symbol('octoTabCtrl')

export const octoContext = Symbol('octoContext')

export const octoScaffoldState = Symbol('octoScaffoldState')

export const octoScaffoldMessengerState = Symbol('octoScaffoldMessengerState')

export const octoAnimatedListState = Symbol('octoAnimatedListState')

export class BuildContext extends N.OctoBuildContext {
  private real: any
  constructor(real: any) {
    super(real)
    this.real = real
  }

  public get size(): Size {
    return new Size(super.wgs(), super.wgt())
  }

  private [octoNavigatorState]() {
    return super.wgu()
  }

  private [octoModalRoute]() {
    return super.wgv()
  }

  private [octoThemeData]() {
    return super.wgw()
  }

  private [octoMediaQuery]() {
    return super.wgx()
  }

  private [octoTabCtrl]() {
    return super.wgy()
  }

  private [octoContext]() {
    return this.real
  }

  public findRenderObject(): RenderObject | null {
    const obj = super.wgz()
    return isNullOrUndefined(obj) ? obj : new RenderObject(obj)
  }

  private [octoScaffoldState]() {
    return super.wca()
  }

  private [octoScaffoldMessengerState]() {
    return super.wcb()
  }

  private [octoAnimatedListState]() {
    return super.wcc()
  }
}

export type WidgetBuilder = (context: BuildContext) => Widget

export type TransitionBuilder = (context: BuildContext, child: Widget) => Widget

export type IndexedWidgetBuilder = (
  context: BuildContext,
  index: number
) => Widget

export type NullableIndexedWidgetBuilder = (
  context: BuildContext,
  index: number
) => Widget | null | undefined
