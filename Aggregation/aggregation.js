// O Aggregation funcuina como o relacionamento do SQL, nele voce pode passar parametros de busca para seus dados.
// Dentro do "$lookup", voce passa suas condições de buscas como se fossem relacionamentos do SQL, no "from",
// voce busca de qual documento sao os dados, o "local_field", é o local dentro do documento onde voce quer fazer a
// a comparação, normalmente de um array. O "foreignKey" é como voce vai comparar os documentos, basicamente igual
// a chave estrangeira do SQL. E o "as" é o local dentro do objeto que voce quer buscar, como no exemplo abaixo
// o "pokemon1_arr" que está dentro do array. O "$project" é a pojeção dos dados que voce deseja, nele também podem
// ser passadas condições. O "$arrayElemAt" é a operação que busca dentro do array o dado que voce quer, ele recebe
// dois parametros: o campo do array e a posição que ele está ou que voce deseja. O "$cond" é uma condição que voce deseja
// passar na sua busca, dentro dele voce pode passar um if para filtrar seus dados.

db.combats.aggregate([
    {
        $lookup: {
            from: "pokemon",
            localField: "First_pokemon",
            foreignField: "_id",
            as: "pokemon1_arr"
        }
    },
    {
        $lookup: {
            from: "pokemon",
            localField: "Second_pokemon",
            foreignField: "_id",
            as: "pokemon2_arr"
        }
    },
    {
        $project: {
            _id: 0,
            Winner: 1,
            pokemon1: {
                $arrayElemAt: ["$pokemon1_arr", 0]
            },
            pokemon2: {
                $arrayElemAt: ["$pokemon2_arr", 0]
            }
        }
    },
    {
        $project: {
            first_pokemon: "$pokemon1.name",
            second_pokemon: "$pokemon2.name",
            winner: {
                $cond: {
                    if: { $eq: ["$Winner", "$pokemon1._id"] },
                    then: "$pokemon1.name",
                    else: "$pokemon2.name"
                }
            }
        }
    }
]).pretty()
