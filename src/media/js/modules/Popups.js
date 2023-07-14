import Callback from '../classes/Callback.js';
import $ from 'jquery';
import dom from '../utils/DOM.js';
import { TweenMax } from 'gsap';
// const BodyLocker = require('../helpers/BodyLocker');
// const SlickSliders = require('./SlickSliders');
console.log(Callback);
function Popups() {
	const onOpen = Callback;
	const onClose = Callback;
	const onCloseStart = Callback;

	let opened = false;
	let openedClass = '';

	let $openers = $('[data-popup-opener]').removeClass('_active');
	let $wrapper = $('.popups-wrapper').addClass('no-pe').hide();

	let $popups = $('[data-popup]').hide();

	let $activePopup = null;
	let activePopupName = '';

	let self = this;

	// self.open('map');

	dom.$body.on('click', '[data-popup-opener]', function (e) {
		e.preventDefault();

		let $this = $(this);

		open($this.attr('data-popup-opener'));
		$this.addClass('_active');

		$('.popup-slider').slick('refresh');
	});

	const $ytPopup = $popups.filter('[data-popup="yt-video"]');
	dom.$body.on('click', '[data-yt-video-popup]', function (e) {
		e.preventDefault();

		let $this = $(this);

		open('yt-video');
		//$this.addClass('_active');
		$ytPopup.find('.video').html(`
		<iframe
			id="player"
			type="text/html"
			width="100%"
			height="100%"
			src="http://www.youtube.com/embed/${$this.attr('data-yt-video-popup')}"
			frameborder="0"
			allowfullscreen>
		</iframe>`);
	});

	dom.$body.on('click', '[data-popup-toggler]', function (e) {
		e.preventDefault();

		let $this = $(this);

		if (opened) {
			close();
		} else {
			open($this.attr('data-popup-toggler'));
			$this.addClass('_active');
		}
	});

	$('[data-popup-closer]').click(function (e) {
		e.preventDefault();
		close();
	});

	$wrapper.click(function (e) {
		if (opened) {
			let $target = $(e.target);
			if (!($activePopup.has($target).length || $activePopup.is($target))) {
				close();
			}
		}
	});

	dom.$window.on('keydown', function (e) {
		if (opened && e.keyCode == 27) {
			close();
		}
	});
	function getOpenedPopup() {
		if (opened) {
			return $activePopup;
		} else {
			return null;
		}
	}

	function isOpened() {
		return opened;
	}

	function open(name) {
		if (activePopupName == name) {
			return;
		}

		if (opened) {
			this.close(true);
		}

		let $popup = $('[data-popup="' + name + '"]');
		if (!$popup.length) {
			return;
		}

		opened = true;
		$activePopup = $popup.show();
		activePopupName = name;
		$openers.removeClass('_active');

		$wrapper.addClass('_' + name);

		TweenMax.to($wrapper.show().removeClass('no-pe'), 0.35, { autoAlpha: 1, overwrite: true });
		TweenMax.fromTo($activePopup, 0.35, { autoAlpha: 0, scale: 0.98 }, { autoAlpha: 1, scale: 1 });

		dom.$html.addClass('_popup-opened');

		openedClass = '_popup-opened-' + name;
		dom.$html.addClass(openedClass);

		// BodyLocker.lock();

		// SlickSliders.update();

		onOpen.call();
	}

	function close(immediate) {
		if (opened) {
			opened = false;

			$wrapper.removeClass('_' + activePopupName);

			onCloseStart.call(activePopupName);

			activePopupName = '';

			let self = this;

			TweenMax.to($wrapper.addClass('no-pe'), 0.35, { autoAlpha: 0, display: 'none' });
			TweenMax.to($activePopup, immediate ? 0 : 0.35, {
				autoAlpha: 0,
				scale: 0.98,
				display: 'none',
				onComplete: function () {
					onClose.call();
				},
			});

			$activePopup.find('[data-popup-target-frame]').attr('src', '');

			dom.$html.removeClass('_popup-opened');
			$openers.removeClass('_active');

			if (openedClass != '') {
				dom.$html.removeClass(openedClass);
				openedClass = '';
			}

			$ytPopup.html('');
			// BodyLocker.unlock();
		}
	}
}

export default Popups();
