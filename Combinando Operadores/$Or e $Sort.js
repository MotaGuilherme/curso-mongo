// O operador "$or" significa uma condição de busca, o documento é analisado e trás os campos que
// satisfaçam a condição, indepedente se um dos campos não satifaça a condição. Exemplo: um pokemon
// com hp: 80 e defense: 40, será retornado, pois a condição de hp: 80 foi satisfeita

// O método "$sort" serve para retornas os dados ordenados nas condições impostas. A posição das condições
// interferem no resultado


db.pokedex.find(
    {
        $or: [
            {
                defense: {
                    $gte: 80,
                },
                hp: {
                    $gte: 80,
                }
            },
            {
                attack: {
                    $gte: 80,
                },
                speed: {
                    $gte: 80,
                }
            }
        ]
    }
).sort(
    {
        hp: 1,
        attack: 1,
        defense: 1
    }
)