//sintaxe da função
function nome(/*argumentos, parametros */)
{//argumentos, parametros: sao entradas de daos para a função utilizar
    //bloco de codigo, logica
}

//executar, chamando pelo nome e passa os paramentros se houver, se não fica vazio '()'
nome()

//1 - somar dois numeros
function somaDoisNumeros(n1, n2){
    //let n1 = 50;
    //let n2 = 70;

    let resultado = n1 + n2;
    console.log(resultado)

    return resultado;
    
    //o codigo é interrompido apos o return, se houver algo abaixo, não sera executado.
    const teste = 'Oi!'
}

//console.log(somaDoisNumeros())

//os parametros/argumentos
somaDoisNumeros (20, 50);
somaDoisNumeros(100, 400);