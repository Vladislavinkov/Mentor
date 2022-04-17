'use strict';


let hide = document.querySelector('.hide');
let btns = document.querySelectorAll('.click');
// сами табы
let tabs = document.querySelectorAll('.nav-menu');
// родитель табов
let content = document.querySelector('.menu-lists');


//  скрываем класс актив
function hideTab() {
	tabs.forEach(item => {
		item.classList.remove('active');
	});
}
//  показываем класс актив
function showTab(i) {
	tabs[i].classList.add('active');
}
hideTab();


if(window.location.href === 'http://127.0.0.1:5500/courses.html'){
	showTab(2);
}
if(window.location.href === 'http://127.0.0.1:5500/index.html'){
	showTab(1);
}

content.addEventListener('click', (e) => {
	
	const target = e.target;

	// window.location.href = 'URL2';
	// console.log(e.path[0].href);

	tabs.forEach((item, i) => {
		// e.preventDefault();
		if (target == item || target.parentNode == item) {

			// if (item.childNodes[0].href === 'http://127.0.0.1:5500/courses.html') {
			// 	// window.location.href = 'http://127.0.0.1:5500/courses.html';
				
			// }
			// if (item.childNodes[0].href === 'http://127.0.0.1:5500/index.html') {
			// 	window.location.href = 'http://127.0.0.1:5500/index.html';
			// }
			hideTab();
			showTab(i);


		}
	})
})




btns.forEach(function (item) {
	item.addEventListener('click', (e) => {
		// let src = e.path[0].attributes[1].textContent;
		// console.log(src);
		// console.log(e.path[2].childNodes[3].className);
		e.path[2].childNodes[3].classList.toggle('hide');

		// if(e.path[2].childNodes[3].className === 'h2 hide'){
		// 	return src = 'image/courses-page/faq/close.png';
		// }

		// if(e.path[2].childNodes[3].className === 'h2'){
		// 	return src = 'image/courses-page/faq/open.png';
		// }
	});
});