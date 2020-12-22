function waitForBrowser() { 
    cy.window().then(win => {
       return new Cypress.Promise(resolve => win['requestIdleCallback'](resolve));
    });
 }

describe("Pages scenarios", () => {
    it("Home page", () => {
        cy.visit("http://localhost:3000/")
        waitForBrowser();
        cy.get("h1").contains("Publications")
    }) 
    
    it("Should render Home page and navigate to Login Page", () => {
        cy.visit("http://localhost:3000/")
        waitForBrowser();
        cy.get("header [data-test-id='link-Login']").click()
        cy.contains("h1", "Login")
    })

    it("Login page", () => {
        cy.visit("http://localhost:3000/login/")
        waitForBrowser();
        cy.contains("h1", "Login")
        cy.get("#username").type("n1")
        cy.get("#Password").type("123")
        cy.get("button").click()
        cy.get("header [data-test-id='link-Profile']")

    })
}) 