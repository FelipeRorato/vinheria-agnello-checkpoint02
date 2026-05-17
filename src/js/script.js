var totalVinhos = 0;
 
var nome1, nome2, nome3, nome4, nome5;
var tipo1, tipo2, tipo3, tipo4, tipo5;
var safra1, safra2, safra3, safra4, safra5;
var estoque1, estoque2, estoque3, estoque4, estoque5;
var preco1, preco2, preco3, preco4, preco5;
 
var totalEstoqueBaixo = 0;
var nomeVinhoMaisAntigo = "";
var safraVinhoMaisAntigo = 9999;
 

function validarTexto(valor) {
    if (valor == null || valor.trim() == "") {
        return false;
    }
    return true;
}
 
function validarNumero(valor) {
    var numero = parseInt(valor);
    if (isNaN(numero) || numero < 0) {
        return false;
    }
    return true;
}
 
function estoqueBaixo(quantidade) {
    if (quantidade < 5) {
        return true;
    }
    return false;
}

function classificarVinho(anoSafra) {
    var anoAtual = 2025;
    var idade = anoAtual - anoSafra;
 
    if (idade <= 3) {
        return "Jovem";
    } else if (idade <= 10) {
        return "Amadurecido";
    } else {
        return "Antigo";
    }
}
 
function mostrarVinhoConsole(numero, nome, tipo, safra, estoque, preco) {
    var classificacao = classificarVinho(safra);
 
    console.log("--- Vinho #" + numero + " ---");
    console.log("Nome: " + nome);
    console.log("Tipo: " + tipo);
    console.log("Safra: " + safra);
    console.log("Classificacao: " + classificacao);
    console.log("Estoque: " + estoque + " unidades");
    console.log("Preco: R$ " + preco);
 
    if (estoqueBaixo(estoque)) {
        console.log("AVISO: Estoque baixo!");
    }
}
 
 
 
function iniciarSistema() {
 
    totalVinhos = 0;
    totalEstoqueBaixo = 0;
    nomeVinhoMaisAntigo = "";
    safraVinhoMaisAntigo = 9999;
    document.getElementById("relatorio").innerHTML = "";
 
    var continuar = true;
 
    while (continuar && totalVinhos < 5) {
 
        totalVinhos++;
 
        var nome = prompt("Vinho #" + totalVinhos + "\nDigite o nome do vinho:");
        while (!validarTexto(nome)) {
            alert("Nome invalido! Tente novamente.");
            nome = prompt("Vinho #" + totalVinhos + "\nDigite o nome do vinho:");
        }
 
        var tipo = prompt("Vinho #" + totalVinhos + "\nDigite o tipo (Tinto, Branco, Rose...):");
        while (!validarTexto(tipo)) {
            alert("Tipo invalido! Tente novamente.");
            tipo = prompt("Vinho #" + totalVinhos + "\nDigite o tipo (Tinto, Branco, Rose...):");
        }
 
        var safraTexto = prompt("Vinho #" + totalVinhos + "\nDigite o ano da safra:");
        while (!validarNumero(safraTexto)) {
            alert("Ano invalido! Digite apenas numeros.");
            safraTexto = prompt("Vinho #" + totalVinhos + "\nDigite o ano da safra:");
        }
        var safra = parseInt(safraTexto);
 
        var estoqueTexto = prompt("Vinho #" + totalVinhos + "\nQuantidade em estoque:");
        while (!validarNumero(estoqueTexto)) {
            alert("Quantidade invalida! Digite apenas numeros.");
            estoqueTexto = prompt("Vinho #" + totalVinhos + "\nQuantidade em estoque:");
        }
        var estoque = parseInt(estoqueTexto);
 
        var precoTexto = prompt("Vinho #" + totalVinhos + "\nPreco por garrafa (R$):");
        while (!validarNumero(precoTexto)) {
            alert("Preco invalido! Digite apenas numeros.");
            precoTexto = prompt("Vinho #" + totalVinhos + "\nPreco por garrafa (R$):");
        }
        var preco = parseInt(precoTexto);
 
        if (totalVinhos == 1) {
            nome1 = nome; tipo1 = tipo; safra1 = safra; estoque1 = estoque; preco1 = preco;
        } else if (totalVinhos == 2) {
            nome2 = nome; tipo2 = tipo; safra2 = safra; estoque2 = estoque; preco2 = preco;
        } else if (totalVinhos == 3) {
            nome3 = nome; tipo3 = tipo; safra3 = safra; estoque3 = estoque; preco3 = preco;
        } else if (totalVinhos == 4) {
            nome4 = nome; tipo4 = tipo; safra4 = safra; estoque4 = estoque; preco4 = preco;
        } else if (totalVinhos == 5) {
            nome5 = nome; tipo5 = tipo; safra5 = safra; estoque5 = estoque; preco5 = preco;
        }
 
        mostrarVinhoConsole(totalVinhos, nome, tipo, safra, estoque, preco);
 
        if (estoqueBaixo(estoque)) {
            alert("ATENCAO: O vinho '" + nome + "' esta com estoque baixo! (" + estoque + " unidades)");
            totalEstoqueBaixo++;
        }
        if (safra < safraVinhoMaisAntigo) {
            safraVinhoMaisAntigo = safra;
            nomeVinhoMaisAntigo = nome;
        }
        if (totalVinhos < 5) {
            var resposta = prompt("Deseja cadastrar outro vinho?\nDigite S para sim ou N para nao:");
            if (resposta == null || resposta.toUpperCase() != "S") {
                continuar = false;
            }
        } else {
            alert("Limite de 5 vinhos atingido!");
            continuar = false;
        }
    }
    mostrarRelatorio();
}
 
function mostrarRelatorio() {
 
    var html = "<h3>Relatorio de Cadastro</h3>";
 
    for (var i = 1; i <= totalVinhos; i++) {
 
        var nome, tipo, safra, estoque, preco;
 
        if (i == 1) {
            nome = nome1; tipo = tipo1; safra = safra1; estoque = estoque1; preco = preco1;
        } else if (i == 2) {
            nome = nome2; tipo = tipo2; safra = safra2; estoque = estoque2; preco = preco2;
        } else if (i == 3) {
            nome = nome3; tipo = tipo3; safra = safra3; estoque = estoque3; preco = preco3;
        } else if (i == 4) {
            nome = nome4; tipo = tipo4; safra = safra4; estoque = estoque4; preco = preco4;
        } else if (i == 5) {
            nome = nome5; tipo = tipo5; safra = safra5; estoque = estoque5; preco = preco5;
        }
 
        var classificacao = classificarVinho(safra);
        var classeCard = "card-vinho";
 
        if (estoqueBaixo(estoque)) {
            classeCard = "card-vinho estoque-baixo";
        }
 
        html += "<div class='" + classeCard + "'>";
        html += "<h3>" + nome + "</h3>";
        html += "<p><b>Tipo:</b> " + tipo + "</p>";
        html += "<p><b>Safra:</b> " + safra + "</p>";
        html += "<p><b>Classificacao:</b> " + classificacao + "</p>";
        html += "<p><b>Estoque:</b> " + estoque + " unidades";
 
        if (estoqueBaixo(estoque)) {
            html += "ESTOQUE BAIXO";
        }
 
        html += "</p>";
        html += "<p><b>Preco:</b> R$ " + preco + ",00</p>";
        html += "</div>";
    }
 
    html += "<div id='resumo-final'>";
    html += "<h3>Resumo Final</h3>";
    html += "<p>Total de vinhos cadastrados: <b>" + totalVinhos + "</b></p>";
    html += "<p>Vinhos com estoque baixo: <b>" + totalEstoqueBaixo + "</b></p>";
    html += "<p>Vinho com a safra mais antiga: <b>" + nomeVinhoMaisAntigo + " (" + safraVinhoMaisAntigo + ")</b></p>";
    html += "</div>";
 
    html += "<button onclick='reiniciar()'>Novo Cadastro</button>";
 
    document.getElementById("relatorio").innerHTML = html;
 
    console.log("=== RELATORIO FINAL ===");
    console.log("Total cadastrado: " + totalVinhos);
    console.log("Estoques baixos: " + totalEstoqueBaixo);
    console.log("Vinho mais antigo: " + nomeVinhoMaisAntigo + " - safra " + safraVinhoMaisAntigo);
 
    alert(
        "Cadastro finalizado!\n\n" +
        "Total de vinhos: " + totalVinhos + "\n" +
        "Estoques baixos: " + totalEstoqueBaixo + "\n" +
        "Safra mais antiga: " + nomeVinhoMaisAntigo + " (" + safraVinhoMaisAntigo + ")"
    );
}
 
 
function reiniciar() {
    document.getElementById("relatorio").innerHTML = "";
}