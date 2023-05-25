describe("Buy a black t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    cy.visit("https://www.saucedemo.com/"); // (1)
    cy.get(".login-box > form > div > input#user-name").type("standard_user"); // (2)
    cy.get(".login-box > form > div > input#password").type("secret_sauce"); // (2)
    cy.get("input[type='submit']").click(); // (2)
    cy.get("a[id=\"item_1_title_link\"]").click(); // 3
    cy.get("button[id=\"add-to-cart-sauce-labs-bolt-t-shirt\"]").click();// 4
    cy.get("a[class=\"shopping_cart_link\"]").click(); // 5
    cy.get("button[id=\"checkout\"]").click();// 6
    cy.get("input[id=\"first-name\"]").type("Cypress");// 7
    cy.get("input[id=\"last-name\"]").type("Workshop");// 8
    cy.get("input[id=\"postal-code\"]").type("00000");// 9
    cy.get("input[id=\"continue\"]").click();// 10
    cy.get("button[id=\"finish\"]").click();// 11
    cy.get("#contents_wrapper > .checkout_complete_container > h2").should(
        "have.text",
        "Thank you for your order!",
    ); // (12)
  });
});
