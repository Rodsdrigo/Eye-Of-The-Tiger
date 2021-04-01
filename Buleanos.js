let isAtivo = false 
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isativo = 1
console.log(!!isAtivo)
// ! significs negação

console.log(!!3)
console.log(!! ' ')
console. log(!!-1)
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))


console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!(''|| null || 0 || '123')) //||=Ou

let nome = ''
console.log(nome || 'Desconhecido')
//Se o nome = falce o resultado vai para o 'Desconheido
//Se o nome = verdadeiro o resultado é o própio nome