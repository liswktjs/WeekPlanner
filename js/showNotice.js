const notice = document.querySelector('.notice-container');

noticearr = [
    {
        index: 1,
        title: 'First-notice',
        content: '첫번째 앱 업데이트'
    }
]

document.addEventListener('DOMContentLoaded', () => {
    for(let i = 0; i < noticearr.length; i++){
        let container = document.createElement('div');
        container.classList.add('.notice-container-content');

        let index = document.createElement('a');
        index.classList.add('notice-index');
        index.innerText = `${i+1}`;

        let title = document.createElement('a');
        title.classList.add('notice-title');
        title.dataset.index = `${i}`;
        title.innerText = `${noticearr[i].title}`;

        container.appendChild(index);
        container.appendChild(title);
        notice.appendChild(container);
    }

})