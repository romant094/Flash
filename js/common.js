document.addEventListener('DOMContentLoaded', function(){
    var menu = document.querySelector('.toggle_mnu');
    menu.addEventListener('click', function(){
        var sandwich = document.querySelector('.sandwich');
        sandwich.classList.toggle('active');
        var leftNav = document.querySelector('.header__left-nav');
        leftNav.classList.toggle('active');

    });

//animation

  var body = document.querySelector('.body');
if (body.classList.contains("body-index")){
    let el1 = document.querySelector('.functions__list');
    let el2 = document.querySelector('.ways__bottom-wrap ');
    let el3 = document.querySelector('.ways__bottom-wrap--right');
    let el4 = document.querySelector('.program__blocks--brilliant .program__blocks-img');
    let el5 = document.querySelector('.program__blocks--gold .program__blocks-img');
    let el6 = document.querySelector('.program__blocks--silver .program__blocks-img');
    let el7 = document.querySelector('.program__blocks--bronze .program__blocks-img');
    let el8 = document.querySelector('.container--defence');
    window.addEventListener('scroll', myAnim.bind(el1, el1, 'fadeInRight', 'fadeOutDown'));
    window.addEventListener('scroll', myAnim.bind(el2, el2, 'fadeInLeft', 'fadeOutDown'));
    window.addEventListener('scroll', myAnim.bind(el3, el3, 'fadeInRight', 'fadeOutDown'));
    window.addEventListener('scroll', myAnim.bind(el4, el4, 'fadeInLeft', 'fadeOutRight'));
    window.addEventListener('scroll', myAnim.bind(el5, el5, 'fadeInLeft', 'fadeOutRight'));
    window.addEventListener('scroll', myAnim.bind(el6, el6, 'fadeInLeft', 'fadeOutRight'));
    window.addEventListener('scroll', myAnim.bind(el7, el7, 'fadeInLeft', 'fadeOutRight'));
    window.addEventListener('scroll', myAnim.bind(el8, el8, 'fadeInUp', 'zoomOutUp'));
}
if (body.classList.contains("body-sequence")){
    let el9 = document.querySelector('.sequence__block--one .sequence__img');
    let el10 = document.querySelector('.sequence__block--two .sequence__img');
    let el11 = document.querySelector('.sequence__block--three .sequence__img');
    let el12 = document.querySelector('.sequence__block--four .sequence__img');
    let el13 = document.querySelector('.sequence__block--five .sequence__img');
    let el14 = document.querySelector('.sequence__block--six .sequence__img');
    let el15 = document.querySelector('.sequence__block--one .sequence__text');
    let el16 = document.querySelector('.sequence__block--two .sequence__text');
    let el17 = document.querySelector('.sequence__block--three .sequence__text');
    let el18 = document.querySelector('.sequence__block--four .sequence__text');
    let el19 = document.querySelector('.sequence__block--five .sequence__text');
    let el20 = document.querySelector('.sequence__block--six .sequence__text');

    window.addEventListener('scroll', myAnim.bind(el9, el9, 'bounceIn', 'bounceOut'));
    window.addEventListener('scroll', myAnim.bind(el10, el10, 'rotateIn', 'rotateOut'));
    window.addEventListener('scroll', myAnim.bind(el11, el11, 'rotateIn', 'rotateOut'));
    window.addEventListener('scroll', myAnim.bind(el12, el12, 'rotateIn', 'rotateOut'));
    window.addEventListener('scroll', myAnim.bind(el13, el13, 'rotateIn', 'rotateOut'));
    window.addEventListener('scroll', myAnim.bind(el14, el14, 'rotateIn', 'rotateOut'));
    window.addEventListener('scroll', myAnim.bind(el15, el15, 'zoomIn', 'slideOutUp'));
    window.addEventListener('scroll', myAnim.bind(el16, el16, 'zoomIn', 'slideOutUp'));
    window.addEventListener('scroll', myAnim.bind(el17, el17, 'zoomIn', 'slideOutUp'));
    window.addEventListener('scroll', myAnim.bind(el18, el18, 'zoomIn', 'slideOutUp'));
    window.addEventListener('scroll', myAnim.bind(el19, el19, 'zoomIn', 'slideOutUp'));
    window.addEventListener('scroll', myAnim.bind(el20, el20, 'zoomIn', 'slideOutUp'));
}

    function myAnim(el, anim1, anim2) {
      let scrollTop = window.pageYOffset;
      let positionEl2 = el.parentNode.getBoundingClientRect().top + scrollTop; //от верха до начала родителя элемента
      let elH = el.parentNode.getBoundingClientRect().bottom + scrollTop; //высота от верха до конца блока
      let winH = document.documentElement.clientHeight; //высота экрана
      if((positionEl2-scrollTop) < winH) {
        this.classList.add(anim1);
        this.classList.add('animated');
        // el.classList.remove('none');
        if ((elH-scrollTop) < winH/2) {
            this.classList.remove(anim1);
            this.classList.add(anim2);
            // setTimeout (function (){
            //     el.classList.add('none');
            // }, 1000);
            
        } else {
            this.classList.remove(anim2);
        }
      } else {
        this.classList.remove(anim1);
      }
    }

});

