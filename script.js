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
        imgTriangulo.src = "img/.jpeg";
    }if ( x != y && z != y && x != z){// Verifica se não é um triângulo Escaleno
        resultadoTriangulo.textContent = "Escaleno";
        imgTriangulo.src = "img/.jpeg";
    }
    
}

btCalcularTriangulo.onclick = function(){
    calcularTipoDeTriangulo();
}