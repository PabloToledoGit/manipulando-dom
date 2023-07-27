const lista = document.querySelector('[data-atribute]');
const button = document.querySelector('.botao')
const button2 = document.querySelector('.botao2')


button.addEventListener('click', (elemento) =>{

    lista.setAttribute('data-lista', 'mostrar')
})

button2.addEventListener('click', () =>{

    lista.setAttribute('data-lista', 'esconder')
})


