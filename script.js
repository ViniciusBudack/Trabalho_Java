/*Parte Do Danilo Super Bonitão👊😎🤏*/
/*Inicio do calculo dos triangulos😎*/
let xTriangulo = document.querySelector("#xTriangulo");
let yTriangulo = document.querySelector("#yTriangulo");
let zTriangulo = document.querySelector("#zTriangulo");
let btCalcularTriangulo = document.querySelector("#btCalcularTriangulo");
let resultadoTriangulo = document.querySelector("#resultadoTriangulo");
let imgTriangulo = document.querySelector("#imgTriangulo");

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
        imgTriangulo.src = "img/.jpeg";
    }
    
}

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
/*final do Sistema de pagamentos😎*/

/* Fim da Parte Do Danilo Super Bonitão👊😎🤏*/