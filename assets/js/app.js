var chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark-theme');
});

hamburgerMenu();

function hamburgerMenu() {
    var burger = document.querySelector(".burger")
    var nav = document.querySelector("#"+burger.dataset.target)
    burger.addEventListener('click', function(){
        burger.classList.toggle('is-active');
        nav.classList.toggle('is-active')
    })
}
