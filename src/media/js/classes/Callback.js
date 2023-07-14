// Callback is equal to Signal
export default function Callback() {
	const handlers = [];

	const self = this;
	const callShim = function () {
		call.apply(self, arguments);
	};
	function _throwError() {
		throw new TypeError('Callback handler must be function!');
	}

	function add(handler, context) {
		if (typeof handler !== 'function') {
			this._throwError();
			return;
		}
		handlers.push({ handler: handler, context: context });
		return handler;
	}

	function remove(handler) {
		if (typeof handler !== 'function') {
			this._throwError();
			return;
		}
		const totalHandlers = handlers.length;
		for (let k = 0; k < totalHandlers; k++) {
			if (handler === handlers[k].handler) {
				this.handlers.splice(k, 1);
				return handler;
			}
		}
	}

	const call = function () {
		const totalHandlers = handlers.length;
		for (let k = 0; k < totalHandlers; k++) {
			const handlerData = handlers[k];
			handlerData.handler.apply(handlerData.context || null, arguments);
		}
	};

	function delayedCall(delay = 16) {
		const self = this;
		delay = delay || 100;

		const args = Array.prototype.slice.call(arguments);
		args.shift();

		setTimeout(function () {
			self.call.apply(self, args);
		}, delay);
	}
}

Callback.prototype = {};
