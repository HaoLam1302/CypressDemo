import { navigationComponent } from "../support/page_objects/navigateComponent"

describe("First test with page object",() =>{
    beforeEach("Open accor website",()=>{
        cy.openAccorHomePage()
        cy.acceptCookies()
        
    })

    it('first test', ()=>{
        navigationComponent.openBurgerMenu()
        navigationComponent.openFirstLinkInBurgerMenu();
    })
 })