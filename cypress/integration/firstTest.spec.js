
// Identify cypress methods

describe("First suite",() =>{
   // it("first test",()=>{
   //     cy.visit('https://rec2-all.accor.com/france/index.fr.shtml')

   it("check choose date in field",()=>{
      cy.visit('https://rec2-all.accor.com/france/index.fr.shtml')
      cy.xpath("//button[@id='onetrust-accept-btn-handler']").then( acceptCookies =>{
         if( cy.wrap(acceptCookies).should('be.visible')){
            cy.wrap(acceptCookies).click();
         }
      })
      cy.xpath("//input[@name='search.dateIn']").click();
      cy.xpath("//*[@class='ui-datepicker-calendar']").contains('26').click()
      cy.xpath("//input[@name='search.dateIn']").should('have.value','26/05/2022')

      //  //    cy.xpath("//*[@class='burgerMenu__icon']")
   })

   it("check click with list",()=>{
      cy.visit('https://rec2-all.accor.com/france/index.fr.shtml')
      cy.xpath("//button[@id='onetrust-accept-btn-handler']").then( acceptCookies =>{
         if( cy.wrap(acceptCookies).should('be.visible')){
            cy.wrap(acceptCookies).click();
         }
      })
      cy.xpath("//*[@class='burgerMenu__icon']").click()
      cy.xpath("//*[contains(@class,'link-navigation__menu__link') and not(contains(@data-href,'my-bookings'))]")
         .then( menuLV1 =>{
            cy.wrap(menuLV1).first().trigger('mouseover').click()
            cy.wrap(menuLV1).eq(2).trigger('mouseover')
      })
   })

   it("check click with list2",()=>{
      cy.visit('https://rec2-all.accor.com/france/index.fr.shtml')
      cy.xpath("//button[@id='onetrust-accept-btn-handler']").then( acceptCookies =>{
         if( cy.wrap(acceptCookies).should('be.visible')){
            cy.wrap(acceptCookies).click();
         }
      })
      cy.xpath("//*[@class='burgerMenu__icon']").click()
      cy.xpath("//*[contains(@class,'link-navigation__menu__link') and not(contains(@data-href,'my-bookings'))]")
         .then( menuLV1 =>{
            cy.wrap(menuLV1).first().trigger('mouseover').click()
      })
   })

   it("check click with list 3",()=>{
      cy.visit('https://rec2-all.accor.com/france/index.fr.shtml')
      cy.xpath("//button[@id='onetrust-accept-btn-handler']").then( acceptCookies =>{
         if( cy.wrap(acceptCookies).should('be.visible')){
            cy.wrap(acceptCookies).click();
         }
      })
      cy.xpath("//*[@class='burgerMenu__icon']").click()
      cy.xpath("//*[contains(@class,'link-navigation__menu__link') and not(contains(@data-href,'my-bookings'))]")
         .then( menuLV1 =>{
            cy.wrap(menuLV1).first().trigger('mouseover').click()
            cy.wrap(menuLV1).eq(2).trigger('mouseover')
      })
   })
})