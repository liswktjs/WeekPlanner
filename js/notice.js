import showNoticeDetail from "./showNoticeDetail.js";
import showNotice from "./viewAction/notice/showNotice.js";
import noticeStore from "./store/noticeStore.js";
export default function notice(){
    this.init = () =>{
        const n = new noticeStore();
        const noticearr = n.getNoticeStorage();
        showNotice(noticearr);
        showNoticeDetail(noticearr);
    }
    
}

const n = new notice();
n.init();