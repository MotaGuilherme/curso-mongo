// O Capped funciona como uma fila de dados a serem inseridos. O size é o tamanho máximo dos documentos
// a serem inseridos e o "max" é a quantidade máxima de campos que podem ser inseridos, quando o tamanho
// máximo de "max" for atingido, o mongo apaga o campo mais antigo e retorna os ultimos campos inseridos.

db.createCollection("logs", {
    capped: true,
    size: 2048,
    max: 5
})