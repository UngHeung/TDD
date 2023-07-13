describe("계산기 앱 테스트", () => {
    it("계산기 페이지 접속", () => {
        cy.visit("../../index.html");
    });

    it("디스플레이에 기본적으로 숫자 0이 표시된다.", () => {
        cy.visit("../../index.html");
        cy.get("#total").should("have.text", 0);
    });
});
