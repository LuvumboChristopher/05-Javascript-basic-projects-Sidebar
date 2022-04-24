const sidebar = document.querySelector('.sidebar');
const menuBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', ()=> {
    sidebar.classList.toggle('show-sidebar');
})

closeBtn.addEventListener('click', ()=> {
    sidebar.classList.remove('show-sidebar');
})