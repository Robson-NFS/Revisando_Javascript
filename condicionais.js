console.log(`Condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 21;
const estaAcompanhado = true;
const temPassagemComprada = true;
console.log("Destinos Possíveis: ");
console.log(listaDeDestinos);

const passagem = listaDeDestinos.splice(2, 1);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade")
//     listaDeDestinos.splice(1, 1);
// } else if (estaAcompanhada) {
//     console.log("Pode comprar, pois, está acompanhado")
//     listaDeDestinos.splice(1, 1);
// } else {
//     console.log("Não pode comprar , poís, o comprador é menor de idade");
// }

if (idadeComprador >= 18 || estaAcompanhado) {
    console.log("Compra Realizada")
    console.log(passagem);
} else {
    console.log("Não pode comprar , poís, o comprador é menor de idade");
}

console.log("Embarque: \n")
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem!");
} else {
    console.log("Você não pode embarcar");
}