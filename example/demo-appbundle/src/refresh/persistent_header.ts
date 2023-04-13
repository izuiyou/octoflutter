import {Offset} from '@octoflutter/dartsdk'
import {
  Alignment,
  Axis,
  BorderSide,
  BuildContext,
  ColoredBox,
  Colors,
  Column,
  Container,
  CrossAxisAlignment,
  EdgeInsets,
  FractionalTranslation,
  MainAxisAlignment,
  Opacity,
  Row,
  SingleChildScrollView,
  SliverPersistentHeaderDelegate,
  Stack,
  StatelessWidget,
  Tab,
  TabBar,
  Text,
  TextStyle,
  TickerProvider,
  Widget,
} from '@octoflutter/flutter'
import {kSize14, kSize16} from '../constants'
import {UnderlineDecoration} from './decoration'

export class RefreshTopWidget extends StatelessWidget {
  build(context: BuildContext): Widget {
    return new Column({
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        new Container({
          child: new Text('Title1', {
            style: new TextStyle({
              fontSize: kSize16,
              color: Colors.black,
            }),
          }),
          height: 50,
          alignment: Alignment.center,
          color: Colors.white,
        }),
        new Container({
          height: 100,
          color: Colors.white,
          alignment: Alignment.topCenter,
          child: new SingleChildScrollView({
            scrollDirection: Axis.horizontal,
            child: new Row({
              children: [
                ...Array.from({length: 10}).map((v, i) => {
                  return new ColoredBox({
                    color: i % 2 === 0 ? Colors.orange : Colors.cyan,
                    child: new Container({
                      width: 50,
                      height: 50,
                      child: new Text('' + i, {
                        style: new TextStyle({
                          fontSize: kSize14,
                          color: Colors.black,
                        }),
                      }),
                      alignment: Alignment.center,
                    }),
                  })
                }),
              ],
            }),
          }),
        }),
      ],
    })
  }
}

export class MyHeaderDelegate extends SliverPersistentHeaderDelegate {
  build(
    context: BuildContext,
    shrinkOffset: number,
    overlapsContent: boolean
  ): Widget {
    const p = shrinkOffset / (this.maxExtent - this.minExtent)
    const end = (this.maxExtent - this.minExtent) / this.minExtent
    const start = 0
    const t = start - end * p
    return new Stack({
      children: [
        new Container({
          child: new FractionalTranslation({
            child: new RefreshTopWidget(),
            translation: new Offset(0, t),
          }),
        }),

        new Opacity({
          child: new Container({
            color: Colors.blue,
            child: new Text('Title2', {
              style: new TextStyle({color: Colors.white, fontSize: kSize16}),
            }),
            alignment: Alignment.center,
            height: 50,
          }),
          opacity: p,
        }),

        new Container({
          height: 180,
          alignment: Alignment.bottomCenter,
          child: new Container({
            height: 50,
            color: Colors.blue,
            alignment: Alignment.bottomLeft,
            child: new TabBar({
              indicator: new UnderlineDecoration({
                borderSide: new BorderSide({
                  width: 5,
                  color: Colors.white,
                }),
                insets: EdgeInsets.only({
                  left: 10,
                  right: 10,
                }),
              }),
              isScrollable: true,
              tabs: [
                new Tab({text: 'Tab1'}),
                new Tab({text: 'Tab2'}),
                new Tab({text: 'Tab3'}),
              ],
            }),
          }),
        }),
      ],
    })
  }

  get maxExtent(): number {
    return 150
  }

  get minExtent(): number {
    return 100
  }

  get vsync(): TickerProvider {
    return null
  }

  shouldRebuild(oldDelegate: SliverPersistentHeaderDelegate): boolean {
    return false
  }
}
