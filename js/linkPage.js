const myinfo = document.querySelector('.myinfobtn');
const myProfile = document.querySelector('.myprofilebtn');
const notice = document.querySelector('.noticebtn');

myinfo.addEventListener('click', (()=>{
    location.href= "../pages/myPage.html";
}))

myProfile.addEventListener('click', (() => {
    location.href = "../pages/myProfile.html";
}))

notice.addEventListener('click', (() => {
    location.href = "../pages/notice.html";
}))