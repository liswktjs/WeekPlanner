function createNoticeElement(_title, _content, _index){
    const noticeObject = {
        index : _index,
        title : _title,
        content: _content
    }
    return noticeObject
}
export default function noticeStore(){
    let notice = [
        {
            index : 0,
            title : 'First-notice',
            content:'첫번째 업데이트'
        },
        {
            index : 1,
            title : '업데이트 관련 공지사항',
            content : '저희 앱을 사용해주셔서 감사합니다 현재 앱 버전은 v.0.1 버전으로 현재는 localStorage를 활용해서 데이터를 저장하고 있습니다 차후에 파이어베이스와 React를 사용할 예정입니다' 
        }
    ]
    this.setNoticeStorage = (title, content) => {
        notice.push(createNoticeElement(title, content, notice.length + 1))
    }
    this.getNoticeStorage = () => {
        return notice;
    }
}