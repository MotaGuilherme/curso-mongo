// O opedador "upsert" serve para atualizar os documentos ou inserir um novo documento caso ele não exista.

db.pokedex.updateOne(
    {name: "Pokemon"},
    {$set: {attack: 111} },
    {upsert: true}
);


// O operador "$setOnInsert" serve para adicionar novos campos ao documento, porém apenas no caso de inexistencia
// do documento, caso o documento exista, a query irá apenas fazer o update e ignorar o $setOnInsert.

db.pokedex.updateOne(
    {name: "Pokemon Novo"},
    {
        $set: {attack: 111},
        $setOnInsert: {
            defense: 40,
            hp: 10,
            speed: 50
        }
    },
    {upsert: true}
);