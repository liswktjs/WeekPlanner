noticearr = [
    {
        index: 1,
        title: 'First-notice',
        content: '첫번째 앱 업데이트 글자수 많았을 경우 상상해서 해보기 아을아ㅓㄹ이ㅏㅓㄹ머ㅣㄴ러 ㅣ러ㅣ넘아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ아ㅓㄹ아ㅣㅓㄹ미ㅏㅓ리ㅏ널ㄷ먀러디ㅓ리ㅣ마ㅓ니ㅓ이나ㅓ짇러ㅑ더긴머치ㅏ너ㅣ넝피ㅓㄴ이럼ㄴ이러니ㅏ러미더갸ㅐㅁ더ㅣ더ㅣ눌ㄹㅇ누ㅠㅍ.ㅡㅁㄹ.ㅇ나ㅓ리'
    },
    {
        index: 2,
        title: '업데이트 관련 공지사항',
        content: '저희 앱을 사용해주셔서 감사합니다 현재 앱 버전은 v.0.0으로 후에 react와 파이어베이스를 활용하여 버전을 업그레이드 할 예정입니다 '
    }
]

document.addEventListener('DOMContentLoaded', () => {
    const notice_title = document.querySelector('.notice-show-title');
    const notice_content = document.querySelector('.notice-show-content');

    const index = document.querySelectorAll('.notice-index');
    const title = document.querySelectorAll('.notice-title');

    function showNoticeDetail(e){
        console.log(this.value);
        
        notice_title.innerText = `${noticearr[this.value].title}`;
        notice_content.innerText = `${noticearr[this.value].content}`;
    }
    for(let i =0; i < index.length; i++){
        index[i].addEventListener('click', showNoticeDetail);
        title[i].addEventListener('click', showNoticeDetail);
    }
})

