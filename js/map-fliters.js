let filtersShow = document.querySelector('#filtersShow'),
    filters = document.querySelector('#filters-modal'),
    mapShow = document.querySelector('#mapShow'),
    listShow = document.querySelector('#listShow'),
    map = document.querySelector('.map__graphics'),
    infoContainer = document.querySelector('.map'),
    servicesModal = document.querySelector('.map__services'),
    list = document.createElement('div'); // Заменить на свой способ формирования списка

// Заменить на свой способ формирования списка
for (let i = 0; i < 5; i++) {
    list.innerHTML += `<p>АЗС №${i + 1}</p>`;
}
list.classList.add('map__list');
//=============================================

filtersShow.addEventListener('click', () => {
    showFlex(filters);
});

listShow.addEventListener('click', () => {
    hideFlex(filters);
    infoContainer.appendChild(list);
    infoContainer.style.position = 'static';
    hideBlock(map);
    hideBlock(servicesModal);
});

mapShow.addEventListener('click', () => {
    hideFlex(filters);
    showBlock(map);
    showBlock(servicesModal);
    infoContainer.removeChild(list);
});

function showBlock(elem) {
    elem.classList.add('display-block');
    elem.classList.remove('display-none');
}
function hideBlock(elem) {
    elem.classList.remove('display-block');
    elem.classList.add('display-none');
}
function showFlex(elem) {
    elem.classList.add('display-flex');
    elem.classList.remove('display-none');
}
function hideFlex(elem) {
    elem.classList.remove('display-flex');
    elem.classList.add('display-none');
}