///<reference types='Cypress' />

import login_Page from '../page/login_page'
import inventory_Page from '../page/inventory_page'
import cart_Page from '../page/cart_page'
import checkout_Page from '../page/checkout_page'
import checkout_Overview_Page from '../page/checkout_overview_page'
import checkout_Complete_Page from '../page/chekout_complete_page'

describe('End 2 End TC', () => {
    let data
    beforeEach(() => {  
        cy.fixture('user_data.json').then((jsonData) => {
            data = jsonData['user_1'];
        }); 
        cy.visit('https://www.saucedemo.com') 
    })

    it('Buy two products', () => {
        const login_page = new login_Page()
        const inventory_page = new inventory_Page()
        const cart_page = new cart_Page()
        const checkout_page = new checkout_Page()
        const checkout_overview_page = new checkout_Overview_Page()
        const checkout_complete_page = new checkout_Complete_Page()

        // The user sign in
        login_page.swag_Labs_Div().should("be.visible")
        
        login_page.username_Input().type(data['username'])
        login_page.password_Input().type(data['password'])

        login_page.login_Button().click()
        
        // Add two product to the cart
        inventory_page.products_Span().should("be.visible")

        inventory_page.add_To_Cart_Button().eq(0).click()
        inventory_page.add_To_Cart_Button().eq(1).click()

        inventory_page.shopping_Cart_Badge_Span().should('have.text',2)
        
        // Go the cart
        inventory_page.shopping_Cart_icon_A().click()
        cart_page.your_Cart_Span().should('be.visible')

        // Complete the checkout process
        cart_page.checkout_Button().click()

        checkout_page.checkout_Span().should('be.visible')

        checkout_page.first_Name_Input().type(data['firstName'])
        checkout_page.last_Name_Input().type(data['lastName'])
        checkout_page.zip_Code_Input().type(data['zipCode'])

        checkout_page.continue_Button().click()

        checkout_overview_page.checkout_Overview_Span().should('be.visible')
        checkout_overview_page.payment_Information_Div().should('be.visible')
        checkout_overview_page.price_Total_Div().should('be.visible')

        checkout_overview_page.finish_Button().click()

        // Validate if the "thank you" message is displayed
        checkout_complete_page.complete_Header_H2().should('be.visible')
        cy.screenshot()
    })
})