const imghover = document.querySelector('.img-camisa img')
const abrirMenu = document.querySelector('.abrir-mobile');
const menu = document.querySelector('.menu')

imghover.addEventListener('mousemove', ()=>{
    const price = document.querySelector('.fundo')
    price.style.display = 'block'
})
imghover.addEventListener('mouseleave', ()=>{
    price.style.display = 'none'
})
abrirMenu.addEventListener('click', ()=>{
    menu.classList.toggle('abrirH')
})
menu.addEventListener('click', ()=>{
    menu.classList.remove('abrirH')
})