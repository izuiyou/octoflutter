import {State, StatefulWidget} from './framework'

export abstract class TickerProviderStateMixin<
  T extends StatefulWidget
> extends State<T> {
  constructor() {
    super()
  }
}
