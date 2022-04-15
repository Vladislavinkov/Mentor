'use strict';


let hide = document.querySelector('.hide');
let btns = document.querySelectorAll('.click');


btns.forEach(function (item) {
	item.addEventListener('click', (e)=>{
		let close = e.path[0].attributes[1].nodeValue = 'image/courses-page/faq/close.png';
		e.path[2].childNodes[3].classList.toggle('hide');
		

	});
});