import showPlanToggle from "./viewAction/makePlan/showPlanToggle.js";
import showDate from "./viewAction/module/showDate.js";
import planCheckToggle from "./viewAction/makePlan/planCheckToggle.js";

export default function makePlan() {
    this.init = () => {
        showDate();
        showPlanToggle();
        planCheckToggle();
    }
}

let p = new makePlan();
p.init();