import {$} from '../../dom/dom.js';

export default function showNotice(noticearr){
    for(let i = 0; i < noticearr.length; i++){
        let container = document.createElement('div');
        container.classList.add('notice-container-content');
        container.dataset.index = `${i}`;
        
        let index = document.createElement('a');
        index.classList.add('notice-index');
        index.dataset.index = `${i}`;
        index.value = `${i}`;
        index.innerText = `${i+1}`;
    
        let title = document.createElement('a');
        title.classList.add('notice-title');
        title.dataset.index = `${i}`;
        title.value = `${i}`;
        title.innerText = `${noticearr[i].title}`;
    
        container.appendChild(index);
        container.appendChild(title);
        $('.notice-container').appendChild(container);
    }
}



