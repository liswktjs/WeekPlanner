import { $ } from "../../dom/dom.js";

export default function planCheckToggle(){
    $('.today-plan-check').addEventListener("click", () => {
        $('.today-plan-check').classList.toggle('is-active');
    })
    $('.week-plan-check').addEventListener("click", () => {
        $('.week-plan-check').classList.toggle('is-active');
    })
}