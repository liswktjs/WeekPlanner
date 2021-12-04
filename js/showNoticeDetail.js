import { $ } from "./dom/dom.js";

function openNoticeDetail(noticearr, index){
    console.log(index);
    $('.notice-show-title').innerText = `${noticearr[index].title}`;
    $('.notice-show-content').innerText = `${noticearr[index].content}`;
}

export default function showNoticeDetail(noticearr){
    const indexList = document.querySelectorAll('.notice-index');
    const titleList = document.querySelectorAll('.notice-title');
    
    for(let i =0; i < index.length; i++){
        indexList[i].addEventListener('click', openNoticeDetail(noticearr, index[i].dataset.index));
        titleList[i].addEventListener('click', openNoticeDetail(noticearr, title[i].dataset.index));
    }
}



