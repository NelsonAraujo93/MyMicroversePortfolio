const worksArray = [
  {
    name: 'Vagos studios web',
    description: 'This a website and portfolio.',
    featured_images: ['./assets/work_1.png', './assets/work_2.png'],
    technologies: ['Angular.js', 'MongoDB', 'Express.js', 'Node.js'],
    link_demo: 'https://vagosstudios.com',
    link_source: 'https://github.com/NelsonAraujo93/VagosWeb2',
    image_alts: ['A guy using a laptop and some desk staff', 'A guy using a laptop and some desk staff 2'],
  },
  {
    name: 'Vagos studios web 2',
    description: 'This a website and portfolio.',
    featured_images: ['./assets/work_2.png'],
    technologies: ['Angular.js', 'MongoDB', 'Express.js', 'Node.js'],
    link_demo: 'https://vagosstudios.com',
    link_source: 'https://github.com/NelsonAraujo93/VagosWeb2',
    image_alts: ['A guy using a laptop and some desk staff']
  },
  {
    name: 'Vagos studios web 3',
    description: 'This a website and portfolio.',
    featured_images: ['./assets/work_3.png'],
    technologies: ['Angular.js', 'MongoDB', 'Express.js', 'Node.js'],
    link_demo: 'https://vagosstudios.com',
    link_source: 'https://github.com/NelsonAraujo93/VagosWeb2',
    image_alts: ['A guy using a laptop and some desk staff']
  },
  {
    name: 'Vagos studios web 4',
    description: 'This a website and portfolio.',
    featured_images: ['./assets/work_4.png'],
    technologies: ['Angular.js', 'MongoDB', 'Express.js', 'Node.js'],
    link_demo: 'https://vagosstudios.com',
    link_source: 'https://github.com/NelsonAraujo93/VagosWeb2',
    image_alts: ['A guy using a laptop and some desk staff']
  },
  {
    name: 'Vagos studios web 5',
    description: 'This a website and portfolio.',
    featured_images: ['./assets/work_5.png'],
    technologies: ['Angular.js', 'MongoDB', 'Express.js', 'Node.js'],
    link_demo: 'https://vagosstudios.com',
    link_source: 'https://github.com/NelsonAraujo93/VagosWeb2',
    image_alts: ['A guy using a laptop and some desk staff']
  },
  {
    name: 'Vagos studios web 6',
    description: 'This a website and portfolio.',
    featured_images: ['./assets/work_6.png'],
    technologies: ['Angular.js', 'MongoDB', 'Express.js', 'Node.js'],
    link_demo: 'https://vagosstudios.com',
    link_source: 'https://github.com/NelsonAraujo93/VagosWeb2',
    image_alts: ['A guy using a laptop and some desk staff']
  },
];

const dynamicWorksItems = (worksArray, parent, className) => {
  worksArray.map((item) => {
    const data = item;
    const itemDom = document.createElement('article');
    const imageContainer = document.createElement('div');
    const detailContainer = document.createElement('div');
    const title = document.createElement('h3');
    const techs = document.createElement('ul');
    const button = document.createElement('button');

    if (className !== '') {
      detailContainer.classList.add('bot-top', 'detail-container');
      itemDom.className = `${className} work-card`;
      title.classList.add('card-title', 'poppins-font-semibold');
    } else {
      detailContainer.className = 'detail-container';
      itemDom.className = 'work-card';
      title.classList.add('card-title', 'poppins-font-ligth');
    }
    
    title.innerHTML = item.name;
    imageContainer.classList.add('image-container', 'full-width');
    imageContainer.innerHTML = `<img class="full-width" src=" ${item.featured_images[0]}" alt="${item.image_alts[0]}">`;

    techs.classList.add('card-categories-container', 'full-width');
    for (let i = 0; i < item.technologies.length; i += 1) {
      const techsItem = document.createElement('li');
      techsItem.classList.add('card-category', 'poppins-font-ligth');
      techsItem.innerHTML = item.technologies[i];
      techs.appendChild(techsItem);
    }

    button.className = 'card-btn';
    button.innerHTML = '<span class="btn-label poppins-font-medium">See this project</span><div class="btn-arrow-icon"></div>';
    button.addEventListener('click', (e) => {
      popUp(data);
    });

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

const popUp = (item) => {
  const popUp = document.createElement('section');
  const popUpContent = document.createElement('article');
  const popUpHeader = document.createElement('div');
  const title = document.createElement('h3');
  const techs = document.createElement('ul');
  const cancelBtn = document.createElement('button');
  const imageGallery = document.createElement('div');
  const selectedImage = document.createElement('div');
  const galleryCarousel = document.createElement('ul');
  const galleryPrevBtn = document.createElement('button');
  const galleryNextBtn = document.createElement('button');
  const description = document.createElement('p');
  const urlContainer = document.createElement('div');
  const bottomContainer = document.createElement('div');
  const navigation = document.createElement('div');
  const liveBtn = document.createElement('button');
  const repoBtn = document.createElement('button');
  const prevNavBtn = document.createElement('button');
  const nextNavBtn = document.createElement('button');


  popUp.id = 'pop-up';
  popUpContent.classList.add('pop-up-content', 'full-width');
  popUpHeader.classList.add('pop-up-header', 'full-width');

  title.classList.add('card-title', 'poppins-font-semibold', 'dark');
  title.innerHTML = item.name;

  cancelBtn.className = 'menu-btn';
  cancelBtn.innerHTML = '<img src="./assets/Union.svg" alt="Cancel icon">';
  cancelBtn.addEventListener('click', () => {
    popUp.remove();
  });

  techs.classList.add('card-categories-container', 'full-width');
  for (let i = 0; i < item.technologies.length; i += 1) {
    const techsItem = document.createElement('li');
    techsItem.classList.add('card-category', 'poppins-font-ligth', 'ligth');
    techsItem.innerHTML = item.technologies[i];
    techs.appendChild(techsItem);
  }

  imageGallery.className='image-gallery-container';
  selectedImage.className='selected-image-container';
  selectedImage.innerHTML=`<img class="full-width" src=" ${item.featured_images[0]}" alt="${item.image_alts[0]}">`;
  
  if (item.featured_images.length>1) {
    galleryCarousel.className='gallery';
    item.featured_images.map((img, i) => {
      const galleryItem = document.createElement('li');
      galleryItem.className = 'gallery-item-container';
      galleryItem.innerHTML = `<img class="gallery-image" src=" ${img}" alt="${item.image_alts[i]}">`
      return galleryCarousel.appendChild(galleryItem);
    });
    galleryPrevBtn.classList.add('gallery-control', 'prev');
    galleryPrevBtn.innerHTML = '<img class="gallery-icon" src="./assets/prev-btn-gallery.svg" alt="arrow left icon">';

    galleryNextBtn.classList.add('gallery-control', 'next');
    galleryNextBtn.innerHTML = '<img class="gallery-icon" src="./assets/next-btn-gallery.svg" alt="arrow left icon">';

    selectedImage.appendChild(galleryPrevBtn);
    selectedImage.appendChild(galleryNextBtn);

    imageGallery.appendChild(selectedImage);
    imageGallery.appendChild(galleryCarousel);
  } else {
    imageGallery.appendChild(selectedImage);
  }

  bottomContainer.className = 'bottom-pop-up-container';
  description.classList.add('description-pop-up', 'poppins-font-ligth');
  description.innerHTML = item.description;

  urlContainer.className = 'url-container';

  liveBtn.className = 'secondary-btn';
  repoBtn.className = 'secondary-btn';
  liveBtn.innerHTML = '<span class="btn-label poppins-font-medium">See live</span><div class="btn-live-icon"></div>';
  repoBtn.innerHTML = '<span class="btn-label poppins-font-medium">See source</span><div class="btn-git-icon"></div>';

  navigation.className ='navigation-container';

  nextNavBtn.className = 'third-btn';
  prevNavBtn.classList.add('third-btn', 'reverse');
  prevNavBtn.innerHTML = '<span class="btn-label poppins-font-regular">Previous project</span><div class="btn-arrow-reverse-icon"></div>';
  nextNavBtn.innerHTML = '<span class="btn-label poppins-font-regular">Next project</span><div class="btn-arrow-icon-black"></div>';

/**<button class="main-btn full-width">
          <span class="btn-label poppins-font-medium">Get my CV</span>
          <div class="btn-download-icon"></div>
        </button> */

  popUpHeader.appendChild(title);
  popUpHeader.appendChild(cancelBtn);

  urlContainer.appendChild(liveBtn);
  urlContainer.appendChild(repoBtn);

  navigation.appendChild(prevNavBtn);
  navigation.appendChild(nextNavBtn);

  bottomContainer.appendChild(description);
  bottomContainer.appendChild(urlContainer);
  bottomContainer.appendChild(navigation);

  popUpContent.appendChild(popUpHeader);
  popUpContent.appendChild(techs);
  popUpContent.appendChild(imageGallery);
  popUpContent.appendChild(bottomContainer);

  popUp.appendChild(popUpContent);
  document.body.appendChild(popUp);
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