import showPlanToggle from "./viewAction/makePlan/showPlanToggle.js";
import showDate from "./viewAction/module/showDate.js";

export default function makePlan() {
    this.init = () => {
        showDate();
        showPlanToggle();
    }
}

let p = new makePlan();
p.init();