const sideBtn = document.querySelector('.sideBtn');
const mypage = document.querySelector('.mypage');
const backbtn = document.querySelector('.backbtn');

function pageChange(){
    mypage.classList.toggle("is-active");
}
sideBtn.addEventListener('click',pageChange);
backbtn.addEventListener('click',pageChange);