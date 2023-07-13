describe("계산기 앱 테스트", () => {
    beforeEach("페이지 방문", () => {
        cy.visit("../../index.html");
    });

    it("디스플레이에 기본적으로 숫자 0이 표시된다.", () => {
        cy.get("#total").should("have.text", 0);
    });

    it("숫자 버튼을 클릭하면 숫자가 화면에 표시된다.", () => {
        cy.get(".digit").contains(1).click();
        cy.get("#total").should("have.text", 1);
    });

    it("2개의 숫자 버튼 클릭시 두개의 숫자가 화면에 표시된다.", () => {
        cy.get(".digit").contains(1).click();
        cy.get(".digit").contains(2).click();
        cy.get("#total").should("have.text", 12);
    });

    it("3개의 숫자 버튼 클릭시 두개의 숫자가 화면에 표시된다.", () => {
        cy.get(".digit").contains(1).click();
        cy.get(".digit").contains(2).click();
        cy.get(".digit").contains(3).click();
        cy.get("#total").should("have.text", 123);
    });
});
