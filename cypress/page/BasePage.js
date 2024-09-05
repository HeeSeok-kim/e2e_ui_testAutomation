/**
 * BasePage 클래스는 모든 페이지 객체의 공통 기능을 정의합니다.
 */
class BasePage {
  /**
   * BasePage 생성자
   * @param {string} baseUrl - 페이지의 기본 URL
   */
  constructor(baseUrl) {
    this._baseUrl = baseUrl
    this._elements = {} // 페이지 요소를 저장할 객체
    this._testData = {}
    this._text = {}
  }

  /**
   * 페이지에서 사용되는 Element를 리턴한다.
   * */
  getElement() {}

  /**
   * 페이지에서 사용할 테스트 데이터 객체를 리턴한다.
   * */
  getTestData() {
    return this._testData
  }

  /**
   * 페이지에서 사용되는 텍스트들 객체를 리턴한다.
   * */
  getText() {
    return this._text
  }

  /**
   * 페이지의 URL을 리턴하는 함수
   * @return {string} - 페이지의 URL을 반환한다.
   * */
  getBaseUrl() {
    return this._baseUrl
  }
}

export default BasePage
