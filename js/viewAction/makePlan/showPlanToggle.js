import { $ } from "../../dom/dom.js";
export default function showPlanToggle() {
    $('.today-toggle-btn').addEventListener("click", () => {
        $('.today-plan-plus').classList.toggle('is-active');
    })
    $('.week-toggle-btn').addEventListener("click", () => {
        $('.week-plan-plus').classList.toggle('is-active');
    })
}