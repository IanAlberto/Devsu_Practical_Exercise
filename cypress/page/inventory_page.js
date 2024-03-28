
class inventory_Page{

    products_Span(){
        return cy.get('[data-test="title"]')
    }

    add_To_Cart_Button(){
        return cy.xpath('//button[contains(@id,"add-to-cart")]')
    }

    shopping_Cart_Badge_Span(){
        return cy.get('[data-test="shopping-cart-badge"]')
    }

    shopping_Cart_icon_A(){
        return cy.get('[data-test="shopping-cart-link"]')
    }
}

export default inventory_Page;