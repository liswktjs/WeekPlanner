const myinfo = document.querySelector('.myinfobtn');
const myProfile = document.querySelector('.myprofilebtn');

myinfo.addEventListener('click', (()=>{
    location.href= "../pages/myPage.html";
}))

myProfile.addEventListener('click', (() => {
    location.href = "../pages/myProfile.html";
}))