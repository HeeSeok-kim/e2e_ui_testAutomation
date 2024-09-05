import BasePage from './BasePage'
import commonElement from '../data/common/commonElement'
import mainElement from '../data/main/mainElement'
import commonTestData from '../data/common/commonTestData'
import mainTestData from '../data/main/mainTestData'
import mainText from '../data/main/mainText'

class MainPage extends BasePage {
  constructor() {
    super('/')
    this._elements = { ...commonElement, ...mainElement }
    this._testData = { ...commonTestData, ...mainTestData }
    this._text = { ...mainText, ...mainText }
  }
  getElement() {
    return this._elements
  }
}

export default MainPage
