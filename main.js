/*console.log('Holaaa')

const numeros= [1,2,3,4,5,6,7,8,9];
for(let i =0; i <numeros.length; i++){
    if (numeros[i] % 2 != 0) {
       continue;
    }
 console.log(numeros[i])
}*/

/*1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo */


/*const cadena = 'Hola Mundo'
function funcion1() {
   for (const element of cadena) {
      console.log(cadena.length)
   }
}
funcion1()


const function1Bis =(cadena = '')=>{
   if (!cadena) {
      console.warn('Por favor ingrese una cadena de texto')
      
   }else{
      console.info(`La cadena '${cadena}' tiene ${cadena.length} caracteres`)
   }
}

function1Bis('Hola Mundo')

/*const cadena = 'Hola Mundo'
function funcion2(corte){
   for (const element of cadena) {
      if (cadena.length === corte) {
         break
      } console.log(cadena)
   }
}

funcion2(4)*/

/*const cadena = 'Hola Mundo'
function primera (){
   console.log(cadena.length)
}
primera()
function segunda(corte){
   for (let i = 0; i < cadena.length; i++) {
      if (i === corte) {
         break
      }
      console.log(cadena[i])
   }
}
segunda(4)

/*
 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
 */

/*const cadena2= 'hola que tal'
function tercera (){
  let expresion = /[a-z]+/gi;
  const found = cadena2.match(expresion)
  console.log(found)

}
tercera()

/*4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo */

/*function cuarta(veces) {
   console.log(cadena.repeat(veces))
   
}
cuarta(3)*/


/*5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
 */

const function5 = (cadena = '')=>{
   if (!cadena) {
      console.warn('Por favor ingrese una cadena de texto')
   } else {
      stringSeparated = cadena.split('') // separamos la cadena, poner parenetesis y comilas
      stringReverse = stringSeparated.reverse() // invertimos todos los caracteres
      stringJoin = stringReverse.join('') // unimos los caracteres
      console.log(stringJoin) // mostramos por consola el string invertido, poner parenetesis y comilas
   }
}

function5('Hola Mundo')

//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const function6 = (cadena = '', palabra = '')=>{
   if (!cadena || !palabra) {
      console.warn('Por favor ingrese una cadena de texto o la palabra al buscar')
   } else {
   let cantPalabras = /mundo/gi;
   console.log(cadena.match(cantPalabras).length)
}
}
function6("hola mundo adios mundo", "mundo")


//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const function7 = (cadena= "")=>{
   if (!cadena) {
      console.warn('Por favor ingrese una cadena de texto')
   } else {
      stringSeparated = cadena.split('') // separamos la cadena, poner parenetesis y comilas
      stringReverse = stringSeparated.reverse() // invertimos todos los caracteres
      stringJoin = stringReverse.join('') // unimos los caracteres
   }if (cadena.toLowerCase() === stringJoin.toLowerCase()) {
       console.info(`La cadena '${cadena}' es una palidromo`)
   } else {
      console.info(`La cadena '${cadena}' NO es una palidromo`)
   }
}

function7('Salas')


//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
 
const function8 = (cadena= '', patron= '')=>{
   if (!cadena) {
      console.warn('Por favor ingrese una cadena')
   }
   if(!patron){
   console.warn('Por favor ingrese el ptaron a eliminar')
   }
   console.info(cadena.replace(new RegExp(patron, 'gi'), ''))
}

function8("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")

/*9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.*/

const numberAleatorio = (min, max)=>{
   return Math.random() * (max - min) + min;
}

console.log(numberAleatorio(501, 600))

const capicua=(number = '')=>{
   if (!number) {
      console.log('Por favor ingrese un número')
   } else {
      separado = number.split('')
      revertido = separado.reverse()
      junto = revertido.join('')
      if (number === junto) {
         console.info('El número ingresado es capicua')
      } else {
         console.info('El número ingresado NO es capicua')
      }
   }
}
capicua('2002')

/*11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.*/


const factorialNumero =(number)=>{
   let total = 1
   for(let i = 1; i <=number; i++){
      total = total * i
  }
  console.info(total)
  }

factorialNumero(5)

/*12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.*/
const primo =(number)=>{
condicion = number
}
primo(7)

//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const parImpar = (numero)=>{
   condicionParidad = numero %2 === 0 ? 'Par': 'Impar'
   console.info(`El numero ${numero} es ${condicionParidad}`)
}
parImpar(7)
//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. */
const conversionTemperaturas = (grados=undefined, escala=undefined)=>{
  if (escala === 'C') {
   console.info(`${grados}C = ${Math.round(grados *(9/5)+ 32)}F`)
  }
  if(escala === 'F'){
   console.info(`${grados}F = ${Math.round(grados - 32)*(5/9)}C`)
  }
}
conversionTemperaturas(3,'C')
conversionTemperaturas(32,'F')

/*15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.*/
const bases=(numero, base)=>{
   if(base === 2){
      
   }
}

/*16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).*/
/*18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

La expresión regular que uso para el email en este video /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i
24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
 */

const $padre = document.getElementsByClassName("padre")
const paises = ['Argentina', 'Bolivia', 'EEUU', 'UK', 'Irlanda']

for (const countries of paises) {
   let li = document.createElement("li");
   li.innerHTML = countries
   $padre[0].appendChild(li);
}
const datos ={name:'Roberto', dni : 4369799}
let contenedor = document.createElement('div')
contenedor.innerHTML = `<h3> Nombre ${datos.name}</h3>
<h4>${datos.dni}</h4>
<img src="img/animal_300_400.jpg" alt="animal" width= 250px height = 250px>
<figcaption><strong>Gato</figcaption>
<br>`

document.body.appendChild(contenedor)

// apunta a las tarjetas 
/*const $cards = document.querySelector('.card'),
$template = document.getElementById('template-card').content, //me interesa el contenido
$fragmento = document.createDocumentFragment(), //almacena dinamicamente la infomación
cardContent= [{
   title:'Arquitectura',
   img:"https:/placeimg.com/200/200/art"
},
{ title:'Animals',
   img:"img/paisaje_680_374.jpg"
},
{
   title:'Cualquiera',
   img:"img/comida_600_338.jpg"
}]

cardContent.forEach(element => {
   $template.querySelector('img').setAttribute('src', element.img);
   $template.querySelector('img').setAttribute('alt', element.title);
   $template.querySelector('figcaption');textContent = element.title

   let $clone = document.importNode($template, true)
   $fragmento.appendChild($clone)
});

$cards.appendChild($fragmento)*/

let comidas = ['El Pozole','Cochinita Pibil','Chiles en Nogada','Barbacoa','Carnitas','Pescado a la Veracruzana','Tlayudas']

for (const c of comidas) {
   const $principal = document.createElement('div') // el elemento contenedor se debe crear después de iniciar el ciclo for ya que por cada vuelta que de va a crear un div y ahí va a asignar los elementos del array.
   $principal.innerHTML = c
   document.body.appendChild($principal)
}

let meses =['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'] // array con los meses 

const $listaMeses = document.createElement('ul') // en la ul se van a insertar los elementos que se van a encontrar dentro de un fragmento
$fragmentoMeses = document.createDocumentFragment(); // creamos el fragmento contenedor 

for (const m of meses) { //
   const $li = document.createElement('li') // creamos una lista para que contenga a cada mes 
   $li.textContent = m // usamos textContent porque queremos el texto de cada li y no el elemento html en sí
   $fragmentoMeses.appendChild($li) // agragamos al fragmento lo contenido en las li
}
$listaMeses.appendChild($fragmentoMeses) // agregamos a la ul el fragmento
document.body.appendChild($listaMeses)// finalmente agregamos la ul al body 

const $cards = document.querySelector('.card'),
$template = document.getElementById('template-card').content, // no olvidarse de poner content
$fragment = document.createDocumentFragment(),
cardsContent = [{
   title: 'Animal 1',
   img: "img/animal.jpg",
   width : '300px',
},{
   title: 'Comida 1',
   img: "img/comida_1200_630.jpg",
   width : '300px',
},{
   title: 'Paisaje 1',
   img: "img/paisaje_1280_800.jpg",
   width : '300px',
},{
   title: 'Persona 1',
   img: "img/persona_860_573.jpg",
   width : '300px',
},{
   title: 'Persona 2 ',
   img: "img/personas_630_352.jpg",
   width : '300px',
},{
   title: 'Animal 2',
   img: "img/animal_650_586.jpg",
   width : '300px',
}]

cardsContent.forEach(c =>{
   $template.querySelector('img').setAttribute('src',c.img);
   $template.querySelector('img').setAttribute('alt',c.title);
   $template.querySelector('img').setAttribute('width',c.width);
   $template.querySelector('figcaption').textContent = c.title;

   let $clone = document.importNode($template,true);
   $fragment.appendChild($clone);
});
   $cards.appendChild($fragment)

   