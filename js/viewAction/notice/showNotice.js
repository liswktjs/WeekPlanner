import {$} from '../../dom/dom.js';

export default function showNotice(noticearr){
    const notice = $('.notice-container');
    for(let i = 0; i < noticearr.length; i++){
        let container = document.createElement('div');
        container.classList.add('notice-container-content');
    
        let index = document.createElement('a');
        index.classList.add('notice-index');
        index.value = `${i}`;
        index.innerText = `${i+1}`;
    
        let title = document.createElement('a');
        title.classList.add('notice-title');
        title.value = `${i}`;
        title.innerText = `${noticearr[i].title}`;
    
        container.appendChild(index);
        container.appendChild(title);
        notice.appendChild(container);
    }
}



