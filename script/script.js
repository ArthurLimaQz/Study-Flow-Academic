const menuOpen = document.querySelector('.menu_open');

function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    }
    else {
        itens.style.display = 'block'
    }
};
if(window.innerWidth > 900){
    menuOpen.style.display = 'none'
    menuOpen.style.width = 0
};

// Quando a tela for redimensionada...
window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
        itens.style.display = 'none'; // Oculta o menu se for desktop
    }
    else{
        menuOpen.style.display = 'none'        
    }
});