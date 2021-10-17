document.addEventListener('DOMContentLoaded', () => {
    const index = document.querySelectorAll('.notice-index');
    const title = document.querySelectorAll('.notice-title');

    const backbtn = document.querySelector('.notice-show-back');

    const notice = document.querySelector('.notice-show');

    function toggleActive(){
        notice.classList.toggle('is-active');
    }

    for(let i = 0; i < index.length; i++){
        index[i].addEventListener('click',toggleActive);
        title[i].addEventListener('click',toggleActive);
    }
    backbtn.addEventListener('click',toggleActive);
})