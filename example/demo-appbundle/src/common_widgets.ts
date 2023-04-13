import {Color, FontWeight, Radius} from '@octoflutter/dartsdk'
import {
  Alignment,
  AppBar,
  Axis,
  BorderRadius,
  ClipRRect,
  Colors,
  Column,
  Container,
  CrossAxisAlignment,
  EdgeInsets,
  IconThemeData,
  kToolbarHeight,
  MainAxisAlignment,
  Row,
  Scaffold,
  SingleChildScrollView,
  Text,
  TextStyle,
  Widget,
} from '@octoflutter/flutter'
import {kSize16, kSubTitleColor} from './constants'
import {Env} from './env'
import {codeWidget} from './plugins/codes'

export const commAppBar = (title: string, showMobileStyle: boolean): AppBar => {
  let fontSize = 18
  let titleColor = Colors.white
  let toolbarHeight = kToolbarHeight
  let backgroundColor: Color = Colors.blue
  if (Env.showNormalWebSize && kIsWeb && !showMobileStyle) {
    fontSize = 24
    titleColor = Color.fromARGB(255, 74, 74, 74)
    toolbarHeight = 60
    backgroundColor = Colors.white
  }

  return new AppBar({
    title: new Text(title, {
      style: new TextStyle({
        fontSize: fontSize,
        color: titleColor,
      }),
    }),
    toolbarHeight: toolbarHeight,
    backgroundColor: backgroundColor,
    iconTheme: new IconThemeData({
      size: fontSize,
      color: titleColor,
    }),
    leadingWidth: toolbarHeight,
  })
}

export const commCodeSamplePage = (
  title: string,
  code: string,
  url: string,
  mobileStyleWidget: Widget
): Widget => {
  return new Scaffold({
    appBar: commAppBar(title, false),
    backgroundColor: Color.fromARGB(255, 230, 235, 235),
    body: new SingleChildScrollView({
      child: new Container({
        margin: EdgeInsets.only({left: 30, right: 30, top: 20, bottom: 20}),
        child: new Row({
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            new Container({
              child: new SingleChildScrollView({
                scrollDirection: Axis.vertical,
                child: new Column({
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    new Container({
                      margin: EdgeInsets.all(20),
                      child: new Text('TypeScript:', {
                        style: new TextStyle({
                          fontSize: kSize16,
                          color: kSubTitleColor,
                          fontWeight: FontWeight.bold,
                        }),
                      }),
                    }),
                    codeWidget(code, url),
                  ],
                }),
              }),
            }),
            new Container({
              child: new SingleChildScrollView({
                scrollDirection: Axis.vertical,
                child: new Column({
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    new Container({
                      margin: EdgeInsets.all(20),
                      child: new Text('Sample:', {
                        style: new TextStyle({
                          fontSize: kSize16,
                          color: kSubTitleColor,
                          fontWeight: FontWeight.bold,
                        }),
                      }),
                    }),
                    new Container({
                      width: 375,
                      height: 667,
                      margin: EdgeInsets.only({left: 20, right: 20}),
                      child: new ClipRRect({
                        borderRadius: BorderRadius.all(Radius.circular(12)),
                        child: mobileStyleWidget,
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
        alignment: Alignment.topCenter,
      }),
      scrollDirection: Axis.horizontal,
    }),
  })
}
