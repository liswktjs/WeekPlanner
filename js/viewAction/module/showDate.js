export default function showDate(){
    document.addEventListener('DOMContentLoaded', () => {
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
        document.querySelector('.today-date p').innerText = `${y}.${m}.${d}`;
    })
     
}