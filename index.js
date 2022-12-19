const init =()=>{
    const openBtn = document.getElementById('open-menu-btn');
    const closeBtn = document.getElementById('close-menu-btn');
    const menuContainer = document.getElementById('menu-container');



    openBtn.addEventListener('click',()=>{
        menuContainer.style.display = 'flex';
        openBtn.style.display= 'none';
    })

    closeBtn.addEventListener('click',()=>{
        menuContainer.style.display = 'none';
        openBtn.style.display= 'block';
    })


    console.log('lets go')
}
init();