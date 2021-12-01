import { $ } from "./dom/dom.js";
import showSideBar from "./viewAction/showSidebar.js";
import show52Week from "./viewAction/show52Week.js";
import showDate from "./viewAction/showDate.js";
import showMonthChoice from "./viewAction/showMonthChoice.js";
import linkPage from "./viewAction/linkPage.js";

export default function weekPlanner(){
    this.init = () => {
        initEventListener();
        linkPage();
        showDate();
        showMonthChoice();
    }
    const initEventListener = () => {
        $('.sideBtn').addEventListener("click",showSideBar);
        $('.backbtn').addEventListener("click",showSideBar);
        $('.all-btn').addEventListener("click",show52Week);
        
    }
}

const w = new weekPlanner();
w.init();

