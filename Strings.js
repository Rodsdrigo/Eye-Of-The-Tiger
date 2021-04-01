const escola = "Cod4r"

console.log(escola.charAt(4)) 
// Inicia em 0

console.log(escola.charAt(5)) 
// Se ultrapassar o número de caractéries ele retorna o ultimo

console.log(escola.charCodeAt(3))


console.log(escola.indexOf('4')) 
// Retorna a posição em que o valor se encontra na string

console.log(escola.substring(1))
 // Imprime o valr da String Do indice citado até o fim

console.log(escola.substring(0, 3)) 
//Imprime o valor da String do indice citado ate o outro indice citado

console.log('Escola '.concat(escola).concat("!")) 
console.log('Escola ' + (escola) + ("!"))
//Concatenar Strings

console.log(escola.replace(4, 'e'))
//Substituir digitos

console.log('Ana, Maria, Pedro'.split(',')) //Divide a String



