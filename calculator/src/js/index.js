function App() {
    const digits = document.querySelector(".digits");
    const total = document.querySelector("#total");

    const handleDigitClick = (e) => {
        if (!e.target.classList.contains("digit")) {
            return;
        }

        const currentTotal = total.innerText;
        const newDigit = e.target.innerText;

        total.innerText = currentTotal === "0" ? newDigit : currentTotal + newDigit;
    };

    digits.addEventListener("click", handleDigitClick);
}

App();
