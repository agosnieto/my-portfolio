function holaMundo(){
    alert('Hola')
}
const saludar =(nombre='Desconocid@')=>{
    alert(`Hola ${nombre}`)
}
const $eventoMultiple = document.getElementById('evento-multiple')
$eventoMultiple.addEventListener("click",holaMundo)
$eventoMultiple.addEventListener("click",(e)=>{
    alert('Hola Mundo')
    console.log(e)
    console.log(e.type)
    console.log(e.target)
    //console.log(event)
})
$eventoMultiple.addEventListener('click', ()=>{
    saludar();
    saludar('Agos')
});

const $removeEvent = document.getElementById('remove-event')

const removeDblclick=(e)=>{
    alert(`Removiendo el evento de tipo ${e.type}`)
    console.log(e)
    $removeEvent.removeEventListener('dblclick',removeDblclick)
}
$removeEvent.addEventListener('dblclick',removeDblclick)

//en el momento que se declara una funcin anonima en un veneto se está ejecutando y luego se pierde la referencia.