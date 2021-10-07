const month_choices = document.querySelector('.month-choices');
const month_title = document.querySelector('.month-title');

document.addEventListener('DOMContentLoaded', () => {
    let now = new Date();
    let m = now.getMonth() + 1;
    if (m < 10){
        m = '0' + m;
    }

    month_title.innerText = `${m}월`;
    
    month_choices.options[m-1].selected = true;
})