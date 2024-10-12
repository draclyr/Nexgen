const hamburger = document.querySelector('.myheader .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.myheader .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.myheader .nav-bar .nav-list ul li a');
const myheader = document.querySelector('.myheader.westyle');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		myheader.style.backgroundColor = '#1E3E62';
	} else {
		myheader.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

/* create by Hesam Shahmoradi ( Draclyr ) */