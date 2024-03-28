class login_Page{

    swag_Labs_Div(){
        return cy.get('.login_logo')
    }

    username_Input(){
        return cy.get('[data-test="username"]')
    }

    password_Input(){
        return cy.get('[data-test="password"]')
    }

    login_Button(){
        return cy.get('[data-test="login-button"]')
    }
}

export default login_Page;