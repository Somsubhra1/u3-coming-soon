let revealBtn = document.querySelector('.reveal_btn'),
left = document.querySelector('.left'),
right = document.querySelector('.right');

revealBtn.addEventListener('click', () => {
    left.style.left = "-50%";
    right.style.left = "100%";
});