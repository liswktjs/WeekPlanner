import { KEY_PLAN, KEY_PLANLIST } from "../../constants/todayStorageConstants.js";
import { $ } from "../../dom/dom.js";
import store from "../../store/store.js";
import planCheckToggle from './planCheckToggle.js';

function renderPlanListElement (planList){
    planList.map((item,index) => {
        return `<div class="plan-show-content today-plan-content>
            <p class="plan-show-content-title">${item[KEY_PLAN]}</p>
            <button type="button" class="plan-show-content-check today-plan-check is-active" data-index='${index}'>
                <i class="is-check"></i>
            </button>
            <button type="button" class="plan-show-content-delete today-plan-delete is-actvie" data-index='${index}'>
                <i class="ic-close"></i>
            </button>
        </div>`
    }).join('');
}

export default function showPlanList(type){
    const planListObj = store.getLocalStorage(type);
    if(planListObj){
        const planList = planListObj[KEY_PLANLIST];
        $(`.plan-show ${type}`).innerHTML = renderPlanListElement(planList);
        planCheckToggle();
    }
}