export class SystemNavigator {
  static pop = (animated?: boolean): Promise<void> => {
    return new Promise((resolve, reject) => {
      N.octoSystemPop(
        () => {
          resolve()
        },
        (e) => {
          reject(e)
        },
        animated
      )
    })
  }
}
