import showDate from "./viewAction/module/showDate.js";
import showPlanList from "./viewAction/makePlan/showPlanList.js";
import showPlanToggle from "./viewAction/makePlan/showPlanToggle.js";
import { $ } from "./dom/dom.js";

export default function makePlan() {
    this.init = () => {
        showDate();
        showPlanToggle();
        handleTodayPlanAddEvent();
        handleWeekPlanAddEvent();
    }
    const handleTodayPlanAddEvent = () => {
        $('.today-plan-plus-btn').addEventListener('click', ()=>{
            console.log('today');
        })
    }
    const handleWeekPlanAddEvent = () => {
        $('.week-plan-plus-btn').addEventListener('click', () =>{
            console.log('week');
        })

    }
}

let p = new makePlan();
p.init();