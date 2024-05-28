const menuBtn = document.querySelector('.menu-btn'),
      menu = document.querySelector('.menu'),
      body = document.querySelector('body');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('menuClick')
    menu.classList.toggle('showMenu')
    header.classList.remove('showSearch');
    body.classList.toggle('bodyStopScroll')
});


const searchInp = document.querySelector('.search_inp'),
      searchBtn = document.querySelector('.search-button'),
      header = document.querySelector('header');
 
searchInp.addEventListener('input', () => {
    if(searchInp.value.length > 2) {
        searchInp.parentElement.nextElementSibling.classList.add('showSearchInfo')
    }else {
        searchInp.parentElement.nextElementSibling.classList.remove('showSearchInfo')
    }
});

searchBtn.addEventListener('click', () => {
    header.classList.toggle('showSearch')
    menuBtn.classList.remove('menuClick')
    menu.classList.remove('showMenu')
});


const spProjectBtn = document.querySelector('.spProjects-head');
const spProjects = document.querySelector('.spProjects');

spProjectBtn.addEventListener('click', () => {
    spProjects.classList.toggle('showSpProjects')
})




