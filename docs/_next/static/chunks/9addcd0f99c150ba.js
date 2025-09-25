(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	'object' == typeof document ? document.currentScript : void 0,
	4185,
	(e, t, n) => {
		!(function () {
			var e = {
					229: function (e) {
						var t,
							n,
							r,
							o = (e.exports = {});
						function u() {
							throw Error('setTimeout has not been defined');
						}
						function i() {
							throw Error('clearTimeout has not been defined');
						}
						try {
							t = 'function' == typeof setTimeout ? setTimeout : u;
						} catch (e) {
							t = u;
						}
						try {
							n = 'function' == typeof clearTimeout ? clearTimeout : i;
						} catch (e) {
							n = i;
						}
						function a(e) {
							if (t === setTimeout) return setTimeout(e, 0);
							if ((t === u || !t) && setTimeout) return (t = setTimeout), setTimeout(e, 0);
							try {
								return t(e, 0);
							} catch (n) {
								try {
									return t.call(null, e, 0);
								} catch (n) {
									return t.call(this, e, 0);
								}
							}
						}
						var s = [],
							l = !1,
							c = -1;
						function f() {
							l && r && ((l = !1), r.length ? (s = r.concat(s)) : (c = -1), s.length && d());
						}
						function d() {
							if (!l) {
								var e = a(f);
								l = !0;
								for (var t = s.length; t; ) {
									for (r = s, s = []; ++c < t; ) r && r[c].run();
									(c = -1), (t = s.length);
								}
								(r = null),
									(l = !1),
									(function (e) {
										if (n === clearTimeout) return clearTimeout(e);
										if ((n === i || !n) && clearTimeout) return (n = clearTimeout), clearTimeout(e);
										try {
											n(e);
										} catch (t) {
											try {
												return n.call(null, e);
											} catch (t) {
												return n.call(this, e);
											}
										}
									})(e);
							}
						}
						function p(e, t) {
							(this.fun = e), (this.array = t);
						}
						function y() {}
						(o.nextTick = function (e) {
							var t = Array(arguments.length - 1);
							if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
							s.push(new p(e, t)), 1 !== s.length || l || a(d);
						}),
							(p.prototype.run = function () {
								this.fun.apply(null, this.array);
							}),
							(o.title = 'browser'),
							(o.browser = !0),
							(o.env = {}),
							(o.argv = []),
							(o.version = ''),
							(o.versions = {}),
							(o.on = y),
							(o.addListener = y),
							(o.once = y),
							(o.off = y),
							(o.removeListener = y),
							(o.removeAllListeners = y),
							(o.emit = y),
							(o.prependListener = y),
							(o.prependOnceListener = y),
							(o.listeners = function (e) {
								return [];
							}),
							(o.binding = function (e) {
								throw Error('process.binding is not supported');
							}),
							(o.cwd = function () {
								return '/';
							}),
							(o.chdir = function (e) {
								throw Error('process.chdir is not supported');
							}),
							(o.umask = function () {
								return 0;
							});
					},
				},
				n = {};
			function r(t) {
				var o = n[t];
				if (void 0 !== o) return o.exports;
				var u = (n[t] = { exports: {} }),
					i = !0;
				try {
					e[t](u, u.exports, r), (i = !1);
				} finally {
					i && delete n[t];
				}
				return u.exports;
			}
			(r.ab =
				'/ROOT/node_modules/.pnpm/next@15.5.4_@babel+core@7.28.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/compiled/process/'),
				(t.exports = r(229));
		})();
	},
	6512,
	(e, t, n) => {
		'use strict';
		var r, o;
		t.exports =
			(null == (r = e.g.process) ? void 0 : r.env) && 'object' == typeof (null == (o = e.g.process) ? void 0 : o.env)
				? e.g.process
				: e.r(4185);
	},
	7404,
	(e, t, n) => {
		'use strict';
		var r = Symbol.for('react.transitional.element');
		function o(e, t, n) {
			var o = null;
			if ((void 0 !== n && (o = '' + n), void 0 !== t.key && (o = '' + t.key), 'key' in t))
				for (var u in ((n = {}), t)) 'key' !== u && (n[u] = t[u]);
			else n = t;
			return { $$typeof: r, type: e, key: o, ref: void 0 !== (t = n.ref) ? t : null, props: n };
		}
		(n.Fragment = Symbol.for('react.fragment')), (n.jsx = o), (n.jsxs = o);
	},
	5280,
	(e, t, n) => {
		'use strict';
		t.exports = e.r(7404);
	},
	715,
	(e, t, n) => {
		'use strict';
		var r = e.i(6512),
			o = Symbol.for('react.transitional.element'),
			u = Symbol.for('react.portal'),
			i = Symbol.for('react.fragment'),
			a = Symbol.for('react.strict_mode'),
			s = Symbol.for('react.profiler'),
			l = Symbol.for('react.consumer'),
			c = Symbol.for('react.context'),
			f = Symbol.for('react.forward_ref'),
			d = Symbol.for('react.suspense'),
			p = Symbol.for('react.memo'),
			y = Symbol.for('react.lazy'),
			m = Symbol.iterator,
			h = {
				isMounted: function () {
					return !1;
				},
				enqueueForceUpdate: function () {},
				enqueueReplaceState: function () {},
				enqueueSetState: function () {},
			},
			_ = Object.assign,
			v = {};
		function b(e, t, n) {
			(this.props = e), (this.context = t), (this.refs = v), (this.updater = n || h);
		}
		function g() {}
		function w(e, t, n) {
			(this.props = e), (this.context = t), (this.refs = v), (this.updater = n || h);
		}
		(b.prototype.isReactComponent = {}),
			(b.prototype.setState = function (e, t) {
				if ('object' != typeof e && 'function' != typeof e && null != e)
					throw Error(
						'takes an object of state variables to update or a function which returns an object of state variables.',
					);
				this.updater.enqueueSetState(this, e, t, 'setState');
			}),
			(b.prototype.forceUpdate = function (e) {
				this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
			}),
			(g.prototype = b.prototype);
		var E = (w.prototype = new g());
		(E.constructor = w), _(E, b.prototype), (E.isPureReactComponent = !0);
		var j = Array.isArray,
			S = { H: null, A: null, T: null, S: null, V: null },
			O = Object.prototype.hasOwnProperty;
		function x(e, t, n, r, u, i) {
			return { $$typeof: o, type: e, key: t, ref: void 0 !== (n = i.ref) ? n : null, props: i };
		}
		function P(e) {
			return 'object' == typeof e && null !== e && e.$$typeof === o;
		}
		var T = /\/+/g;
		function k(e, t) {
			var n, r;
			return 'object' == typeof e && null !== e && null != e.key
				? ((n = '' + e.key),
					(r = { '=': '=0', ':': '=2' }),
					'$' +
						n.replace(/[=:]/g, function (e) {
							return r[e];
						}))
				: t.toString(36);
		}
		function C() {}
		function N(e, t, n) {
			if (null == e) return e;
			var r = [],
				i = 0;
			return (
				!(function e(t, n, r, i, a) {
					var s,
						l,
						c,
						f = typeof t;
					('undefined' === f || 'boolean' === f) && (t = null);
					var d = !1;
					if (null === t) d = !0;
					else
						switch (f) {
							case 'bigint':
							case 'string':
							case 'number':
								d = !0;
								break;
							case 'object':
								switch (t.$$typeof) {
									case o:
									case u:
										d = !0;
										break;
									case y:
										return e((d = t._init)(t._payload), n, r, i, a);
								}
						}
					if (d)
						return (
							(a = a(t)),
							(d = '' === i ? '.' + k(t, 0) : i),
							j(a)
								? ((r = ''),
									null != d && (r = d.replace(T, '$&/') + '/'),
									e(a, n, r, '', function (e) {
										return e;
									}))
								: null != a &&
									(P(a) &&
										((s = a),
										(l = r + (null == a.key || (t && t.key === a.key) ? '' : ('' + a.key).replace(T, '$&/') + '/') + d),
										(a = x(s.type, l, void 0, void 0, void 0, s.props))),
									n.push(a)),
							1
						);
					d = 0;
					var p = '' === i ? '.' : i + ':';
					if (j(t)) for (var h = 0; h < t.length; h++) (f = p + k((i = t[h]), h)), (d += e(i, n, r, f, a));
					else if (
						'function' ==
						typeof (h =
							null === (c = t) || 'object' != typeof c
								? null
								: 'function' == typeof (c = (m && c[m]) || c['@@iterator'])
									? c
									: null)
					)
						for (t = h.call(t), h = 0; !(i = t.next()).done; ) (f = p + k((i = i.value), h++)), (d += e(i, n, r, f, a));
					else if ('object' === f) {
						if ('function' == typeof t.then)
							return e(
								(function (e) {
									switch (e.status) {
										case 'fulfilled':
											return e.value;
										case 'rejected':
											throw e.reason;
										default:
											switch (
												('string' == typeof e.status
													? e.then(C, C)
													: ((e.status = 'pending'),
														e.then(
															function (t) {
																'pending' === e.status && ((e.status = 'fulfilled'), (e.value = t));
															},
															function (t) {
																'pending' === e.status && ((e.status = 'rejected'), (e.reason = t));
															},
														)),
												e.status)
											) {
												case 'fulfilled':
													return e.value;
												case 'rejected':
													throw e.reason;
											}
									}
									throw e;
								})(t),
								n,
								r,
								i,
								a,
							);
						throw Error(
							'Objects are not valid as a React child (found: ' +
								('[object Object]' === (n = String(t)) ? 'object with keys {' + Object.keys(t).join(', ') + '}' : n) +
								'). If you meant to render a collection of children, use an array instead.',
						);
					}
					return d;
				})(e, r, '', '', function (e) {
					return t.call(n, e, i++);
				}),
				r
			);
		}
		function M(e) {
			if (-1 === e._status) {
				var t = e._result;
				(t = t()).then(
					function (t) {
						(0 === e._status || -1 === e._status) && ((e._status = 1), (e._result = t));
					},
					function (t) {
						(0 === e._status || -1 === e._status) && ((e._status = 2), (e._result = t));
					},
				),
					-1 === e._status && ((e._status = 0), (e._result = t));
			}
			if (1 === e._status) return e._result.default;
			throw e._result;
		}
		var R =
			'function' == typeof reportError
				? reportError
				: function (e) {
						if ('object' == typeof window && 'function' == typeof window.ErrorEvent) {
							var t = new window.ErrorEvent('error', {
								bubbles: !0,
								cancelable: !0,
								message:
									'object' == typeof e && null !== e && 'string' == typeof e.message ? String(e.message) : String(e),
								error: e,
							});
							if (!window.dispatchEvent(t)) return;
						} else if ('object' == typeof r.default && 'function' == typeof r.default.emit)
							return void r.default.emit('uncaughtException', e);
						console.error(e);
					};
		function A() {}
		(n.Children = {
			map: N,
			forEach: function (e, t, n) {
				N(
					e,
					function () {
						t.apply(this, arguments);
					},
					n,
				);
			},
			count: function (e) {
				var t = 0;
				return (
					N(e, function () {
						t++;
					}),
					t
				);
			},
			toArray: function (e) {
				return (
					N(e, function (e) {
						return e;
					}) || []
				);
			},
			only: function (e) {
				if (!P(e)) throw Error('React.Children.only expected to receive a single React element child.');
				return e;
			},
		}),
			(n.Component = b),
			(n.Fragment = i),
			(n.Profiler = s),
			(n.PureComponent = w),
			(n.StrictMode = a),
			(n.Suspense = d),
			(n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = S),
			(n.__COMPILER_RUNTIME = {
				__proto__: null,
				c: function (e) {
					return S.H.useMemoCache(e);
				},
			}),
			(n.cache = function (e) {
				return function () {
					return e.apply(null, arguments);
				};
			}),
			(n.cloneElement = function (e, t, n) {
				if (null == e) throw Error('The argument must be a React element, but you passed ' + e + '.');
				var r = _({}, e.props),
					o = e.key,
					u = void 0;
				if (null != t)
					for (i in (void 0 !== t.ref && (u = void 0), void 0 !== t.key && (o = '' + t.key), t))
						O.call(t, i) &&
							'key' !== i &&
							'__self' !== i &&
							'__source' !== i &&
							('ref' !== i || void 0 !== t.ref) &&
							(r[i] = t[i]);
				var i = arguments.length - 2;
				if (1 === i) r.children = n;
				else if (1 < i) {
					for (var a = Array(i), s = 0; s < i; s++) a[s] = arguments[s + 2];
					r.children = a;
				}
				return x(e.type, o, void 0, void 0, u, r);
			}),
			(n.createContext = function (e) {
				return (
					((e = {
						$$typeof: c,
						_currentValue: e,
						_currentValue2: e,
						_threadCount: 0,
						Provider: null,
						Consumer: null,
					}).Provider = e),
					(e.Consumer = { $$typeof: l, _context: e }),
					e
				);
			}),
			(n.createElement = function (e, t, n) {
				var r,
					o = {},
					u = null;
				if (null != t)
					for (r in (void 0 !== t.key && (u = '' + t.key), t))
						O.call(t, r) && 'key' !== r && '__self' !== r && '__source' !== r && (o[r] = t[r]);
				var i = arguments.length - 2;
				if (1 === i) o.children = n;
				else if (1 < i) {
					for (var a = Array(i), s = 0; s < i; s++) a[s] = arguments[s + 2];
					o.children = a;
				}
				if (e && e.defaultProps) for (r in (i = e.defaultProps)) void 0 === o[r] && (o[r] = i[r]);
				return x(e, u, void 0, void 0, null, o);
			}),
			(n.createRef = function () {
				return { current: null };
			}),
			(n.forwardRef = function (e) {
				return { $$typeof: f, render: e };
			}),
			(n.isValidElement = P),
			(n.lazy = function (e) {
				return { $$typeof: y, _payload: { _status: -1, _result: e }, _init: M };
			}),
			(n.memo = function (e, t) {
				return { $$typeof: p, type: e, compare: void 0 === t ? null : t };
			}),
			(n.startTransition = function (e) {
				var t = S.T,
					n = {};
				S.T = n;
				try {
					var r = e(),
						o = S.S;
					null !== o && o(n, r), 'object' == typeof r && null !== r && 'function' == typeof r.then && r.then(A, R);
				} catch (e) {
					R(e);
				} finally {
					S.T = t;
				}
			}),
			(n.unstable_useCacheRefresh = function () {
				return S.H.useCacheRefresh();
			}),
			(n.use = function (e) {
				return S.H.use(e);
			}),
			(n.useActionState = function (e, t, n) {
				return S.H.useActionState(e, t, n);
			}),
			(n.useCallback = function (e, t) {
				return S.H.useCallback(e, t);
			}),
			(n.useContext = function (e) {
				return S.H.useContext(e);
			}),
			(n.useDebugValue = function () {}),
			(n.useDeferredValue = function (e, t) {
				return S.H.useDeferredValue(e, t);
			}),
			(n.useEffect = function (e, t, n) {
				var r = S.H;
				if ('function' == typeof n) throw Error('useEffect CRUD overload is not enabled in this build of React.');
				return r.useEffect(e, t);
			}),
			(n.useId = function () {
				return S.H.useId();
			}),
			(n.useImperativeHandle = function (e, t, n) {
				return S.H.useImperativeHandle(e, t, n);
			}),
			(n.useInsertionEffect = function (e, t) {
				return S.H.useInsertionEffect(e, t);
			}),
			(n.useLayoutEffect = function (e, t) {
				return S.H.useLayoutEffect(e, t);
			}),
			(n.useMemo = function (e, t) {
				return S.H.useMemo(e, t);
			}),
			(n.useOptimistic = function (e, t) {
				return S.H.useOptimistic(e, t);
			}),
			(n.useReducer = function (e, t, n) {
				return S.H.useReducer(e, t, n);
			}),
			(n.useRef = function (e) {
				return S.H.useRef(e);
			}),
			(n.useState = function (e) {
				return S.H.useState(e);
			}),
			(n.useSyncExternalStore = function (e, t, n) {
				return S.H.useSyncExternalStore(e, t, n);
			}),
			(n.useTransition = function () {
				return S.H.useTransition();
			}),
			(n.version = '19.1.1');
	},
	4431,
	(e, t, n) => {
		'use strict';
		t.exports = e.r(715);
	},
	2879,
	(e, t, n) => {
		'use strict';
		n._ = function (e) {
			return e && e.__esModule ? e : { default: e };
		};
	},
	2567,
	(e, t, n) => {
		'use strict';
		Object.defineProperty(n, '__esModule', { value: !0 }),
			Object.defineProperty(n, 'HeadManagerContext', {
				enumerable: !0,
				get: function () {
					return r;
				},
			});
		let r = e.r(2879)._(e.r(4431)).default.createContext({});
	},
	7969,
	(e, t, n) => {
		'use strict';
		Object.defineProperty(n, '__esModule', { value: !0 }),
			Object.defineProperty(n, 'warnOnce', {
				enumerable: !0,
				get: function () {
					return r;
				},
			});
		let r = (e) => {};
	},
	7602,
	(e, t, n) => {
		'use strict';
		function r(e) {
			if ('function' != typeof WeakMap) return null;
			var t = new WeakMap(),
				n = new WeakMap();
			return (r = function (e) {
				return e ? n : t;
			})(e);
		}
		n._ = function (e, t) {
			if (!t && e && e.__esModule) return e;
			if (null === e || ('object' != typeof e && 'function' != typeof e)) return { default: e };
			var n = r(t);
			if (n && n.has(e)) return n.get(e);
			var o = { __proto__: null },
				u = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var i in e)
				if ('default' !== i && Object.prototype.hasOwnProperty.call(e, i)) {
					var a = u ? Object.getOwnPropertyDescriptor(e, i) : null;
					a && (a.get || a.set) ? Object.defineProperty(o, i, a) : (o[i] = e[i]);
				}
			return (o.default = e), n && n.set(e, o), o;
		};
	},
	938,
	(e, t, n) => {
		'use strict';
		Object.defineProperty(n, '__esModule', { value: !0 }),
			Object.defineProperty(n, 'default', {
				enumerable: !0,
				get: function () {
					return a;
				},
			});
		let r = e.r(4431),
			o = 'undefined' == typeof window,
			u = o ? () => {} : r.useLayoutEffect,
			i = o ? () => {} : r.useEffect;
		function a(e) {
			let { headManager: t, reduceComponentsToState: n } = e;
			function a() {
				if (t && t.mountedInstances) {
					let o = r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
					t.updateHead(n(o, e));
				}
			}
			if (o) {
				var s;
				null == t || null == (s = t.mountedInstances) || s.add(e.children), a();
			}
			return (
				u(() => {
					var n;
					return (
						null == t || null == (n = t.mountedInstances) || n.add(e.children),
						() => {
							var n;
							null == t || null == (n = t.mountedInstances) || n.delete(e.children);
						}
					);
				}),
				u(
					() => (
						t && (t._pendingUpdate = a),
						() => {
							t && (t._pendingUpdate = a);
						}
					),
				),
				i(
					() => (
						t && t._pendingUpdate && (t._pendingUpdate(), (t._pendingUpdate = null)),
						() => {
							t && t._pendingUpdate && (t._pendingUpdate(), (t._pendingUpdate = null));
						}
					),
				),
				null
			);
		}
	},
	4158,
	(e, t, n) => {
		'use strict';
		Object.defineProperty(n, '__esModule', { value: !0 }),
			Object.defineProperty(n, 'AmpStateContext', {
				enumerable: !0,
				get: function () {
					return r;
				},
			});
		let r = e.r(2879)._(e.r(4431)).default.createContext({});
	},
	2341,
	(e, t, n) => {
		'use strict';
		function r(e) {
			let { ampFirst: t = !1, hybrid: n = !1, hasQuery: r = !1 } = void 0 === e ? {} : e;
			return t || (n && r);
		}
		Object.defineProperty(n, '__esModule', { value: !0 }),
			Object.defineProperty(n, 'isInAmpMode', {
				enumerable: !0,
				get: function () {
					return r;
				},
			});
	},
	9634,
	(e, t, n) => {
		'use strict';
		Object.defineProperty(n, '__esModule', { value: !0 }),
			!(function (e, t) {
				for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
			})(n, {
				default: function () {
					return m;
				},
				defaultHead: function () {
					return f;
				},
			});
		let r = e.r(2879),
			o = e.r(7602),
			u = e.r(5280),
			i = o._(e.r(4431)),
			a = r._(e.r(938)),
			s = e.r(4158),
			l = e.r(2567),
			c = e.r(2341);
		function f(e) {
			void 0 === e && (e = !1);
			let t = [(0, u.jsx)('meta', { charSet: 'utf-8' }, 'charset')];
			return e || t.push((0, u.jsx)('meta', { name: 'viewport', content: 'width=device-width' }, 'viewport')), t;
		}
		function d(e, t) {
			return 'string' == typeof t || 'number' == typeof t
				? e
				: t.type === i.default.Fragment
					? e.concat(
							i.default.Children.toArray(t.props.children).reduce(
								(e, t) => ('string' == typeof t || 'number' == typeof t ? e : e.concat(t)),
								[],
							),
						)
					: e.concat(t);
		}
		e.r(7969);
		let p = ['name', 'httpEquiv', 'charSet', 'itemProp'];
		function y(e, t) {
			let { inAmpMode: n } = t;
			return e
				.reduce(d, [])
				.reverse()
				.concat(f(n).reverse())
				.filter(
					(function () {
						let e = new Set(),
							t = new Set(),
							n = new Set(),
							r = {};
						return (o) => {
							let u = !0,
								i = !1;
							if (o.key && 'number' != typeof o.key && o.key.indexOf('$') > 0) {
								i = !0;
								let t = o.key.slice(o.key.indexOf('$') + 1);
								e.has(t) ? (u = !1) : e.add(t);
							}
							switch (o.type) {
								case 'title':
								case 'base':
									t.has(o.type) ? (u = !1) : t.add(o.type);
									break;
								case 'meta':
									for (let e = 0, t = p.length; e < t; e++) {
										let t = p[e];
										if (o.props.hasOwnProperty(t))
											if ('charSet' === t) n.has(t) ? (u = !1) : n.add(t);
											else {
												let e = o.props[t],
													n = r[t] || new Set();
												('name' !== t || !i) && n.has(e) ? (u = !1) : (n.add(e), (r[t] = n));
											}
									}
							}
							return u;
						};
					})(),
				)
				.reverse()
				.map((e, t) => {
					let n = e.key || t;
					return i.default.cloneElement(e, { key: n });
				});
		}
		let m = function (e) {
			let { children: t } = e,
				n = (0, i.useContext)(s.AmpStateContext),
				r = (0, i.useContext)(l.HeadManagerContext);
			return (0, u.jsx)(a.default, {
				reduceComponentsToState: y,
				headManager: r,
				inAmpMode: (0, c.isInAmpMode)(n),
				children: t,
			});
		};
		('function' == typeof n.default || ('object' == typeof n.default && null !== n.default)) &&
			void 0 === n.default.__esModule &&
			(Object.defineProperty(n.default, '__esModule', { value: !0 }),
			Object.assign(n.default, n),
			(t.exports = n.default));
	},
	6456,
	(e, t, n) => {
		'use strict';
		Object.defineProperty(n, '__esModule', { value: !0 }),
			!(function (e, t) {
				for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
			})(n, {
				DecodeError: function () {
					return m;
				},
				MiddlewareNotFoundError: function () {
					return b;
				},
				MissingStaticPage: function () {
					return v;
				},
				NormalizeError: function () {
					return h;
				},
				PageNotFoundError: function () {
					return _;
				},
				SP: function () {
					return p;
				},
				ST: function () {
					return y;
				},
				WEB_VITALS: function () {
					return r;
				},
				execOnce: function () {
					return o;
				},
				getDisplayName: function () {
					return l;
				},
				getLocationOrigin: function () {
					return a;
				},
				getURL: function () {
					return s;
				},
				isAbsoluteUrl: function () {
					return i;
				},
				isResSent: function () {
					return c;
				},
				loadGetInitialProps: function () {
					return d;
				},
				normalizeRepeatedSlashes: function () {
					return f;
				},
				stringifyError: function () {
					return g;
				},
			});
		let r = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
		function o(e) {
			let t,
				n = !1;
			return function () {
				for (var r = arguments.length, o = Array(r), u = 0; u < r; u++) o[u] = arguments[u];
				return n || ((n = !0), (t = e(...o))), t;
			};
		}
		let u = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
			i = (e) => u.test(e);
		function a() {
			let { protocol: e, hostname: t, port: n } = window.location;
			return e + '//' + t + (n ? ':' + n : '');
		}
		function s() {
			let { href: e } = window.location,
				t = a();
			return e.substring(t.length);
		}
		function l(e) {
			return 'string' == typeof e ? e : e.displayName || e.name || 'Unknown';
		}
		function c(e) {
			return e.finished || e.headersSent;
		}
		function f(e) {
			let t = e.split('?');
			return t[0].replace(/\\/g, '/').replace(/\/\/+/g, '/') + (t[1] ? '?' + t.slice(1).join('?') : '');
		}
		async function d(e, t) {
			let n = t.res || (t.ctx && t.ctx.res);
			if (!e.getInitialProps) return t.ctx && t.Component ? { pageProps: await d(t.Component, t.ctx) } : {};
			let r = await e.getInitialProps(t);
			if (n && c(n)) return r;
			if (!r)
				throw Object.defineProperty(
					Error('"' + l(e) + '.getInitialProps()" should resolve to an object. But found "' + r + '" instead.'),
					'__NEXT_ERROR_CODE',
					{ value: 'E394', enumerable: !1, configurable: !0 },
				);
			return r;
		}
		let p = 'undefined' != typeof performance,
			y = p && ['mark', 'measure', 'getEntriesByName'].every((e) => 'function' == typeof performance[e]);
		class m extends Error {}
		class h extends Error {}
		class _ extends Error {
			constructor(e) {
				super(),
					(this.code = 'ENOENT'),
					(this.name = 'PageNotFoundError'),
					(this.message = 'Cannot find module for page: ' + e);
			}
		}
		class v extends Error {
			constructor(e, t) {
				super(), (this.message = 'Failed to load static file for page: ' + e + ' ' + t);
			}
		}
		class b extends Error {
			constructor() {
				super(), (this.code = 'ENOENT'), (this.message = 'Cannot find the middleware module');
			}
		}
		function g(e) {
			return JSON.stringify({ message: e.message, stack: e.stack });
		}
	},
	7914,
	(e) => {
		e.v({ className: 'geist_67d76b20-module__yOMf8W__className', variable: 'geist_67d76b20-module__yOMf8W__variable' });
	},
	4510,
	(e) => {
		e.v({
			className: 'geist_mono_66039167-module__O0reuq__className',
			variable: 'geist_mono_66039167-module__O0reuq__variable',
		});
	},
	5450,
	(e, t, n) => {
		t.exports = e.r(9634);
	},
	6027,
	(e) => {
		'use strict';
		e.s(['default', () => a], 6027);
		var t = e.i(5280),
			n = e.i(7914);
		let r = { className: n.default.className, style: { fontFamily: "'Geist', 'Geist Fallback'", fontStyle: 'normal' } };
		null != n.default.variable && (r.variable = n.default.variable);
		var o = e.i(4510);
		let u = {
			className: o.default.className,
			style: { fontFamily: "'Geist Mono', 'Geist Mono Fallback'", fontStyle: 'normal' },
		};
		null != o.default.variable && (u.variable = o.default.variable);
		var i = e.i(5450);
		let a = (e) => {
			let { Component: n, pageProps: o } = e;
			return (0, t.jsxs)(t.Fragment, {
				children: [
					(0, t.jsx)(i.default, { children: (0, t.jsx)('title', { children: 'today.do' }) }),
					(0, t.jsx)('div', {
						className: ''.concat(r.className, ' ').concat(u.className),
						children: (0, t.jsx)(n, { ...o }),
					}),
				],
			});
		};
	},
	4757,
	(e, t, n) => {
		let r = '/_app';
		(window.__NEXT_P = window.__NEXT_P || []).push([r, () => e.r(6027)]),
			t.hot &&
				t.hot.dispose(function () {
					window.__NEXT_P.push([r]);
				});
	},
	3863,
	(e) => {
		e.v((t) => Promise.all(['static/chunks/a785ec04e12840a6.js'].map((t) => e.l(t))).then(() => t(8561)));
	},
	4598,
	(e) => {
		e.v((t) => Promise.all(['static/chunks/83a6f81d9791025b.js'].map((t) => e.l(t))).then(() => t(6862)));
	},
]);
