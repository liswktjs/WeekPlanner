const notice = document.querySelector('.notice-container');

noticearr = [
    {
        index: 1,
        title: 'First-notice',
        content: '첫번째 앱 업데이트'
    },
    {
        index: 2,
        title: '업데이트 관련 공지사항',
        content: '저희 앱을 사용해주셔서 감사합니다 현재 앱 버전은 v.0.0으로 후에 react와 파이어베이스를 활용하여 버전을 업그레이드 할 예정입니다 '
    }
]

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