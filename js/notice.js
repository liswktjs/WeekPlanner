import showNoticeDetail from "./showNoticeDetail.js";
import showNotice from "./viewAction/notice/showNotice.js";

export default function notice(){
    this.noticObject = {
        noticearr : [
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
    }
    this.init = () =>{
        showNotice(this.noticObject.noticearr);
        showNoticeDetail(this.noticObject.noticearr);
    }
    
}

const n = new notice();
n.init();