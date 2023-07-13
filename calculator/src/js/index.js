function App() {
    const digits = document.querySelector(".digits");
    const total = document.querySelector("#total");

    const handleDigitClick = (e) => {
        if (e.target.classList.contains("digit")) {
            total.innerText = e.target.innerText;
        }
    };

    digits.addEventListener("click", handleDigitClick);
}

App();
