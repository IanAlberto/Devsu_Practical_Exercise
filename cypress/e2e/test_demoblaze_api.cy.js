///<reference types='Cypress' />

/*Note: This Type of testing is here because it's the folder that cypress recognize to test*/

context("Integration tests", () => {
    it("create the user", () => {
      // create the request
      cy.request("Post", "https://api.demoblaze.com/signup", {
        "username": "Ian Linarez",
        "password": "1234567890"
      }).then((response) => {
          // validate the status code
          expect(response.status).to.eq(200)
      })
    })

    it("create the user that was already created", () => {
      // create the request
      cy.request("Post", "https://api.demoblaze.com/signup", 
      {
        "username": "Ian Linarez",
        "password": "1234567890"
      }).then((response) => {
          // validate the status code
          expect(response.status).to.eq(200)
          // Validate the message obtained from the body
          expect(response.body.errorMessage).contains("This user already exist.")
      })
    })

    it("Login successful", () => {
      // create the request
      cy.request("Post", "https://api.demoblaze.com/login", 
      {
        "username": "Ian Linarez",
        "password": "1234567890"
      }).then((response) => {
          // validate the status code 
          expect(response.status).to.eq(200)
          // Validate the body obtained from the response
          expect(response.body).contains("Auth_token")
      })
    })

    it("Login with no valid credentials", () => {
      // create the request
      cy.request("Post", "https://api.demoblaze.com/login", 
      {
        "username": "Ian Linarez",
        "password": "12345"
      }).then((response) => {
          // validate the status code 
          expect(response.status).to.eq(200)
          // Validate the message obtained from the body
          expect(response.body.errorMessage).contains("Wrong password.")
      })
    })

  })