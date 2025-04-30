//1 - Criar função que calcule a soma de 3 numeros exiba no console e a media.

function soma(n1, n2, n3){
    const soma = n1 + n2 + n3;
    return soma;
}

function media(n1, n2, n3){
    //const soma = n1 + n2 + n3 /3;
    const adicao = soma(n1,n2,n3);
    const media = adicao / 3;
    
    return "A soma:" + adicao + " e a media é:" + media;
}
//console.log('A soma é: ' + soma(10,30,50))
//console.log('A media é: ' + media(10,30,50))

console.log(media(10, 30, 50));