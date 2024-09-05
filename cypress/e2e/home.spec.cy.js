import MainPage from '../page/MainPage'

describe('main 화면 테스트', () => {
  const mainPage = new MainPage('/main/musinsa/recommend')
  const element = mainPage.getElement()
  const text = mainPage.getText()
  const testData = mainPage.getTestData()
  const baseUrl = mainPage.getBaseUrl()

  describe('비로그인', () => {
    context('바텀 시트 확인', () => {
      beforeEach(() => {
        cy.visit(baseUrl)
      })

      it('바텀시트 렌더링 확인', () => {
        element.바텀시트().should('exist')
      })
    })
  })
})
