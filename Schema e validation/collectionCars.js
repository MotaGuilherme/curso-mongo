// Query de validação, o $JsonSchema serve para inserir validações no schema do mongo,
// porém não é muito utilizado, pois as validações normalmente acontecem no Back end da aplicação.


db.createCollection("cars", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["model", "year"],
            properties: {
                model: {
                    bsonType: "string",
                    description: "O Modelo é necessário e deve ser uma string"
                },
                madeBy: {
                    bsonType: "string",
                    minLength: 3
                },
                year: {
                    bsonType: "int",
                    minimum: 1980,
                    maximum: 2025
                }
            }
        }
    }
})