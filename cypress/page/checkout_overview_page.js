class checkout_Overview_Page{

    checkout_Overview_Span(){
        return cy.xpath('//span[text()="Checkout: Overview"]')
    }

    payment_Information_Div(){
        return cy.get('[data-test="payment-info-label"]')
    }

    price_Total_Div(){
        return cy.get('[data-test="total-info-label"]')
    }

    finish_Button(){
        return cy.get('[data-test="finish"]')
    }
}

export default checkout_Overview_Page;