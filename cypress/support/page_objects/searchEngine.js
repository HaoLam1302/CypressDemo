const input_destination = "//input[@id='search-destination']"

export class SearchEngineComponent{
    
    fillDestination(destination){
       cy.getElement(input_destination).type(destination)
       cy.getElement(input_destination).clear()
    }
}
export const searchEngine = new SearchEngineComponent()