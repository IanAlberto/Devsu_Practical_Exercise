
class cart_Page{

    your_Cart_Span(){
        return cy.get('[data-test="title"]')
    }

    checkout_Button(){
        return cy.get('[data-test="checkout"]')
    }

   
}

export default cart_Page;