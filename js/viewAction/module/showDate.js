import getDate from "../../modules/getDate.js";

export default function showDate(){
    document.addEventListener('DOMContentLoaded', () => {
        let date = getDate();
        let y = date[0];
        let m = date[1];
        let d = date[2];
        document.querySelector('.today-date p').innerText = `${y}.${m}.${d}`;
    })
     
}