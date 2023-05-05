const dom = require('../utils/DOM');

import ShowHelper2 from '../helpers/ShowHelper2';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { from, gsap } from 'gsap';
// require('fullpage.js/vendors/scrolloverflow');
// import fullpage from 'fullpage.js';
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

function Animations() {
	const delay = 0;
	// if (window.innerWidth >= 1024) {
	// 	const sections = document.querySelectorAll('.animated-section');
	// 	var fullPageInstance = new fullpage('.fullpage', {
	// 		scrollOverflow: true,
	// 		offsetSections: true,
	// 		bigSectionsDestination: top,
	// 		licenseKey: '3A5AE2BE-1BFA45B0-A3D3D611-C6EE3A3D',
	// 		onLeave: function(origin, nextIndex, direction) {
	// 			//leaving 1st section
	// 			if (origin.index == 1) {
	// 				$('.agencies-small')
	// 					.removeClass('hide')
	// 					.addClass('fixed');
	// 			}
	// 			//back to the 1st section
	// 			if (nextIndex.index == 1 || nextIndex.index == 0) {
	// 				$('.agencies-small')
	// 					.removeClass('fixed')
	// 					.addClass('hide');
	// 			}
	// 			console.log(origin);
	// 		},
	// 		afterLoad: function(anchorLink, index) {
	// 			$('.fp-section.active')
	// 				.find('.animated-title')
	// 				.addClass('_active');
	// 			sections.forEach(section => {
	// 				let imgs = section.querySelectorAll('.animated-image');
	// 				imgs.forEach(img => {
	// 					ScrollTrigger.create({
	// 						trigger: section,
	// 						start: 'top top+=25%',
	// 						toggleClass: {
	// 							targets: img,
	// 							className: '_active',
	// 						},
	// 						markers: false,

	// 						once: true,
	// 					});
	// 				});
	// 				let title = section.querySelector('.animated-title');
	// 			});

	// 			ShowHelper2.setViewpostScale(1);

	// 			const $targets = $('[data-auto-show]');

	// 			if ($targets.length) {
	// 				TweenMax.set($targets, {
	// 					alpha: 0,
	// 				});

	// 				ShowHelper2.staggerWatch(
	// 					$targets,
	// 					function(state, target) {
	// 						if (state) {
	// 							target.removeAttribute('data-auto-show');

	// 							ShowHelper2.unwatch(target);
	// 							TweenMax.fromTo(
	// 								target,
	// 								0.855,
	// 								{
	// 									y: 15,
	// 									alpha: 0,
	// 								},
	// 								{
	// 									y: 0,
	// 									alpha: 1,
	// 									force3D: true,
	// 									delay: delay,
	// 									clearProps: 'all',
	// 								}
	// 							);
	// 						}
	// 					},
	// 					true,
	// 					false,
	// 					55
	// 				);
	// 			}

	// 			const $targetsRight = $('[data-auto-show-right]');
	// 			if ($targetsRight.length) {
	// 				TweenMax.set($targetsRight, {
	// 					alpha: 0,
	// 				});
	// 				ShowHelper2.staggerWatch(
	// 					$targetsRight,
	// 					function(state, target) {
	// 						if (state) {
	// 							target.removeAttribute('data-auto-show-right');
	// 							ShowHelper2.unwatch(target);
	// 							TweenMax.fromTo(
	// 								target,
	// 								0.855,
	// 								{
	// 									x: 15,
	// 									alpha: 0,
	// 								},
	// 								{
	// 									x: 0,
	// 									alpha: 1,
	// 									force3D: true,
	// 									delay: delay,
	// 									clearProps: 'all',
	// 								}
	// 							);
	// 						}
	// 					},
	// 					true,
	// 					false,
	// 					55
	// 				);
	// 			}
	// 			const $targetsLeft = $('[data-auto-show-left]');

	// 			if ($targetsLeft.length) {
	// 				TweenMax.set($targetsLeft, {
	// 					alpha: 0,
	// 				});
	// 				ShowHelper2.staggerWatch(
	// 					$targetsLeft,
	// 					function(state, target) {
	// 						if (state) {
	// 							target.removeAttribute('data-auto-show-left');
	// 							ShowHelper2.unwatch(target);
	// 							TweenMax.fromTo(
	// 								target,
	// 								0.855,
	// 								{
	// 									x: -15,
	// 									alpha: 0,
	// 								},
	// 								{
	// 									x: 0,
	// 									alpha: 1,
	// 									force3D: true,
	// 									delay: delay,
	// 									clearProps: 'all',
	// 								}
	// 							);
	// 						}
	// 					},
	// 					true,
	// 					false,
	// 					55
	// 				);
	// 			}

	// 			ShowHelper2.start();
	// 		},
	// 	});
	// } else {
	const sections = document.querySelectorAll('.animated-section');
	var scrollSunTl = gsap.timeline();
	scrollSunTl.to('.agencies-small', {
		scrollTrigger: {
			trigger: '.agencies',
			start: 'top+=70 center',
			end: 'bottom+=17000 top',
			toggleClass: {
				targets: '.agencies-small',
				className: 'fixed',
			},
			markers: false,
		},
	});

	sections.forEach(section => {
		let imgs = section.querySelectorAll('.animated-image');
		imgs.forEach(img => {
			ScrollTrigger.create({
				trigger: section,
				start: 'top top+=25%',
				toggleClass: {
					targets: img,
					className: '_active',
				},
				markers: false,

				once: true,
			});
		});
		let titles = section.querySelectorAll('.animated-title');
		titles.forEach(title => {
			ScrollTrigger.create({
				trigger: section,
				start: 'top top+=25%',
				toggleClass: {
					targets: title,
					className: '_active',
				},
				markers: false,

				once: true,
			});
		});
	});

	ShowHelper2.setViewpostScale(1);

	const $targets = $('[data-auto-show]');

	if ($targets.length) {
		TweenMax.set($targets, {
			alpha: 0,
		});

		ShowHelper2.staggerWatch(
			$targets,
			function(state, target) {
				if (state) {
					target.removeAttribute('data-auto-show');

					ShowHelper2.unwatch(target);
					TweenMax.fromTo(
						target,
						0.855,
						{
							y: 15,
							alpha: 0,
						},
						{
							y: 0,
							alpha: 1,
							force3D: true,
							delay: delay,
							clearProps: 'all',
						}
					);
				}
			},
			true,
			false,
			55
		);
	}

	const $targetsRight = $('[data-auto-show-right]');
	if ($targetsRight.length) {
		TweenMax.set($targetsRight, {
			alpha: 0,
		});
		ShowHelper2.staggerWatch(
			$targetsRight,
			function(state, target) {
				if (state) {
					target.removeAttribute('data-auto-show-right');
					ShowHelper2.unwatch(target);
					TweenMax.fromTo(
						target,
						0.855,
						{
							x: 15,
							alpha: 0,
						},
						{
							x: 0,
							alpha: 1,
							force3D: true,
							delay: delay,
							clearProps: 'all',
						}
					);
				}
			},
			true,
			false,
			55
		);
	}
	const $targetsLeft = $('[data-auto-show-left]');

	if ($targetsLeft.length) {
		TweenMax.set($targetsLeft, {
			alpha: 0,
		});
		ShowHelper2.staggerWatch(
			$targetsLeft,
			function(state, target) {
				if (state) {
					target.removeAttribute('data-auto-show-left');
					ShowHelper2.unwatch(target);
					TweenMax.fromTo(
						target,
						0.855,
						{
							x: -15,
							alpha: 0,
						},
						{
							x: 0,
							alpha: 1,
							force3D: true,
							delay: delay,
							clearProps: 'all',
						}
					);
				}
			},
			true,
			false,
			55
		);
	}
	ShowHelper2.start();
}
// }

export default new Animations();
