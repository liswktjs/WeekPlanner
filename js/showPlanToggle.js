const todayBtn = document.querySelector('.today-toggle-btn');
const weekBtn = document.querySelector('.week-toggle-btn');

const todayContent = document.querySelector('.today-plan-plus');
const weekContent = document.querySelector('.week-plan-plus');

todayBtn.addEventListener('click', () => {
    todayContent.classList.toggle('is-active');
})

weekBtn.addEventListener('click', () => {
    weekContent.classList.toggle('is-active');
})