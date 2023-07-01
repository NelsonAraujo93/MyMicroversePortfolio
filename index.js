const worksArray = [
  {
    name: 'Vagos studios web',
    description: 'This a website and portfolio for VagosStudios. Vagos Studios is a company that offers services of web development, mobile development, and design.',
    featured_images: ['./assets/vagos-web.png'],
    technologies: ['Angular.js', 'MongoDB', 'Express.js', 'Node.js'],
    link_demo: 'https://vagosstudios.com',
    link_source: 'https://github.com/NelsonAraujo93/VagosWeb2',
    image_alts: ['The home page from vagosstudios web'],
  },
  {
    name: 'Trade Roofing web & web app',
    description: 'This project is a medium one, first i developed a web with wordpress for the company, then i developed a web app with MERN Stack for the company.',
    featured_images: ['./assets/trade-roofing.png'],
    technologies: ['MERN-Stack', 'Wordpress'],
    link_demo: 'https://traderoofing.com',
    link_source: 'https://github.com/NelsonAraujo93/TradeRoofing',
    image_alts: ['The home page from trade roofing web'],
  },
  {
    name: 'Etinca web & web app',
    description: 'This web app that allow the user upload pdf and videos, also it was developed by many different companies.',
    featured_images: ['./assets/etnica-web.png'],
    technologies: ['Angular.js', 'MongoDB', 'Express.js', 'Node.js'],
    link_demo: 'https://etnica.com.co/',
    link_source: 'https://github.com/NelsonAraujo93/etnica',
    image_alts: ['The home page from etnica web'],
  },
  {
    name: 'Nba web app',
    description: 'This a webapp build in React to get news from the NBA.',
    featured_images: ['./assets/nba-app.png'],
    technologies: ['React.js', 'Redux', 'Axios'],
    link_demo: 'https://nba-news-static.onrender.com/',
    link_source: 'https://github.com/NelsonAraujo93/capstone-module-3',
    image_alts: ['The home page from nba web app'],
  },
  {
    name: 'Space Hub web app',
    description: 'This is web app build in React to get news from the spaceX APIs.',
    featured_images: ['./assets/space-hub.png'],
    technologies: ['React.js', 'Redux', 'Axios'],
    link_demo: 'https://space-travelers-ti6x.onrender.com',
    link_source: 'https://github.com/jorgeabrahan/space_travelers_hub',
    image_alts: ['An image from space hub web app'],
  },
  {
    name: 'Todo list Dynamic-content',
    description: 'This a website build with vainilla css to work with dynamic content.',
    featured_images: ['./assets/to-do.png'],
    technologies: ['JavaScript', 'Css3', 'HMTL5'],
    link_demo: 'https://nelsonaraujo93.github.io/toDoList/dist/',
    link_source: 'https://github.com/NelsonAraujo93/toDoList',
    image_alts: ['An screenshot from todo list web app'],
  },
];

const popUp = (item, position) => {
  const popUpContainer = document.createElement('section');
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

  popUpContainer.id = 'pop-up';
  popUpContent.classList.add('pop-up-content', 'full-width');
  popUpHeader.classList.add('pop-up-header', 'full-width');

  title.classList.add('card-title', 'poppins-font-extrabold', 'dark');
  title.innerHTML = item.name;

  cancelBtn.className = 'menu-btn';
  cancelBtn.innerHTML = '<img src="./assets/Union.svg" alt="Cancel icon">';
  cancelBtn.addEventListener('click', () => {
    popUpContainer.remove();
  });

  techs.classList.add('card-categories-container', 'full-width');
  for (let i = 0; i < item.technologies.length; i += 1) {
    const techsItem = document.createElement('li');
    techsItem.classList.add('card-category', 'poppins-font-ligth', 'ligth');
    techsItem.innerHTML = item.technologies[i];
    techs.appendChild(techsItem);
  }

  imageGallery.className = 'image-gallery-container';
  selectedImage.className = 'selected-image-container';
  selectedImage.innerHTML = `<img class="full-width" src=" ${item.featured_images[0]}" alt="${item.image_alts[0]}">`;
  if (item.featured_images.length > 1) {
    galleryCarousel.className = 'gallery';
    item.featured_images.map((img, i) => {
      const galleryItem = document.createElement('li');
      galleryItem.className = 'gallery-item-container';
      galleryItem.innerHTML = `<img class="gallery-image" src=" ${img}" alt="${item.image_alts[i]}">`;
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
  liveBtn.addEventListener('click', () => {
    window.open(item.link_demo, '_blank');
  });
  repoBtn.addEventListener('click', () => {
    window.open(item.link_source, '_blank');
  });
  navigation.className = 'navigation-container';

  if (position === 0) {
    nextNavBtn.className = 'third-btn';
    prevNavBtn.classList.add('third-btn', 'reverse', 'disabled');
    prevNavBtn.innerHTML = '<span class="btn-label poppins-font-regular">Previous project</span><div class="btn-arrow-reverse-icon"></div>';
    nextNavBtn.innerHTML = '<span class="btn-label poppins-font-regular">Next project</span><div class="btn-arrow-icon-black"></div>';
    nextNavBtn.addEventListener('click', () => {
      popUpContainer.remove();
      popUp(worksArray[position + 1], position + 1);
    });
  } else if (position + 1 === worksArray.length) {
    nextNavBtn.classList.add('third-btn', 'disabled');
    prevNavBtn.classList.add('third-btn', 'reverse');
    prevNavBtn.innerHTML = '<span class="btn-label poppins-font-regular">Previous project</span><div class="btn-arrow-reverse-icon"></div>';
    nextNavBtn.innerHTML = '<span class="btn-label poppins-font-regular">Next project</span><div class="btn-arrow-icon-black"></div>';
    prevNavBtn.addEventListener('click', () => {
      popUpContainer.remove();
      popUp(worksArray[position - 1], position - 1);
    });
  } else {
    nextNavBtn.className = 'third-btn';
    prevNavBtn.classList.add('third-btn', 'reverse');
    prevNavBtn.innerHTML = '<span class="btn-label poppins-font-regular">Previous project</span><div class="btn-arrow-reverse-icon"></div>';
    nextNavBtn.innerHTML = '<span class="btn-label poppins-font-regular">Next project</span><div class="btn-arrow-icon-black"></div>';
    prevNavBtn.addEventListener('click', () => {
      popUpContainer.remove();
      popUp(worksArray[position - 1], position - 1);
    });
    nextNavBtn.addEventListener('click', () => {
      popUpContainer.remove();
      popUp(worksArray[position + 1], position + 1);
    });
  }
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

  popUpContainer.appendChild(popUpContent);
  document.body.appendChild(popUpContainer);
};

const dynamicWorksItems = (worksArray, parent, className) => {
  worksArray.map((item, i) => {
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
    button.addEventListener('click', () => {
      popUp(data, i);
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
  const worksArrayDynamic = [...worksArray];
  const array1 = worksArrayDynamic.splice(0, 1);
  const array2 = worksArrayDynamic.splice(0, 1);
  const array3 = worksArrayDynamic.splice(0, 1);
  const array4 = worksArrayDynamic.splice(0, 3);

  dynamicWorksItems(array1, parent1, 'main');
  dynamicWorksItems(array2, parent2, 'little');
  dynamicWorksItems(array3, parent2, 'medium');
  dynamicWorksItems(array4, parent3, 'little');
};

let userData = {
  name: '',
  email: '',
  message: '',
};

const getStorageData = (nameInput, emailInput, messageInput) => {
  if (window.localStorage.user) {
    userData = JSON.parse(window.localStorage.user);
    nameInput.value = userData.name;
    emailInput.value = userData.email;
    messageInput.value = userData.message;
  }
};

const setLocalStorage = () => {
  window.localStorage.setItem('user', JSON.stringify(userData));
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
  const form = document.getElementById('main-form');
  const email = document.getElementById('email');
  const name = document.getElementById('full-name');
  const message = document.getElementById('message');
  let emailValidation = false;
  const downloadButton = document.getElementById('download-cv');
  const downloadResume = document.getElementById('download-rs');
  // Attach a click event listener to the button
  downloadButton.addEventListener('click', () => {
    const filePath = './assets/Nelson-Araujo-Cv.pdf';
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'Nelson-Araujo-cv.pdf';
    link.click();
  });

  downloadResume.addEventListener('click', () => {
    const filePath = './assets/Nelson-Araujo-Cv.pdf';
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'Nelson-Araujo-cv.pdf';
    link.click();
  });

  email.addEventListener('input', (event) => {
    const lowerCase = event.currentTarget.value.toLowerCase();
    if (email.validity.typeMismatch) {
      email.setCustomValidity('This must be an email addres (example@exmaple.com)');
      email.reportValidity();
      emailValidation = false;
    } else if (event.currentTarget.value !== lowerCase) {
      email.setCustomValidity('The email must be on lowercase');
      email.reportValidity();
      emailValidation = false;
    } else {
      email.setCustomValidity('');
      email.reportValidity();
      emailValidation = true;
    }
    userData.email = event.currentTarget.value;
    setLocalStorage();
  });

  name.addEventListener('input', (event) => {
    userData.name = event.currentTarget.value;
    setLocalStorage();
  });

  message.addEventListener('input', (event) => {
    userData.message = event.currentTarget.value;
    setLocalStorage();
  });

  form.addEventListener('submit', (event) => {
    if (emailValidation) {
      form.submit();
      setLocalStorage(name, email, message);
    } else {
      event.preventDefault();
    }
  });
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

  getStorageData(name, email, message);
  dynamicWorksItems(worksArray, worksMobile);
  dynamicWorksItemsDesktop(worksDesk, worksDeskLeft, worksDeskRigth, worksArray);
};

init();
