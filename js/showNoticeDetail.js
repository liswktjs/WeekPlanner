import { $ } from "./dom/dom.js";

function openNoticeDetail(noticearr, index){
    $('.notice-show-title').innerText = `${noticearr[index].title}`;
    $('.notice-show-content').innerText = `${noticearr[index].content}`;
}

export default function showNoticeDetail(noticearr){
    document.querySelectorAll('.notice-container-content').forEach((item) => {
        item.addEventListener('click', (e) => {
            const index = e.target.parentNode.dataset.index;
            openNoticeDetail(noticearr, index);
        });
    })
}



