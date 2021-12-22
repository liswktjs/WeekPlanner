import showDate from "./viewAction/module/showDate.js";
import showPlanToggle from "./viewAction/makePlan/showPlanToggle.js";
import { $ } from "./dom/dom.js";
import getUserInput from "./modules/getUserInput.js";
import initUserInputElement from './viewAction/module/initUserInputElement.js'

export default function makePlan() {
    this.init = () => {
        showDate();
        showPlanToggle();
        handleTodayPlanAddEvent();
        handleWeekPlanAddEvent();
    }
    const handleTodayPlanAddEvent = () => {
        $('.today-plan-plus-btn').addEventListener('click', ()=>{
            if(getUserInput() !== false){
                initUserInputElement();
            }
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