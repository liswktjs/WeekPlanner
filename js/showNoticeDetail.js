noticearr = [
    {
        index: 1,
        title: 'First-notice',
        content: '첫번째 앱 업데이트 글자수 많았을 경우 상상해서 해보기 아을아ㅓㄹ이ㅏㅓㄹ머ㅣㄴ러 ㅣ러ㅣ넘아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ아ㅓㄹ아ㅣㅓㄹ미ㅏㅓ리ㅏ널ㄷ먀러디ㅓ리ㅣ마ㅓ니ㅓ이나ㅓ짇러ㅑ더긴머치ㅏ너ㅣ넝피ㅓㄴ이럼ㄴ이러니ㅏ러미더갸ㅐㅁ더ㅣ더ㅣ눌ㄹㅇ누ㅠㅍ.ㅡㅁㄹ.ㅇ나ㅓ리'
    }
]

document.addEventListener('DOMContentLoaded', () => {
    const notice_title = document.querySelector('.notice-show-title');
    const notice_content = document.querySelector('.notice-show-content');

    const index = document.querySelector('.notice-index');
    const title = document.querySelector('.notice-title');

    function showNoticeDetail(e){
        console.log(this.value);
        
        notice_title.innerText = `${noticearr[this.value].title}`;
        notice_content.innerText = `${noticearr[this.value].content}`;
    }
    index.addEventListener('click', showNoticeDetail);
    title.addEventListener('click', showNoticeDetail);
})

