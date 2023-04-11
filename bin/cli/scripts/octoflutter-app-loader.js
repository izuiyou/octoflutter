module.exports = function (source, map) {
  const options = this.getOptions()
  const {buildForMobile, buildInHtml, entry} = options
  const {resourcePath} = this

  if (source.includes('kIsWeb')) {
    source = `${
      buildForMobile ? 'const kIsWeb = false' : 'const kIsWeb = true'
    }\n ${source}`
  }
  if (source.includes('kHtmlMode')) {
    source = `${
      buildInHtml ? 'const kHtmlMode = true' : 'const kHtmlMode = false'
    }\n ${source}`
  }

  if (
    resourcePath.includes('src/ui/painting.ts') &&
    source.includes('ImageShader')
  ) {
    if (buildInHtml) {
      const arr = source.match(/\/\/=====FixBegin([\s\S]*?)\/\/=====FixEnd/)
      if (arr != null && arr.length > 0) {
        const s = arr[1]
        if (s !== null) {
          source = `${source}`.replace(
            s,
            `  
            
  export class Image extends N.HtmlImage { } 
           
  export class ImageShader extends N.EngineImageShader implements Shader {
  constructor(args: {
    image: Image
    tmx: TileMode
    tmy: TileMode
    matrix4: Float64Array
    filterQuality?: FilterQuality
  }) {
    super(
      args.tmx,
      args.tmy,
      args.matrix4,
      args.image
    )
  }
  }
  `
          )
        }
      }
    }
  }

  if (resourcePath !== entry) {
    return source
  }

  return `${source}\n ${
    buildForMobile ? 'main()' : 'window["loadJsApp"] = main'
  }`
}
