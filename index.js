const worksArray = [
  {
    name: 'Vagos studios web',
    description: 'This a website and portfolio.',
    featured_image: './assets/work_1.png',
    technologies: ['Angular.js', 'MongoDB', 'Express.js', 'Node.js'],
    link_demo: 'https://vagosstudios.com',
    link_source: 'https://github.com/NelsonAraujo93/VagosWeb2',
    image_alt: 'A guy using a laptop and some desk staff',
  },
  {
    name: 'Vagos studios web',
    description: 'This a website and portfolio.',
    featured_image: './assets/work_2.png',
    technologies: ['Angular.js', 'MongoDB', 'Express.js', 'Node.js'],
    link_demo: 'https://vagosstudios.com',
    link_source: 'https://github.com/NelsonAraujo93/VagosWeb2',
    image_alt: 'A guy using a laptop and some desk staff',
  },
  {
    name: 'Vagos studios web',
    description: 'This a website and portfolio.',
    featured_image: './assets/work_3.png',
    technologies: ['Angular.js', 'MongoDB', 'Express.js', 'Node.js'],
    link_demo: 'https://vagosstudios.com',
    link_source: 'https://github.com/NelsonAraujo93/VagosWeb2',
    image_alt: 'A guy using a laptop and some desk staff',
  },
  {
    name: 'Vagos studios web',
    description: 'This a website and portfolio.',
    featured_image: './assets/work_4.png',
    technologies: ['Angular.js', 'MongoDB', 'Express.js', 'Node.js'],
    link_demo: 'https://vagosstudios.com',
    link_source: 'https://github.com/NelsonAraujo93/VagosWeb2',
    image_alt: 'A guy using a laptop and some desk staff',
  },
  {
    name: 'Vagos studios web',
    description: 'This a website and portfolio.',
    featured_image: './assets/work_5.png',
    technologies: ['Angular.js', 'MongoDB', 'Express.js', 'Node.js'],
    link_demo: 'https://vagosstudios.com',
    link_source: 'https://github.com/NelsonAraujo93/VagosWeb2',
    image_alt: 'A guy using a laptop and some desk staff',
  },
  {
    name: 'Vagos studios web',
    description: 'This a website and portfolio.',
    featured_image: './assets/work_6.png',
    technologies: ['Angular.js', 'MongoDB', 'Express.js', 'Node.js'],
    link_demo: 'https://vagosstudios.com',
    link_source: 'https://github.com/NelsonAraujo93/VagosWeb2',
    image_alt: 'A guy using a laptop and some desk staff',
  },
];

const dynamicWorksItems = (worksArray, parent, className) => {
  worksArray.map((item) => {
    const itemDom = document.createElement('article');
    const imageContainer = document.createElement('div');
    const detailContainer = document.createElement('div');
    const title = document.createElement('h3');
    const techs = document.createElement('ul');
    const button = document.createElement('button');

    if (className !== '') {
      detailContainer.classList.add('bot-top', 'detail-container');
      itemDom.className = `${className} work-card`;
    } else {
      detailContainer.className = 'detail-container';
      itemDom.className = 'work-card';
    }
    title.classList.add('card-title', 'poppins-font-ligth');
    title.innerHTML = item.name;
    imageContainer.classList.add('image-container', 'full-width');
    imageContainer.innerHTML = `<img class="full-width" src=" ${item.featured_image}" alt="${item.image_alt}">`;

    techs.classList.add('card-categories-container', 'full-width');
    for (let i = 0; i < item.technologies.length; i += 1) {
      const techsItem = document.createElement('li');
      techsItem.classList.add('card-category', 'poppins-font-ligth');
      techsItem.innerHTML = item.technologies[i];
      techs.appendChild(techsItem);
    }

    button.className = 'card-btn';
    button.innerHTML = '<span class="btn-label poppins-font-medium">See this project</span><div class="btn-arrow-icon"></div>';

    detailContainer.appendChild(title);
    detailContainer.appendChild(techs);
    detailContainer.appendChild(button);

    itemDom.appendChild(imageContainer);
    itemDom.appendChild(detailContainer);

    return parent.appendChild(itemDom);
  });
};

const dynamicWorksItemsDesktop = (parent1, parent2, parent3, worksArray) => {
  const array1 = worksArray.splice(0, 1);
  const array2 = worksArray.splice(0, 1);
  const array3 = worksArray.splice(0, 1);
  const array4 = worksArray.splice(0, 3);

  dynamicWorksItems(array1, parent1, 'main');
  dynamicWorksItems(array2, parent2, 'little');
  dynamicWorksItems(array3, parent2, 'medium');
  dynamicWorksItems(array4, parent3, 'little');
};

const init = () => {
  const menuItems = document.getElementsByClassName('mobile-item');
  const openBtn = document.getElementById('open-menu-btn');
  const closeBtn = document.getElementById('close-menu-btn');
  const menuContainer = document.getElementById('menu-container');
  const worksMobile = document.getElementById('works-section-mobile');
  const worksDesk = document.getElementById('works-d-top');
  const worksDeskLeft = document.getElementById('works-d-left');
  const worksDeskRigth = document.getElementById('works-d-rigth');

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

  dynamicWorksItems(worksArray, worksMobile);
  dynamicWorksItemsDesktop(worksDesk, worksDeskLeft, worksDeskRigth, worksArray);
};

//  abstraer funcion dentro de la que crea items para poder mandarle la subclase
//  solucion para el blank

init();