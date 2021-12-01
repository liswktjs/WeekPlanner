import {$} from '../../dom/dom.js';

export default function linkPage() {
    $('.myinfobtn').addEventListener('click', () => {
        location.href = "../pages/myPage.html";
    })
    $('.myprofilebtn').addEventListener("click", () => {
        location.href="../pages/myProfile.html";
    })
    $('.noticebtn').addEventListener("click", () => {
        location.href="../pages/notice.html";
    })
    $('.unregisterbtn').addEventListener("click", () => {
        location.href = "../pages/unregisterMember.html";
    })
}