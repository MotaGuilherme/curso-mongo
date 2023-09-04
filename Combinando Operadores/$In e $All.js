// O operador "$all:" traz apenas os dados que foram passados dentro do array.
// Exemplo: $all: ["Flying", "Bug"], irá trazer apenas pokemons que sejam do tipo "Flying" e "Bug"

db.pokedex.find({types: { $all: ["Flying", "Bug"]}}, {_id: 0, name: 1, types: 1})


// O operador "$in:" tras todos os dados que satisfaçam as condições do array.
// Exemplo: $in: ["Flying", "Bug"], irá trazer todos os pokemons que satisfaçam as condições "Flying" e "Bug"
// e outros pokemon que tenham esse tipo, por exempo um "Flying" e "rock" ou "Bug" e "Poison".

db.pokedex.find({types: { $in: ["Flying", "Bug"]}}, {_id: 0, name: 1, types: 1})