//Listas
const valores = [7.7, 8.9, 6.3, 9.2]
//Criar Array
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
//Adcioonar valores no Array 
console.log(valores)

valores[0] = 100
console.log(valores)
console.log(valores.length)
// Tamanho do Array

valores.push({id: 3}, false, null, 'teste')
// Inserir dados 

console.log(valores)

console.log(valores.pop())
//deleta o ultimo valor do Array

delete valores[0]
console.log(valores)

console.log(typeof valores)