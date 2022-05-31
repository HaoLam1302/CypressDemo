// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('openAccorHomePage',()=>{
    cy.visit('https://' + Cypress.env('host') +'-all.accor.com/france/index.fr.shtml')
})

Cypress.Commands.add('acceptCookies',()=>{
    cy.xpath("//button[@id='onetrust-accept-btn-handler']").then( acceptCookies =>{
        if(cy.isElementExist(acceptCookies)){
            cy.wrap(acceptCookies).click()
        }
    })
})

Cypress.Commands.add('isElementExist',(selector) => {
    return cy.get('body')
         .then($body => {
             return cy.wrap($body.find(selector).length > 0) 
             //Cy wrap is needed so the function is chainable
         })
})

Cypress.Commands.add('getElement', xpath => {
    return cy.xpath(xpath)
    .then( menuLV1 =>{
       cy.wrap(menuLV1);
    })
})