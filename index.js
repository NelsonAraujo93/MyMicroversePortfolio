const init = () => {
  const menuItems = document.getElementsByClassName("menu-items");
  const openBtn = document.getElementById('open-menu-btn');
  const closeBtn = document.getElementById('close-menu-btn');
  const menuContainer = document.getElementById('menu-container');

  openBtn.addEventListener('click', () => {
    menuContainer.style.display = 'flex';
    openBtn.style.display = 'none';
  });

  menuItems.addEventListener('click', () => {
    menuContainer.style.display = 'none';
    openBtn.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    menuContainer.style.display = 'none';
    openBtn.style.display = 'block';
  });
};

init();