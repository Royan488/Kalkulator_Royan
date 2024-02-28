let ui = document.querySelector(".userEntry");
let finaCalc = document.querySelector(".finalCalc");

document.querySelectorAll("button").forEach(button => {
    button.addEventListener('click', function() {
        if (button.innerText === "=") {
            let result = eval(ui.textContent.replace("%","/100").replace("MOD","%"));
            finaCalc.textContent = result;
        } else if (button.innerText === "AC") {
            ui.textContent = "";
            finaCalc.textContent = "";
            hitung = [];
        } else if (button.innerText === "DEL") {
            hitung = hitung.slice(0, -1);
            ui.textContent = ui.textContent.slice(0,-1);
        } else {
            ui.textContent += button.innerText;
            hitung += button.innerText;
        }
    });
});