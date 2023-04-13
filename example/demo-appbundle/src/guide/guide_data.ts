import {Lang} from '../lang'

export class GuideItem {
  title: string
  contents: Array<string>
  expend = false

  constructor(title: string, contents: Array<string>) {
    this.title = title
    this.contents = contents
  }
}

export function guide_data(): Array<GuideItem> {
  return [
    new GuideItem(Lang.instance.res().section_start, [
      Lang.instance.res().section_start_1,
      Lang.instance.res().section_start_2,
    ]),
    new GuideItem(Lang.instance.res().section_integration, [
      Lang.instance.res().section_integration_1,
      Lang.instance.res().section_integration_2,
    ]),
    new GuideItem(Lang.instance.res().section_basic, [
      Lang.instance.res().section_basic_1,
      Lang.instance.res().section_basic_2,
    ]),
    new GuideItem(Lang.instance.res().section_advanced, [
      Lang.instance.res().section_advanced_1,
      Lang.instance.res().section_advanced_2,
      Lang.instance.res().section_advanced_3,
    ]),
    new GuideItem(Lang.instance.res().section_debug, [
      Lang.instance.res().section_debug_1,
      Lang.instance.res().section_debug_2,
      Lang.instance.res().section_debug_3,
    ]),
    new GuideItem(Lang.instance.res().section_practice, [
      Lang.instance.res().section_practice_1,
      Lang.instance.res().section_practice_2,
      Lang.instance.res().section_practice_3,
      Lang.instance.res().section_practice_4,
      Lang.instance.res().section_practice_5,
      Lang.instance.res().section_practice_6,
      Lang.instance.res().section_practice_7,
      Lang.instance.res().section_practice_8,
    ]),
  ]
}
