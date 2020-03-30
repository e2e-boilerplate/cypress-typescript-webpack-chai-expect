describe("Sandbox", () => {
  before(() => {
    cy.visit("https://e2e-boilerplate.github.io/sandbox/");
  });

  it("should be on Sandbox", () => {
    cy.title().then((title) => {
      assert.equal(title, "Sandbox");
    });
    cy.get("h1")
      .invoke("text")
      .then((header) => {
        assert.equal(header, "Sandbox");
      });
  });
});
