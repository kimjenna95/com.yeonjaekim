const preloader_bg = document.querySelector('.preloader_bg');
const mainContainer = document.querySelector('.main-container');

function init() {
    setTimeout(() => {
        preloader_bg.style.opacity = 0;
        preloader_bg.style.display = 'none';

        mainContainer.style.display = 'block';
        setTimeout(() => (mainContainer.style.opacity = 1), 50);

    }, 3000);
}

init();


//Function expression to select elements
const selectElement = (s) => document.querySelector(s);

//Open menu on click
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});

//Close menu on click
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});