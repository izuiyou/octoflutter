import {mapFromDart} from '../collection'

export class Uri extends N.OctoUri {
  constructor(real: any) {
    super(real)
  }

  get scheme(): string {
    return super.ura()
  }

  get authority(): string {
    return super.urb()
  }

  get userInfo(): string {
    return super.urc()
  }

  get host(): string {
    return super.urd()
  }

  get port(): number {
    return super.ure()
  }

  get path(): string {
    return super.urf()
  }

  get query(): string {
    return super.urg()
  }

  get fragment(): string {
    return super.urh()
  }

  get pathSegments(): Array<string> {
    return Array.from(super.urj())
  }

  get queryParameters(): Map<string, string> {
    return mapFromDart(super.urk())
  }

  get queryParametersAll(): Map<string, Array<string>> {
    return mapFromDart(super.urm())
  }

  get isAbsolute(): boolean {
    return super.urn()
  }

  get hasScheme(): boolean {
    return super.uro()
  }

  get hasAuthority(): boolean {
    return super.urp()
  }

  get hasPort(): boolean {
    return super.urq()
  }

  get hasQuery(): boolean {
    return super.urr()
  }

  get hasFragment(): boolean {
    return super.urs()
  }

  get hasEmptyPath(): boolean {
    return super.urt()
  }

  get hasAbsolutePath(): boolean {
    return super.uru()
  }

  get origin(): string {
    return super.urv()
  }

  isScheme(scheme: string): boolean {
    return super.urw(scheme)
  }

  toString(): string {
    return super.urx()
  }

  static parse = (data: string): Uri => {
    return new Uri(N.octoUriParse(data))
  }

  static encodeFull = (uri: string): string => {
    return N.octoUriEncodeFull(uri)
  }

  static decodeFull = (uri: string): string => {
    return N.octoUriDecodeFull(uri)
  }
}
