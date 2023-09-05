// O operador "$currentDate:" inserere a data, se o campo updatedAt estiver com padrão "true", o banco
// automaticamente seta para o tipo Date, caso queira no formato "timestamp", é necessário passar o tipo.



// Padrão Date
db.pokedex.updateMany({types: "Bug"},
    {
        $set: {name: ""},
        $currentDate: {
            updatedAt: true
        }
    })

// Tipo timestamp
db.pokedex.updateMany({types: "Bug"},
    {
        $set: {name: ""},
        $currentDate: {
            updatedAt: {type: "timestamp"}
        }
    })