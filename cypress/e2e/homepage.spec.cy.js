describe('Home Page', () => {
 
 
  beforeEach('opens the homepage', () => {
    cy.visit('localhost:2000')
  })

  it("expresses the title of the homepage", () => {
    cy.get("h1").should("contain.text", "Pollen Count from React")
  })



})