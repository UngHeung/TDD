const clickDigitButtons = (digits = []) => {
    digits.forEach((digit) => {
        cy.get(".digit").contains(digit).click();
    });
};

const checkDisplayValue = (value) => {
    cy.get("#total").should("have.text", value);
};

describe("계산기 앱 테스트", () => {
    beforeEach("페이지 방문", () => {
        cy.visit("../../index.html");
    });

    it("디스플레이에 기본적으로 숫자 0이 표시된다.", () => {
        cy.get("#total").should("have.text", 0);
    });

    it("숫자 버튼을 클릭하면 숫자가 화면에 표시된다.", () => {
        clickDigitButtons([1]);
        checkDisplayValue(1);
    });

    it("2개의 숫자 버튼 클릭시 두개의 숫자가 화면에 표시된다.", () => {
        clickDigitButtons([1, 2]);
        checkDisplayValue(12);
    });

    it("3개의 숫자 버튼 클릭시 두개의 숫자가 화면에 표시된다.", () => {
        clickDigitButtons([1, 2, 3]);
        checkDisplayValue(123);
    });

    it("0이 맨 앞에 오는 경우 표시하지 않는다.", () => {
        clickDigitButtons([0, 2, 3]);
        checkDisplayValue(23);
    });
});
