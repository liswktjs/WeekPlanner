const today = document.querySelector('.today-date p');


document.addEventListener('DOMContentLoaded', () =>{
    let now = new Date();
    let y = now.getFullYear();
    let m = now.getMonth() + 1;
    if (m < 10){
        m = '0' + m;
    }
    let d = now.getDate();
    if (d < 10) {
        d = '0' + d;
    }
    today.innerText = `${y}.${m}.${d}`;
})