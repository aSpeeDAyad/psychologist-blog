import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, {} from 'swiper/bundle';
const swiper = new Swiper('.swiper', {
	autoplay: {
		delay: 2000,
	},
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		// dynamicBullets: true,
		// renderBullet: 
		// 	function(index, className){
		// 		return '<span class="' + className + '">' + (index + 1) + '</span>';
		// 	},
	},

});