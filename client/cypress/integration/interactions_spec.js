describe("Login Flow", () => {
  it("ensures that the user can get access to emaily by logging in with google", () => {
    cy.server().route("GET", "/api/current_user").as('getUser')
    cy.visit("");

    cy.get("li").find("a").contains("Login");
  });
});
