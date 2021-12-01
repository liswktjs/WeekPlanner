import { $ } from "./dom/dom.js";
import showSideBar from "./viewAction/showSidebar.js";
import show52Week from "./viewAction/show52Week.js";
export default function weekPlanner(){
    this.init = () => {
        initEventListener();
    }
    const initEventListener = () => {
        $('.sideBtn').addEventListener("click",showSideBar);
        $('.backbtn').addEventListener("click",showSideBar);
        $('.all-btn').addEventListener("click",show52Week);
    }
}

const w = new weekPlanner();
w.init();

