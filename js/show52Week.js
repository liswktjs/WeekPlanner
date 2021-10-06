const all = document.querySelector('.all');
const all_btn = document.querySelector('.all-btn');

function showWeek(){
    all.classList.toggle('is-active')
}

all_btn.addEventListener("click", showWeek);