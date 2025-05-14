function clicar() {
    let num1 = Number(window.document.getElementById("inicio").value)
    let num2 = Number(window.document.getElementById("final").value)
    let num3 = Number(window.document.getElementById("passo").value)
    let conta = window.document.getElementById("resp")
    let c = 0


    if (num3 <= 0 || num1 == "" || num2 == "") {
        window.alert(`[ERRO] Por favor, insira os valores corretamente.`)
        num3 = 1
    }

    if (num1 < num2) {
        // ordem crescente
        for (let c = num1; c <= num2; c += num3) {
            conta.innerHTML += ` ${c} ,`
            conta.style.padding = "20px";
        }
    } else {
        // ordem decrescente
        for (let c = num1; c >= num2; c -= num3) {
            conta.innerHTML += ` ${c} ,`
            conta.style.padding = "20px";
        }
    }
    conta.innerHTML += `🏁`
}