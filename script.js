const searchbtn = document.querySelector('.pic');
const textbox = document.getElementById('search');
const input = document.querySelector('.input');

searchbtn.addEventListener('click', () => {
    textbox.classList.toggle('hidden')
    input.focus()
})