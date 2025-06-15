/*Parte Do Danilo Super Bonitão👊😎🤏*/
/*Inicio do calculo dos triangulos😎*/
let xTriangulo = document.querySelector("#xTriangulo");
let yTriangulo = document.querySelector("#yTriangulo");
let zTriangulo = document.querySelector("#zTriangulo");
let btCalcularTriangulo = document.querySelector("#btCalcularTriangulo");
let resultadoTriangulo = document.querySelector("#resultadoTriangulo");
let imgTriangulo = document.querySelector("#imgTriangulo");
/*
function calcularTipoDeTriangulo(){
    let x = Number(xTriangulo.value);
    let y = Number(yTriangulo.value);
    let z = Number(zTriangulo.value);
    
    if(x>= (y+z)|| y>= (x+z) || z>= (y+x)){// Verifica se não é um triângulo
        resultadoTriangulo.textContent = "Não é um triangulo";
        imgTriangulo.src = "img/teste.png";
        return; //retorna imediatamente
    }if (x === y && y === z){// Verifica se não é um triângulo Equilátero
        resultadoTriangulo.textContent = "Equilátero";
        imgTriangulo.src = "img/trianguloEquilatero.jpeg";
    }if ((x === y && y != z || x != z) || (x === z && z!= y || x != y)){// Verifica se não é um triângulo Isósceles
        resultadoTriangulo.textContent = "Isósceles";
        imgTriangulo.src = "img/trianguloIsoceles.png";
    }if ( x != y && z != y && x != z){// Verifica se não é um triângulo Escaleno
        resultadoTriangulo.textContent = "Escaleno";
        imgTriangulo.src = "img/trianguloEscaleno.png";
    }
    
}*/

btCalcularTriangulo.onclick = function(){
    calcularTipoDeTriangulo();
}
/*final do calculo dos triangulos😎*/

/*Inicio do calculo pra lanches😎*/
let quantCachorroQuente = document.querySelector("#quantCachorroQuente");
let quantBauru = document.querySelector("#quantBauru");
let quantMistoQuente = document.querySelector("#quantMistoQuente");
let quantHamburguer = document.querySelector("#quantHamburguer");
let quantCheeseburguer = document.querySelector("#quantCheeseburguer");
let quantRefrigerante = document.querySelector("#quantRefrigerante");
let valorCachorroQuente = document.querySelector("#valorCachorroQuente");
let valorBauru = document.querySelector("#valorBauru");
let valorMistoQuente = document.querySelector("#valorMistoQuente");
let valorHamburguer = document.querySelector("#valorHamburguer");
let valorCheeseburguer = document.querySelector("#valorCheeseburguer");
let valorRefrigerante = document.querySelector("#valorRefrigerante");
let btCalcularLanches = document.querySelector("#btCalcularLanches");
let totalDeLanche = document.querySelector("#totalDeLanche");

function calcularLanches(){
    /*na primeira parte esta sendo criado as variavei já com o valor total de cada lanche*/
    let cachorroQuente = Number(quantCachorroQuente.value) * 11;
    let bauru = Number(quantBauru.value) * 8.50;
    let mistoQuente = Number(quantMistoQuente.value) * 8;
    let hamburguer = Number(quantHamburguer.value) * 9;
    let cheeseburguer = Number(quantCheeseburguer.value) * 10;
    let refrigerante = Number(quantRefrigerante.value) * 4.50;
    /*aqui é checado se o valor é maior que 0, para que n fique valores negativos*/
    if(cachorroQuente >= 0){
        valorCachorroQuente.textContent = "R$ " + cachorroQuente.toFixed(2);
    }else{
        valorCachorroQuente.textContent = "R$ " + 0;
    }
    if(bauru >= 0){
        valorBauru.textContent = "R$ " + bauru.toFixed(2);
    }else{
        valorBauru.textContent = "R$ " + 0;
    }
    if(mistoQuente >= 0){
        valorMistoQuente.textContent = "R$ " + mistoQuente.toFixed(2);
    }else{
        valorMistoQuente.textContent = "R$ " + 0;
    }
    if(hamburguer >= 0){
        valorHamburguer.textContent = "R$ " + hamburguer.toFixed(2);
    }else{
        valorHamburguer.textContent = "R$ " + 0;
    }
    if(cheeseburguer >= 0){
        valorCheeseburguer.textContent = "R$ " + cheeseburguer.toFixed(2);
    }else{
        valorCheeseburguer.textContent = "R$ " + 0;
    }
    if(refrigerante >= 0){
        valorRefrigerante.textContent = "R$ " + refrigerante.toFixed(2);
    }else{
        valorRefrigerante.textContent = "R$ " + 0;
    }
    /*soma total de todos os lanches */
    totalDeLanche.textContent = "R$ " + (cachorroQuente + bauru + mistoQuente + hamburguer + cheeseburguer + refrigerante).toFixed(2);
}

btCalcularLanches.onclick = function(){
    calcularLanches();
}
/*final do calculo pra lanches😎*/

/*Inicio do Sistema de pagamentos😎*/
let nivel1 = document.querySelector("#nivel1");
let nivel2 = document.querySelector("#nivel2");
let nivel3 = document.querySelector("#nivel3");
let qtdHoras = document.querySelector("#qtdHoras");
let resultadoPagamento = document.querySelector("#resultadoPagamento");
let btCalcularPagamentos = document.querySelector("#btCalcularPagamentos");

function calcularPagamentos(){
    const nivelSelecionado = document.querySelector('input[name="nivel"]:checked');

    if (nivelSelecionado) {
        const valorPorHora = nivelSelecionado.value;
        if (valorPorHora === "1") {
            resultadoPagamento.textContent = "R$" + (12 * Number(qtdHoras.value));
        } else if (valorPorHora === "2") {
            resultadoPagamento.textContent = "R$" + (17 * Number(qtdHoras.value));
        } else if (valorPorHora === "3") {
            resultadoPagamento.textContent = "R$" + (25 * Number(qtdHoras.value));
        }
    } else {
        resultadoPagamento.textContent = "Selecione um nível.";
    }
}

btCalcularPagamentos.onclick = function(){
    calcularPagamentos();
}
/*final do Sistema de pagamentos😎*/
/* Fim da Parte Do Danilo Super Bonitão👊😎🤏*/

/*Incio Imc*/
let peso = document.querySelector("#peso");
let altura = document.querySelector("#altura");
let btCalcularImc = document.querySelector("#BtIMC");
let resultadoImc = document.querySelector("#resultado_IMC");

function calcularImc() {
    let pesoValue = parseFloat(peso.value);
    let alturaValue = parseFloat(altura.value);

    if (isNaN(pesoValue) || isNaN(alturaValue) || pesoValue <= 0 || alturaValue <= 0) {
        resultadoImc.textContent = "Preencha os campos corretamente!";
        return;
    }

    let imc = pesoValue / (alturaValue * alturaValue);
    imc = imc.toFixed(2);
    let classificacao = "";

    
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } 
    else if (imc < 25) {
        classificacao = "Peso normal";
    } 
    else if (imc < 30) {
        classificacao = "Sobrepeso";
    } 
    else if (imc < 35) {
        classificacao = "Obesidade grau 1";
    } 
    else if (imc < 40) {
        classificacao = "Obesidade grau 2";
    } 
    else {
        classificacao = "Obesidade grau 3";
    }

    resultadoImc.textContent = "Seu IMC é: " + imc + " - " + classificacao;
}

btCalcularImc.onclick = function() {
    calcularImc();
};

/*Fim dos IMC*/
/*Começo Impostos*/
let anoCarro = document.querySelector("#anoCarro");
let valorCarro = document.querySelector("#valorCarro");
let btCalcularImposto = document.querySelector("#btCalcularImposto");
let resultadoImposto = document.querySelector("#resultadoImposto");

function calcularImposto() {
    let ano = parseInt(anoCarro.value);
    let valor = parseFloat(valorCarro.value);

    if (isNaN(ano) || isNaN(valor) || ano <= 0 || valor <= 0) {
        resultadoImposto.textContent = "Preencha os campos corretamente!";
        return;
    }

    let taxa = 0;
    if (ano < 1990) {
        taxa = 0.01;
    } else {
        taxa = 0.015;
    }

    let imposto = valor * taxa;
    resultadoImposto.textContent = "Imposto a ser pago: R$ " + imposto.toFixed(2);
}

btCalcularImposto.onclick = function() {
    calcularImposto();
};
/*fim Impostos*/

let cargo = document.querySelector("#cargo");
let salarioAntigo = document.querySelector("#salarioAntigo");
let btCalcularSalario = document.querySelector("#btCalcularSalario");
let resultadoSalario = document.querySelector("#resultadoSalario");

function calcularSalario() {
    let salario = parseFloat(salarioAntigo.value);
    let aumento = 0;

    if (isNaN(salario) || salario <= 0) {
        resultadoSalario.textContent = "Preencha o salário corretamente!";
        return;
    }

    switch (cargo.value) {
        case "gerente":
            aumento = 0.10;
            break;
        case "engenheiro":
            aumento = 0.20;
            break;
        case "tecnico":
            aumento = 0.30;
            break;
        default:
            aumento = 0.40;
    }

    let novoSalario = salario * (1 + aumento);
    let diferenca = novoSalario - salario;

    resultadoSalario.textContent = 
        "Salário antigo: R$ " + salario.toFixed(2) +
        " | Novo salário: R$ " + novoSalario.toFixed(2) +
        " | Diferença: R$ " + diferenca.toFixed(2);
}

btCalcularSalario.onclick = function() {
    calcularSalario();
};