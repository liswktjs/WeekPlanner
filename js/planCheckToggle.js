const todayPlanToggle = document.querySelector('.today-plan-check');
const weekPlanToggle = document.querySelector('.week-plan-check');

todayPlanToggle.addEventListener("click", ()=>{
    todayPlanToggle.classList.toggle('is-active');
})

weekPlanToggle.addEventListener("click",() => {
    weekPlanToggle.classList.toggle('is-active');
})