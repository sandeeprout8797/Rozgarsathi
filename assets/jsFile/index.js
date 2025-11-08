const menuButton = document.querySelector('.menuButton');
const navDiv = document.querySelector('.navigationButtonDivision');

menuButton.addEventListener('click', function() {

    if (navDiv.classList.contains('visible')) {
    navDiv.classList.remove('visible');
    navDiv.style.display = 'none';
    } else {
    navDiv.classList.add('visible');
    navDiv.style.display = 'block';
    }
});