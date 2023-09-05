// O operador "$addtoSet" funciona como um upsert, ele percorre o array e verifica os campos existentes
// caso exista um valor no array, ele ignora, caso não exista o valor, ele insere o novo valor.

db.pokedex.updateOne(
    {_id: 1},
    {
        $push: {
            types: {
                $each: ['Esfirra', 'Hamburguer', 'Mousse']
            }
        }
    }
)