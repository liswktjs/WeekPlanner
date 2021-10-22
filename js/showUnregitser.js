const unregisterbtn = document.querySelector('.unregister-part1-btn');
const unregisterContent = document.querySelector('.unregister-part2')

unregisterbtn.addEventListener("click", () => {
    unregisterContent.classList.add('is-active');
})