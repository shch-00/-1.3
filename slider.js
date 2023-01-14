const slider = document.querySelector('.swiper-container')

let mySlider = new Swiper(slider, {
    slidesPerView: 1.3,
    spaceBetween: 16,

    breakpoints: {
        320: {
            slidesPerView: 1.45,
        },
        400: {
            slidesPerView: 1.7,
        },
        480: {
            slidesPerView: 2,
        },
        560: {
            slidesPerView: 2.3,
        },
        640: {
            slidesPerView: 2.6,
        },
        720: {
            slidesPerView: 2.85,
        },
        768: {
            spaceBetween: 0,
        }
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});

let list = document.querySelector('.page-main');
let slidesList = list.querySelector('.swiper-wrapper');

let screenWidth = window.innerWidth;
let hiddenSlide1 = list.querySelector('.page-main__slide--7');
let hiddenSlide2 = list.querySelector('.page-main__slide--8');
let hiddenSlide3 = list.querySelector('.page-main__slide--1').cloneNode(true);
let hiddenSlide4 = list.querySelector('.page-main__slide--2').cloneNode(true);
let hiddenSlide5 = list.querySelector('.page-main__slide--3').cloneNode(true);

slidesList.appendChild(hiddenSlide3);
hiddenSlide3.style.display = 'none';
slidesList.appendChild(hiddenSlide4);
hiddenSlide4.style.display = 'none';
slidesList.appendChild(hiddenSlide5);
hiddenSlide5.style.display = 'none';

if (screenWidth >= 768 && screenWidth <= 1119.98) {
    mySlider.destroy();
    hiddenSlide1.style.display = 'none';
    hiddenSlide2.style.display = 'none';
}

window.addEventListener('resize', function () {
    location.reload();
}, true);

let readNextButton = document.createElement('button');
readNextButton.classList.add('page-main__read-next');
list.appendChild(readNextButton);
readNextButton.textContent = 'Показать все';

let hideButton = document.createElement('button');
hideButton.classList.add('page-main__hide');
list.appendChild(hideButton);
hideButton.textContent = 'Скрыть';
hideButton.style.display = 'none';

readNextButton.addEventListener('click', function () {
    readNextButton.style.display = 'none';
    if (screenWidth <= 1119.98) {
        hiddenSlide1.style.display = 'block';
        hiddenSlide2.style.display = 'block';
    }
    hiddenSlide3.style.display = 'block';
    hiddenSlide4.style.display = 'block';
    hiddenSlide5.style.display = 'block';
    hideButton.style.display = 'block';
});

hideButton.addEventListener('click', function () {
    hideButton.style.display = 'none';
    if (screenWidth <= 1119.98) {
        hiddenSlide1.style.display = 'none';
        hiddenSlide2.style.display = 'none';
    }
    hiddenSlide3.style.display = 'none';
    hiddenSlide4.style.display = 'none';
    hiddenSlide5.style.display = 'none';
    readNextButton.style.display = 'block';
});

console.log(screenWidth);