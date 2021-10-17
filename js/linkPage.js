const myinfo = document.querySelector('.myinfobtn');
const myProfile = document.querySelector('.myprofilebtn');
const notice = document.querySelector('.noticebtn');
const unregister = document.querySelector('.unregisterbtn');

myinfo.addEventListener('click', (()=>{
    location.href= "../pages/myPage.html";
}))

myProfile.addEventListener('click', (() => {
    location.href = "../pages/myProfile.html";
}))

notice.addEventListener('click', (() => {
    location.href = "../pages/notice.html";
}))

unregister.addEventListener('click', (() => {
    location.href = '../pages/unregisterMember.html';
}))