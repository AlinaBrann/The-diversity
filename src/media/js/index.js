global.$ = global.jQuery = require('jquery');
import { TweenMax } from 'gsap';

import { Draggable } from 'gsap/Draggable';
global.TweenMax = TweenMax;

global.Draggable = Draggable;
require('./utils/jqExtensions');
require('slick-carousel');

// prettier-ignore
global.ProjectName = new function ProjectName() { // eslint-disable-line
	this.env = require('./utils/ENV');
	this.dom = require('./utils/DOM');
	this.utils = require('./utils/Utils');

	this.classes = {
		Callback: require('./classes/Callback')
	};

	this.helpers = {};
	this.modules = {
		Popups: require('./modules/Popups'),
		
		SlickSliders: require('./modules/SlickSliders'),
		Animations: require('./modules/Animations'),
	};

	// Startup
	$(() => {
		// Remove _loading modificator
		this.dom.$html.removeClass('_loading');

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

if (module.hot) {
	module.hot.accept();
}
