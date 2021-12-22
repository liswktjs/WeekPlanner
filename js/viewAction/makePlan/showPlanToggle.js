import { TODAY_STORAGE_NAME } from "../../constants/todayStorageConstants.js";
import { WEEK_STORAGE_NAME } from "../../constants/weekStorageConstants.js";
import { $ } from "../../dom/dom.js";
import showPlanList from "./showPlanList.js";
export default function showPlanToggle() {
    $('.today-toggle-btn').addEventListener("click", () => {
        $('.today-plan-plus').classList.toggle('is-active');
        showPlanList(TODAY_STORAGE_NAME);
    })
    $('.week-toggle-btn').addEventListener("click", () => {
        $('.week-plan-plus').classList.toggle('is-active');
        showPlanList(WEEK_STORAGE_NAME);
    })
}