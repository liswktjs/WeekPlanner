import { $ } from "../dom/dom.js";

export default function showMonthChoice (){
    document.addEventListener('DOMContentLoaded', () => {
        let now = new Date();
        let m = now.getMonth() + 1;
        if (m < 10){
            m = '0' + m;
        }
        $('.month-title').innerText = `${m}월`;
        $('.month-choices').options[m-1].selected = true;
    })    
}