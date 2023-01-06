var ElOpen = document.querySelector('.open__btn');
var ElModal = document.querySelector('.modal__main');
var ElShadow = document.querySelector('.shadow');
var ElspanClose = document.querySelector('.close__span');
var natija1 = document.querySelector('.natija1');
var natija2 = document.querySelector('.natija2');
var natija3 = document.querySelector('.natija3');
var natija4 = document.querySelector('.natija4');
var inp = document.querySelector('.inp');


ElOpen.addEventListener('click', function () {
    ElModal.classList.add('openBlock');
    ElShadow.classList.add('showShadow');
    natija1.textContent = inp.value / 4;
    natija2.textContent = inp.value / 20;
    natija3.textContent = inp.value / 70;
    natija4.textContent = inp.value / 800;
})
ElspanClose.addEventListener('click', function () {
    ElModal.classList.remove('openBlock');
    ElShadow.classList.remove('showShadow');
    
})
ElShadow.addEventListener('click', function(){
    ElModal.classList.remove('openBlock');
    ElShadow.classList.remove('showShadow');
})

