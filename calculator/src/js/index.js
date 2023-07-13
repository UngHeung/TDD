function App() {
    document.querySelector(".digits").addEventListener("click", (e) => {
        if (e.target.classList.contains("digit")) {
            document.querySelector("#total").innerText = e.target.innerText;
        }
    });
}

App();
