const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!'
const template = `
    Olá 
    ${nome}!`
console.log(concatenacao, template)
//`Abre uma sequencia de String Entre linhas,
// que só é finalizado quando uma outra `é posta
// Com as ${} é possível realizar uma interpretação
// dentro da string, como demonstrado acima.

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
