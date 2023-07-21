
/*

O operador spread (...) em JavaScript é usado para "espalhar" os elementos de uma estrutura iterável,
como um array, em um novo contexto. 

Ele permite que você descompacte os elementos individuais de uma estrutura iterável e os utilize separadamente em outro contexto, 
como em uma chamada de função ou em uma construção de array.

Então ele irá "quebrar" um conjunto de elementos e devolver elemento por elemento.

Por exemplo: um conjunto de array quando é lido uma coisa só: ["maçã", "banana", "laranja"]
ele pega e separa elemento por elemento para poder interagir: maça banana laranja.


Algumas das principais utilidades do operador spread:

Cópias/Concatenação de arrays.
Cópia/Combinação de objetos literais.
Passagem de argumentos de função.


Veja abaixo os exemplos.

*/






/*---------------------!!!!!SPREAD COM ARRAYS!!!!!-------------------------------------- */


// /*ARRAY - Exemplo 1A para copiar/concatenar o ARRAY */

// let n1=[10,20,30]
// let n2=[11,22,33,44,55]
// let n3=[...n1, ...n2]

// console.log("n1: " + n1)
// console.log("n2: " + n2)
// console.log("n3: " + n3)


/*----------------------------------------------------------- */


// /*ARRAY - Exemplo 1B para copiar/concatenar o ARRAY */

// const frutas = ["maçã", "banana", "laranja"];
// const alimentos = ["pão", ...frutas, "queijo"];

// console.log(...alimentos);


// /*EXPLICAÇÃO ABAIXO DA DIFERENÇA DE USAR E NÃO USAR SPREAD NESTE CASO.*/
// /*
// COM O SPREAD EM FRUTAS: const alimentos = ["pão", ...frutas, "queijo"].
// Ele copiara os valores do array frutas de forma espalhada: maça banana laranja
// e incrementará dentro do array alimentos,
// e retornara no console.log: 
// [ 'pão', 'maçã', 'banana', 'laranja', 'queijo' ]
 
// SEM O SPREAD EM FRUTAS: const alimentos = ["pão",frutas, "queijo"].
// agora se eu tirasse o operador (...) do array frutas, dentro do array alimentos,
// O código entenderia que estou colocando um array dentro de um array, então receberia o array inteiro de frutas,
// logo o retorno no console.log(alimentos) o resultado seria:
// [ 'pão', [ 'maçã', 'banana', 'laranja' ], 'queijo' ]

// COM O SPREAD EM ALIMENTOS NO CONSOLE.LOG: console.log(...alimentos).
// Como dito anteriormente, ele retornara todos os valores espalhados, separados.
// então ao invés disso mostrar um array: [ 'pão', 'maçã', 'banana', 'laranja', 'queijo' ]
// o resultado será assim: pão maçã banana laranja queijo


//OBS: O retorno do spread podem ser considerados valores individuais, 
//que podem ser de diferentes tipos, como strings, numbers, objetos, 
//ou qualquer outro tipo válido em JavaScript.

// */

/*------------------------------------------------------------------------------------------------------------------------- */







/*---------------------!!!!!SPREAD COM OBJETOS!!!!!-------------------------------------- */

// /*OBJETOS - Exemplo 2A para copia/Combinação de OBJETOS LITERAIS */


// const obj1 = { x: 1, y: 2 };
// const obj2 = { z: 3 };
// const combinedObj = { ...obj1, ...obj2 };


// Nesse caso, estamos combinando as propriedades de obj1 e obj2 para criar um novo objeto combinedObj


/*----------------------------------------------------------- */


// /*OBJETOS - Exemplo 2B para copia/Combinação de OBJETOS LITERAIS */

// const jogador1={nome:"Bruno", energia:100, vidas:3 }
// const jogador2={nome:"Bruce", energia:100, vidas:5 }
// const jogador3={...jogador1,...jogador2}

// console.log(jogador3)
// /* NESTE CASO: vai imprimir os mesmo dados de jogador2, por que isso aconteceu?
// por que eu tenho exatamente as mesmas propriedades em jogador1 em jogador2, então já que os
// dados são os mesmos, ele vai sobrescrever e utilizar os valores do ultimo jogador utilizado,
// ou seja, jogador2.
// */

// /*Más se eu tiver propriedades em comum e diferentes?
//  Veja abaixo, no proximo exemplo: */


/*----------------------------------------------------------- */


// /*OBJETOS - Exemplo 2C para copia/combinação de OBJETOS LITERAIS  */



const jogador01={nome:"Bruno", energia:100, vidas:3, magia: 150 }
const jogador02={nome:"Bruce", energia:100, vidas:5, velocidade: 80 }
const jogador03={...jogador01,...jogador02}

console.log(jogador03)
// /*NESTE CASO: 
// No entanto, é importante observar que,
// ao combinar os objetos usando o operador spread, propriedades com o mesmo nome são sobrescritas.
// Isso significa que, se houver propriedades com o mesmo nome em jogador01 e jogador02, 
// o valor da última propriedade sobrescreverá o valor da propriedade correspondente do objeto anterior.

// Ou sejá, além das propriedades em comum que jogador03 receberá dos objetos acima jogador01 e jogador02,
// ele vai receber as propriedades incomuns também, mas seguindo sempre os ultimos valores das propriedades.
// */




/*------------------------------------------------------------------------------------------------------------------------- */






/*---------------------!!!!!SPREAD COM FUNÇÕES!!!!!-------------------------------------- */


/*FUNÇÕES - Exemplo 3 para FUNÇÕES - Passagem de argumentos*/

// /*O operador spread pode ser usado para passar elementos de um array como argumentos para uma função. 
// Isso é útil quando você deseja chamar uma função com base em um array de valores.
// Por exemplo:*/

// const soma = (v1,v2,v3)=>{
//     return v1+v2+v3    
// }

// let valores= [1,5,4]

// console.log(soma(...valores))   

// /*EXPLICAÇÃO ABAIXO DA DIFERENÇA DE USAR E NÃO USAR SPREAD NESTE CASO. */

// /*SEM SPREAD: se tivessemos apenas aplicando a variavel valores SEM SPREAD, iria dar erro, porque:
// por que o código iria entender que v1 receberá o array inteiro, 
// os parâmetros v2 e v3 não receberão nenhum valor específico e serão undefined por padrão.
// consequentemente o resultado virá: "1,5,4undefinedundefined".

// por exemplo:

// const soma = (v1,v2,v3)=>{                <-- Receberá: ([1, 5, 4],undefined,undefined)
//     return v1+v2+v3                       <-- Lógo o código retorna a concatenação dos valores.
// }

// let valores= [1,5,4]

// console.log(soma(valores))                <-- Sem Spread.

// RESULTADO-->                              1,5,4undefinedundefined


// ENTÃO:
// COM SPREAD: aplicando no array valores, os valores se "espalham" e as variaveis recebem esses valores.
// Os valores individuais 1, 5 e 4 são atribuídos respectivamente aos parâmetros v1, v2 e v3.

// O operador spread (...) expande os elementos do array valores como argumentos separados,
// e eles são passados individualmente para a função soma. Dessa forma, 
// é como se você estivesse chamando a função com os valores diretamente, como em console.log(soma(1, 5, 4)).

// const soma = (v1,v2,v3)=>{                <-- Receberá: (v1=1,v2=5,v3=4)
//     return v1+v2+v3                       <-- Lógo o código entende: 1 + 5 + 4
// }

// let valores= [1,5,4]

// console.log(soma(...valores))             <-- Com Spread.

// RESULTADO-->                              10

// */


/*------------------------------------------------------------------------------------------------------------------------- */








/*---------------------!!!!!SPREAD COM HTML COLLECTION!!!!!-------------------------------------- */


// /*HTML COLLECTION - Exemplo 4 para HTML COLLECTION */

// const objs1=document.getElementsByTagName("div")            // <-- Recebe uma coleção de elementos html, que é diferente de um array apartir da div no contida no HTML.

// const objs2=[...document.getElementsByTagName("div")]       // <-- Ao utilizar o operador spread "espalha" os elementos do HTMLCollection e recebe no novo array.
// // Obs: Pra usar o spread aqui, tem que usar notação de array [ ]


// /*NOTE QUE:
// Ao tentar manipular no Javascript:

// HTML Collection:
// objs1
// No HTML Collection, oferece funções e propriedades mais simples e específicas para o HTMLCollection.

// Array:
// objs2
// Com o Array, oferece uma quantidade maior de métodos e funções porque são as mesmas funções que se trabalha com arrays.
// como abaixo:
// */

// objs2.forEach(element => {               // como o objs2 se trata de um array, eu consigo retornar os elementos que estão na minha coleção.
//     element.innerHTML="curso"            // E então, substituir o conteudo de cada elemento div, para "curso."
// })    



// /*RESULTADO NA PAGINA HTML:
// Passará de, para:

// Bruno                             --> curso
// Aprendendo Sobre Operador Spread  --> curso
// Curso Javascript                  --> curso

// */




// /* OBSERVANDO NO PROMPT DE COMANDO DO HTML: */

// console.log(objs1)      
// /*Irá retornar para mim um HTML Collection, resultado: HTMLCollection(3) [div, div, div],
// Porem dessa maneira não me permite manipular os elementos com meotodos arrays avançados.*/



// console.log(objs2)      
// /*Irá me retornar um ARRAY de elementos html, resultado: (3) [div, div, div],
// Já com o array, eu tenho a possibilidade de manipular com funções e metodos do array avançados e variados.*/



// /*OBS: O nodo não reconhece o document, por que o document é uma implementação do DOM,
// para ver o resulado, vc tem que abrir o html, e o console.log no inspecionar*/




// /* CONCLUSÕES: */

// /* Embora um HTMLCollection e um array possam parecer semelhantes em alguns aspectos,
// eles são estruturas de dados diferentes com propriedades e comportamentos distintos.

// Por exemplo: 
// HTML COLLECTION:
// Em quanto um HTML COLLECTION, só pode conter e recebe elementos html.
// O HTMLCollection é geralmente obtido por meio de métodos específicos do DOM,
// como getElementsByTagName ou getElementsByClassName,
// e está limitado a conter apenas elementos HTML encontrados no documento.

// ARRAY:
// Em ARRAY, por se tratar de uma estrutura de dados flexivel que podem conter elementos de diferentes tipos,
// eu posso adicionar não apenas elementos HTML, mas também outros tipos de elementos, como valores, strings, números, objetos
// ou qualquer outro tipo válido em JavaScript.
// */
