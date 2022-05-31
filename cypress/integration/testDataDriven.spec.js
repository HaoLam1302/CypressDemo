import { navigationComponent } from "../support/page_objects/navigateComponent"
import { searchEngine, SearchEngineComponent } from "../support/page_objects/searchEngine"

describe("First test with page object", function(){
    before(function(){
       //access fixture data
      cy.fixture('example').then(function(signInData){
        this.signInData = signInData
     })  
    })
    beforeEach("Open accor website",()=>{
        cy.openAccorHomePage()
        cy.acceptCookies()
        
    })
    it('first test', function(){
        searchEngine.fillDestination(this.signInData.destination)
    })
 })