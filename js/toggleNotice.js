document.addEventListener('DOMContentLoaded', () => {
    const index = document.querySelector('.notice-index');
    const title = document.querySelector('.notice-title');

    const backbtn = document.querySelector('.notice-show-back');

    const notice = document.querySelector('.notice-show');

    function toggleActive(){
        notice.classList.toggle('is-active');
    }

    index.addEventListener('click',toggleActive);
    title.addEventListener('click', toggleActive);
    backbtn.addEventListener('click',toggleActive);
})