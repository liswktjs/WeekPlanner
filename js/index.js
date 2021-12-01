import { $ } from "./dom/dom.js";
import showSideBar from "./viewAction/showSidebar.js";

export default function weekPlanner(){
    this.init = () => {
        initEventListener();
    }
    const initEventListener = () => {
        $('.sideBtn').addEventListener("click",showSideBar);
        $('.backbtn').addEventListener("click",showSideBar);
    }
}

const w = new weekPlanner();
w.init();

