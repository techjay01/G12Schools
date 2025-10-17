const menuIcon = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.querySelector('.close-sidebar');

menuIcon.addEventListener('click', () => {
sidebar.classList.toggle('active');
closeSidebar.classList.toggle('active');
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('active');
    closeSidebar.classList.remove('active');

});

document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menuIcon.contains(e.target) && !closeSidebar.contains(e.target)) {
        sidebar.classList.remove('active');
        closeSidebar.classList.remove('active');
    }
});