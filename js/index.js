import { $ } from "./dom/dom.js";
import showSideBar from "./viewAction/main/showSidebar.js";
import show52Week from "./viewAction/main/show52Week.js";
import showDate from "./viewAction/module/showDate.js";
import showMonthChoice from "./viewAction/main/showMonthChoice.js";
import linkPage from "./viewAction/main/linkPage.js";



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

