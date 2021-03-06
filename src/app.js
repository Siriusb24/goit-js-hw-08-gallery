const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const body = document.querySelector('body');
const image = document.querySelectorAll('.lightbox__image')
const gallery = document.querySelector('.js-gallery');
const button = document.querySelector('[data-action="close-lightbox"]');
const lightbox = document.querySelector(".lightbox");
const overlay = document.querySelector(".lightbox__overlay");

const cardsList = createGallery (galleryItems);

gallery.insertAdjacentHTML('beforeEnd', cardsList);
body.classList.add('body');

gallery.addEventListener("click", onClickModal);
overlay.addEventListener('click', onCloseBox);
button.addEventListener("click", onCloseModal);


function createGallery (galleryItems) {
return galleryItems.map(({preview, original, description}) => {
    return `<li class ="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class= "gallery__image"
      src= "${preview}" data-source="${original}" alt="${description}"/>
      </a>
    </li>`
  }).join('');
};


function onClickModal(e){
e.preventDefault();
window.addEventListener('keydown', onCloseEscModal);
if(e.target.nodeName === "IMG"){
  lightbox.classList.add("is-open");
  lightbox.querySelector('.lightbox__image').src = e.target.dataset.source;
  lightbox.querySelector('.lightbox__image').alt = e.target.alt;
};
};

function closeModal(){
lightbox.classList.remove("is-open");
lightbox.querySelector('.lightbox__image').removeAttribute('src', '');
}


function onCloseModal (e){
if(e.target.nodeName === "BUTTON"){
  closeModal();
};
};

function onCloseEscModal(e){
  window.removeEventListener('keydown', onCloseEscModal);
if(e.code === "Escape"){
  closeModal();
};
};

function onCloseBox(e){
  if(e.currentTarget === e.target){
    closeModal();
  };
};




