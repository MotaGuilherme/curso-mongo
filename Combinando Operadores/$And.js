// O operador "$and:" é uma condição de busca de mais de um tipo de dado, porém o mongo já intepreta
// ele implicitamente não sendo necessário passa-lo na query, pois traz o mesmo resultado, como no exemplo abaixo
// as duas querys trazem o mesmo resultado .


// query com "$and:"
db.pokedex.find(
    { $and: [
            {types: "Flying"},
            {legendary: true}
    ]},
    {_id: 0, name: 1, types: 1})

// query sem "$and:"

db.pokedex.find(
    {
        types: "Flying",
        legendary: true
    },
    {_id: 0, name: 1, types: 1})