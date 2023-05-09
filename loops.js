console.log(`Trabalhando com Loopings`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 21;
const estaAcompanhado = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos Possíveis: \n ");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhado;


let contador = 0;
let destinoExiste = false;

while (contador < 3) {

    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existe");
        destinoExiste = true;
        break;
    }
    contador++;
}

console.log("O Destino está disponível? ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa viagem \n");
} else {
    console.log("Desculpa, não foi possível executar sua solicitação! \n");
}

for (let i = 0; i < 3; i++) {
    if (listaDeDestinos[i] == destino) {
        console.log("Destino existe");
        destinoExiste = true;
        break;
    }
    i++;
}