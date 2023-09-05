// O operador "$each" serve para inseris vários dados dentro de um array com outro array, caso passasse
// apenas o "$push", seria criado outro array dentro do "types" do documento, o "$each" apenas insere no array existente

db.pokedex.updateOne(
    {_id: 1},
    {
        $push: {
            types: {
                $each: ['Hotdog', 'Hamburguer', 'Sorvete']
            }
        }
    }
)