const init = () => {
  const menuItems = document.getElementsByClassName('mobile-item');
  const openBtn = document.getElementById('open-menu-btn');
  const closeBtn = document.getElementById('close-menu-btn');
  const menuContainer = document.getElementById('menu-container');

  openBtn.addEventListener('click', () => {
    menuContainer.style.display = 'flex';
    openBtn.style.display = 'none';
  });

  for (let i = 0; i < menuItems.length; i += 1) {
    menuItems[i].addEventListener('click', () => {
      menuContainer.style.display = 'none';
      openBtn.style.display = 'block';
    });
  }

  closeBtn.addEventListener('click', () => {
    menuContainer.style.display = 'none';
    openBtn.style.display = 'block';
  });
};

init();