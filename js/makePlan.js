import showDate from "./viewAction/module/showDate.js";
import showPlanToggle from "./viewAction/makePlan/showPlanToggle.js";
import { $ } from "./dom/dom.js";
import getUserInput from "./modules/getUserInput.js";
import initUserInputElement from './viewAction/module/initUserInputElement.js'
import setStorage from "./store/setStorage.js";
import { TODAY_STORAGE_NAME } from "./constants/todayStorageConstants.js";
import { WEEK_STORAGE_NAME } from "./constants/weekStorageConstants.js";

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
                setStorage(TODAY_STORAGE_NAME,$('.plan-plus-input').value);
                initUserInputElement();
                
            }
        })
    }
    const handleWeekPlanAddEvent = () => {
        $('.week-plan-plus-btn').addEventListener('click', () =>{
            if(getUserInput() !== false){
                setStorage(WEEK_STORAGE_NAME, $('.plan-plus-input').value);
                initUserInputElement();
            }
        })

    }
}

let p = new makePlan();
p.init();