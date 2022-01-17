import { $ } from "../../dom/dom.js";

export default function planCheckToggle(){
    document.querySelectorAll('.today-plan-check').forEach((item ,index) => {
        item.addEventListener('click', () => {
            $(`.today-plan-data-${index}`).classList.toggle('is-active');
        })
    })
    document.querySelectorAll('.week-plan-check').forEach((item, index) => {
        item.addEventListener('click', () => {
            $(`.week-plan-data-${index}`).classList.toggle('is-active');
        })
    })
}