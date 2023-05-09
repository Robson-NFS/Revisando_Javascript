console.log(`Trabalhando Com Listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`) //Adicionando um item na lista
console.log("Destinos Possíveis: ");

console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1);

console.log(listaDeDestinos);
console.log(listaDeDestinos[2], listaDeDestinos[0]); 