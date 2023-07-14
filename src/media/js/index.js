import global from 'global';
import $ from 'jquery';
import { TweenMax } from 'gsap';
import env from './utils/ENV.js';
import { Draggable } from 'gsap/Draggable.js';
import dom from './utils/DOM.js';
import Popups from './modules/Popups.js';
import SlickSliders from './modules/SlickSliders.js';
import Animations from './modules/Animations.js';
// import Utils from './utils/Utils.js';
// import * as Callback from './classes/Callback.js';
// global.TweenMax = TweenMax;

// global.Draggable = Draggable;
// require('./utils/jqExtensions');
import 'slick-carousel';

// prettier-ignore
global.ProjectName = new function ProjectName() { // eslint-disable-line
	this.env = env;
	this.dom = dom;
	// this.utils = Utils;

	// this.classes = {
	// 	Callback: Callback
	// };

	this.helpers = {};
	this.modules = {
		Popups: Popups,
		
		SlickSliders: SlickSliders,
		Animations: Animations,
	};

	// Startup
	$(() => {
		// Remove _loading modificator
		this.dom.$html.removeClass('_loading');
		console.log(SlickSliders);
		let opener = $('.agency-popup-opener')

		opener.on('click', function(){
			$(this).parents('.agency').siblings('.agency').removeClass('_active')
			$(this).parents('.agency').toggleClass('_active');
		});
		$(document).on('mouseup',function (e) {
			if (opener.parents('.agency').has(e.target).length === 0){
				opener.parents('.agency').siblings('.agency').removeClass('_active')
			}
		});
		var copyright = new Date().getFullYear();
		$('.footer__copyright span').text(copyright);

		//methods
		
	
	});
}();

// if (module.hot) {
// 	module.hot.accept();
// }
