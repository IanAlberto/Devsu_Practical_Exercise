
class checkout_Page{

    checkout_Span(){
        return cy.xpath('//span[@class="title"]')
    }

    first_Name_Input(){
        return cy.get('[data-test="firstName"]')
    }

    last_Name_Input(){
        return cy.get('[data-test="lastName"]')
    }

    zip_Code_Input(){
        return cy.get('[data-test="postalCode"]')
    }

    continue_Button(){
        return cy.get('[data-test="continue"]')
    }
}

export default checkout_Page;