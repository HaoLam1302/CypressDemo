function openBurgerMenu(){
    cy.xpath("//*[@class='burgerMenu__icon']").click();
}

function openMenuLevel1ByIndex(index){
    cy.xpath("//*[contains(@class,'link-navigation__menu__link') and not(contains(@data-href,'my-bookings'))]")
           .then( menuLV1 =>{
              cy.wrap(menuLV1).eq(index).trigger('mouseover').click()
        })
}

export class NavigationComponent{
    openBurgerMenu(){
        openBurgerMenu()
    }

    openFirstLinkInBurgerMenu(){
        openMenuLevel1ByIndex(0)
    }
}

export const navigationComponent = new NavigationComponent()