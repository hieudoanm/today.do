(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	'object' == typeof document ? document.currentScript : void 0,
	5402,
	(e, t, r) => {
		var n = {
				229: function (e) {
					var t,
						r,
						n,
						o = (e.exports = {});
					function u() {
						throw Error('setTimeout has not been defined');
					}
					function a() {
						throw Error('clearTimeout has not been defined');
					}
					try {
						t = 'function' == typeof setTimeout ? setTimeout : u;
					} catch (e) {
						t = u;
					}
					try {
						r = 'function' == typeof clearTimeout ? clearTimeout : a;
					} catch (e) {
						r = a;
					}
					function i(e) {
						if (t === setTimeout) return setTimeout(e, 0);
						if ((t === u || !t) && setTimeout)
							return ((t = setTimeout), setTimeout(e, 0));
						try {
							return t(e, 0);
						} catch (r) {
							try {
								return t.call(null, e, 0);
							} catch (r) {
								return t.call(this, e, 0);
							}
						}
					}
					var s = [],
						c = !1,
						l = -1;
					function f() {
						c &&
							n &&
							((c = !1),
							n.length ? (s = n.concat(s)) : (l = -1),
							s.length && d());
					}
					function d() {
						if (!c) {
							var e = i(f);
							c = !0;
							for (var t = s.length; t; ) {
								for (n = s, s = []; ++l < t; ) n && n[l].run();
								((l = -1), (t = s.length));
							}
							((n = null),
								(c = !1),
								(function (e) {
									if (r === clearTimeout) return clearTimeout(e);
									if ((r === a || !r) && clearTimeout)
										return ((r = clearTimeout), clearTimeout(e));
									try {
										r(e);
									} catch (t) {
										try {
											return r.call(null, e);
										} catch (t) {
											return r.call(this, e);
										}
									}
								})(e));
						}
					}
					function p(e, t) {
						((this.fun = e), (this.array = t));
					}
					function y() {}
					((o.nextTick = function (e) {
						var t = Array(arguments.length - 1);
						if (arguments.length > 1)
							for (var r = 1; r < arguments.length; r++)
								t[r - 1] = arguments[r];
						(s.push(new p(e, t)), 1 !== s.length || c || i(d));
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
						}));
				},
			},
			o = {};
		function u(e) {
			var t = o[e];
			if (void 0 !== t) return t.exports;
			var r = (o[e] = { exports: {} }),
				a = !0;
			try {
				(n[e](r, r.exports, u), (a = !1));
			} finally {
				a && delete o[e];
			}
			return r.exports;
		}
		((u.ab =
			'/ROOT/node_modules/.pnpm/next@16.0.0_@babel+core@7.28.4_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/process/'),
			(t.exports = u(229)));
	},
	9779,
	(e, t, r) => {
		'use strict';
		var n, o;
		t.exports =
			(null == (n = e.g.process) ? void 0 : n.env) &&
			'object' == typeof (null == (o = e.g.process) ? void 0 : o.env)
				? e.g.process
				: e.r(5402);
	},
	6234,
	(e, t, r) => {
		'use strict';
		var n = Symbol.for('react.transitional.element');
		function o(e, t, r) {
			var o = null;
			if (
				(void 0 !== r && (o = '' + r),
				void 0 !== t.key && (o = '' + t.key),
				'key' in t)
			)
				for (var u in ((r = {}), t)) 'key' !== u && (r[u] = t[u]);
			else r = t;
			return {
				$$typeof: n,
				type: e,
				key: o,
				ref: void 0 !== (t = r.ref) ? t : null,
				props: r,
			};
		}
		((r.Fragment = Symbol.for('react.fragment')), (r.jsx = o), (r.jsxs = o));
	},
	4601,
	(e, t, r) => {
		'use strict';
		t.exports = e.r(6234);
	},
	4513,
	(e, t, r) => {
		'use strict';
		var n = e.i(9779),
			o = Symbol.for('react.transitional.element'),
			u = Symbol.for('react.portal'),
			a = Symbol.for('react.fragment'),
			i = Symbol.for('react.strict_mode'),
			s = Symbol.for('react.profiler'),
			c = Symbol.for('react.consumer'),
			l = Symbol.for('react.context'),
			f = Symbol.for('react.forward_ref'),
			d = Symbol.for('react.suspense'),
			p = Symbol.for('react.memo'),
			y = Symbol.for('react.lazy'),
			m = Symbol.for('react.activity'),
			h = Symbol.iterator,
			_ = {
				isMounted: function () {
					return !1;
				},
				enqueueForceUpdate: function () {},
				enqueueReplaceState: function () {},
				enqueueSetState: function () {},
			},
			v = Object.assign,
			b = {};
		function g(e, t, r) {
			((this.props = e),
				(this.context = t),
				(this.refs = b),
				(this.updater = r || _));
		}
		function w() {}
		function E(e, t, r) {
			((this.props = e),
				(this.context = t),
				(this.refs = b),
				(this.updater = r || _));
		}
		((g.prototype.isReactComponent = {}),
			(g.prototype.setState = function (e, t) {
				if ('object' != typeof e && 'function' != typeof e && null != e)
					throw Error(
						'takes an object of state variables to update or a function which returns an object of state variables.',
					);
				this.updater.enqueueSetState(this, e, t, 'setState');
			}),
			(g.prototype.forceUpdate = function (e) {
				this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
			}),
			(w.prototype = g.prototype));
		var S = (E.prototype = new w());
		((S.constructor = E), v(S, g.prototype), (S.isPureReactComponent = !0));
		var j = Array.isArray;
		function O() {}
		var x = { H: null, A: null, T: null, S: null },
			P = Object.prototype.hasOwnProperty;
		function T(e, t, r) {
			var n = r.ref;
			return {
				$$typeof: o,
				type: e,
				key: t,
				ref: void 0 !== n ? n : null,
				props: r,
			};
		}
		function k(e) {
			return 'object' == typeof e && null !== e && e.$$typeof === o;
		}
		var C = /\/+/g;
		function N(e, t) {
			var r, n;
			return 'object' == typeof e && null !== e && null != e.key
				? ((r = '' + e.key),
					(n = { '=': '=0', ':': '=2' }),
					'$' +
						r.replace(/[=:]/g, function (e) {
							return n[e];
						}))
				: t.toString(36);
		}
		function $(e, t, r) {
			if (null == e) return e;
			var n = [],
				a = 0;
			return (
				!(function e(t, r, n, a, i) {
					var s,
						c,
						l,
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
										return e((d = t._init)(t._payload), r, n, a, i);
								}
						}
					if (d)
						return (
							(i = i(t)),
							(d = '' === a ? '.' + N(t, 0) : a),
							j(i)
								? ((n = ''),
									null != d && (n = d.replace(C, '$&/') + '/'),
									e(i, r, n, '', function (e) {
										return e;
									}))
								: null != i &&
									(k(i) &&
										((s = i),
										(c =
											n +
											(null == i.key || (t && t.key === i.key)
												? ''
												: ('' + i.key).replace(C, '$&/') + '/') +
											d),
										(i = T(s.type, c, s.props))),
									r.push(i)),
							1
						);
					d = 0;
					var p = '' === a ? '.' : a + ':';
					if (j(t))
						for (var m = 0; m < t.length; m++)
							((f = p + N((a = t[m]), m)), (d += e(a, r, n, f, i)));
					else if (
						'function' ==
						typeof (m =
							null === (l = t) || 'object' != typeof l
								? null
								: 'function' == typeof (l = (h && l[h]) || l['@@iterator'])
									? l
									: null)
					)
						for (t = m.call(t), m = 0; !(a = t.next()).done; )
							((f = p + N((a = a.value), m++)), (d += e(a, r, n, f, i)));
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
													? e.then(O, O)
													: ((e.status = 'pending'),
														e.then(
															function (t) {
																'pending' === e.status &&
																	((e.status = 'fulfilled'), (e.value = t));
															},
															function (t) {
																'pending' === e.status &&
																	((e.status = 'rejected'), (e.reason = t));
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
								r,
								n,
								a,
								i,
							);
						throw Error(
							'Objects are not valid as a React child (found: ' +
								('[object Object]' === (r = String(t))
									? 'object with keys {' + Object.keys(t).join(', ') + '}'
									: r) +
								'). If you meant to render a collection of children, use an array instead.',
						);
					}
					return d;
				})(e, n, '', '', function (e) {
					return t.call(r, e, a++);
				}),
				n
			);
		}
		function R(e) {
			if (-1 === e._status) {
				var t = e._result;
				((t = t()).then(
					function (t) {
						(0 === e._status || -1 === e._status) &&
							((e._status = 1), (e._result = t));
					},
					function (t) {
						(0 === e._status || -1 === e._status) &&
							((e._status = 2), (e._result = t));
					},
				),
					-1 === e._status && ((e._status = 0), (e._result = t)));
			}
			if (1 === e._status) return e._result.default;
			throw e._result;
		}
		var H =
			'function' == typeof reportError
				? reportError
				: function (e) {
						if (
							'object' == typeof window &&
							'function' == typeof window.ErrorEvent
						) {
							var t = new window.ErrorEvent('error', {
								bubbles: !0,
								cancelable: !0,
								message:
									'object' == typeof e &&
									null !== e &&
									'string' == typeof e.message
										? String(e.message)
										: String(e),
								error: e,
							});
							if (!window.dispatchEvent(t)) return;
						} else if (
							'object' == typeof n.default &&
							'function' == typeof n.default.emit
						)
							return void n.default.emit('uncaughtException', e);
						console.error(e);
					};
		((r.Activity = m),
			(r.Children = {
				map: $,
				forEach: function (e, t, r) {
					$(
						e,
						function () {
							t.apply(this, arguments);
						},
						r,
					);
				},
				count: function (e) {
					var t = 0;
					return (
						$(e, function () {
							t++;
						}),
						t
					);
				},
				toArray: function (e) {
					return (
						$(e, function (e) {
							return e;
						}) || []
					);
				},
				only: function (e) {
					if (!k(e))
						throw Error(
							'React.Children.only expected to receive a single React element child.',
						);
					return e;
				},
			}),
			(r.Component = g),
			(r.Fragment = a),
			(r.Profiler = s),
			(r.PureComponent = E),
			(r.StrictMode = i),
			(r.Suspense = d),
			(r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = x),
			(r.__COMPILER_RUNTIME = {
				__proto__: null,
				c: function (e) {
					return x.H.useMemoCache(e);
				},
			}),
			(r.cache = function (e) {
				return function () {
					return e.apply(null, arguments);
				};
			}),
			(r.cacheSignal = function () {
				return null;
			}),
			(r.cloneElement = function (e, t, r) {
				if (null == e)
					throw Error(
						'The argument must be a React element, but you passed ' + e + '.',
					);
				var n = v({}, e.props),
					o = e.key;
				if (null != t)
					for (u in (void 0 !== t.key && (o = '' + t.key), t))
						P.call(t, u) &&
							'key' !== u &&
							'__self' !== u &&
							'__source' !== u &&
							('ref' !== u || void 0 !== t.ref) &&
							(n[u] = t[u]);
				var u = arguments.length - 2;
				if (1 === u) n.children = r;
				else if (1 < u) {
					for (var a = Array(u), i = 0; i < u; i++) a[i] = arguments[i + 2];
					n.children = a;
				}
				return T(e.type, o, n);
			}),
			(r.createContext = function (e) {
				return (
					((e = {
						$$typeof: l,
						_currentValue: e,
						_currentValue2: e,
						_threadCount: 0,
						Provider: null,
						Consumer: null,
					}).Provider = e),
					(e.Consumer = { $$typeof: c, _context: e }),
					e
				);
			}),
			(r.createElement = function (e, t, r) {
				var n,
					o = {},
					u = null;
				if (null != t)
					for (n in (void 0 !== t.key && (u = '' + t.key), t))
						P.call(t, n) &&
							'key' !== n &&
							'__self' !== n &&
							'__source' !== n &&
							(o[n] = t[n]);
				var a = arguments.length - 2;
				if (1 === a) o.children = r;
				else if (1 < a) {
					for (var i = Array(a), s = 0; s < a; s++) i[s] = arguments[s + 2];
					o.children = i;
				}
				if (e && e.defaultProps)
					for (n in (a = e.defaultProps)) void 0 === o[n] && (o[n] = a[n]);
				return T(e, u, o);
			}),
			(r.createRef = function () {
				return { current: null };
			}),
			(r.forwardRef = function (e) {
				return { $$typeof: f, render: e };
			}),
			(r.isValidElement = k),
			(r.lazy = function (e) {
				return { $$typeof: y, _payload: { _status: -1, _result: e }, _init: R };
			}),
			(r.memo = function (e, t) {
				return { $$typeof: p, type: e, compare: void 0 === t ? null : t };
			}),
			(r.startTransition = function (e) {
				var t = x.T,
					r = {};
				x.T = r;
				try {
					var n = e(),
						o = x.S;
					(null !== o && o(r, n),
						'object' == typeof n &&
							null !== n &&
							'function' == typeof n.then &&
							n.then(O, H));
				} catch (e) {
					H(e);
				} finally {
					(null !== t && null !== r.types && (t.types = r.types), (x.T = t));
				}
			}),
			(r.unstable_useCacheRefresh = function () {
				return x.H.useCacheRefresh();
			}),
			(r.use = function (e) {
				return x.H.use(e);
			}),
			(r.useActionState = function (e, t, r) {
				return x.H.useActionState(e, t, r);
			}),
			(r.useCallback = function (e, t) {
				return x.H.useCallback(e, t);
			}),
			(r.useContext = function (e) {
				return x.H.useContext(e);
			}),
			(r.useDebugValue = function () {}),
			(r.useDeferredValue = function (e, t) {
				return x.H.useDeferredValue(e, t);
			}),
			(r.useEffect = function (e, t) {
				return x.H.useEffect(e, t);
			}),
			(r.useEffectEvent = function (e) {
				return x.H.useEffectEvent(e);
			}),
			(r.useId = function () {
				return x.H.useId();
			}),
			(r.useImperativeHandle = function (e, t, r) {
				return x.H.useImperativeHandle(e, t, r);
			}),
			(r.useInsertionEffect = function (e, t) {
				return x.H.useInsertionEffect(e, t);
			}),
			(r.useLayoutEffect = function (e, t) {
				return x.H.useLayoutEffect(e, t);
			}),
			(r.useMemo = function (e, t) {
				return x.H.useMemo(e, t);
			}),
			(r.useOptimistic = function (e, t) {
				return x.H.useOptimistic(e, t);
			}),
			(r.useReducer = function (e, t, r) {
				return x.H.useReducer(e, t, r);
			}),
			(r.useRef = function (e) {
				return x.H.useRef(e);
			}),
			(r.useState = function (e) {
				return x.H.useState(e);
			}),
			(r.useSyncExternalStore = function (e, t, r) {
				return x.H.useSyncExternalStore(e, t, r);
			}),
			(r.useTransition = function () {
				return x.H.useTransition();
			}),
			(r.version = '19.2.0'));
	},
	6960,
	(e, t, r) => {
		'use strict';
		t.exports = e.r(4513);
	},
	2879,
	(e, t, r) => {
		'use strict';
		r._ = function (e) {
			return e && e.__esModule ? e : { default: e };
		};
	},
	8065,
	(e, t, r) => {
		'use strict';
		(Object.defineProperty(r, '__esModule', { value: !0 }),
			Object.defineProperty(r, 'HeadManagerContext', {
				enumerable: !0,
				get: function () {
					return n;
				},
			}));
		let n = e.r(2879)._(e.r(6960)).default.createContext({});
	},
	8114,
	(e, t, r) => {
		'use strict';
		(Object.defineProperty(r, '__esModule', { value: !0 }),
			Object.defineProperty(r, 'warnOnce', {
				enumerable: !0,
				get: function () {
					return n;
				},
			}));
		let n = (e) => {};
	},
	7602,
	(e, t, r) => {
		'use strict';
		function n(e) {
			if ('function' != typeof WeakMap) return null;
			var t = new WeakMap(),
				r = new WeakMap();
			return (n = function (e) {
				return e ? r : t;
			})(e);
		}
		r._ = function (e, t) {
			if (!t && e && e.__esModule) return e;
			if (null === e || ('object' != typeof e && 'function' != typeof e))
				return { default: e };
			var r = n(t);
			if (r && r.has(e)) return r.get(e);
			var o = { __proto__: null },
				u = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var a in e)
				if ('default' !== a && Object.prototype.hasOwnProperty.call(e, a)) {
					var i = u ? Object.getOwnPropertyDescriptor(e, a) : null;
					i && (i.get || i.set)
						? Object.defineProperty(o, a, i)
						: (o[a] = e[a]);
				}
			return ((o.default = e), r && r.set(e, o), o);
		};
	},
	4366,
	(e, t, r) => {
		'use strict';
		(Object.defineProperty(r, '__esModule', { value: !0 }),
			Object.defineProperty(r, 'default', {
				enumerable: !0,
				get: function () {
					return i;
				},
			}));
		let n = e.r(6960),
			o = 'undefined' == typeof window,
			u = o ? () => {} : n.useLayoutEffect,
			a = o ? () => {} : n.useEffect;
		function i(e) {
			let { headManager: t, reduceComponentsToState: r } = e;
			function i() {
				if (t && t.mountedInstances) {
					let e = n.Children.toArray(
						Array.from(t.mountedInstances).filter(Boolean),
					);
					t.updateHead(r(e));
				}
			}
			return (
				o && (t?.mountedInstances?.add(e.children), i()),
				u(
					() => (
						t?.mountedInstances?.add(e.children),
						() => {
							t?.mountedInstances?.delete(e.children);
						}
					),
				),
				u(
					() => (
						t && (t._pendingUpdate = i),
						() => {
							t && (t._pendingUpdate = i);
						}
					),
				),
				a(
					() => (
						t &&
							t._pendingUpdate &&
							(t._pendingUpdate(), (t._pendingUpdate = null)),
						() => {
							t &&
								t._pendingUpdate &&
								(t._pendingUpdate(), (t._pendingUpdate = null));
						}
					),
				),
				null
			);
		}
	},
	6196,
	(e, t, r) => {
		'use strict';
		Object.defineProperty(r, '__esModule', { value: !0 });
		var n = {
			default: function () {
				return m;
			},
			defaultHead: function () {
				return f;
			},
		};
		for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
		let u = e.r(2879),
			a = e.r(7602),
			i = e.r(4601),
			s = a._(e.r(6960)),
			c = u._(e.r(4366)),
			l = e.r(8065);
		function f() {
			return [
				(0, i.jsx)('meta', { charSet: 'utf-8' }, 'charset'),
				(0, i.jsx)(
					'meta',
					{ name: 'viewport', content: 'width=device-width' },
					'viewport',
				),
			];
		}
		function d(e, t) {
			return 'string' == typeof t || 'number' == typeof t
				? e
				: t.type === s.default.Fragment
					? e.concat(
							s.default.Children.toArray(t.props.children).reduce(
								(e, t) =>
									'string' == typeof t || 'number' == typeof t
										? e
										: e.concat(t),
								[],
							),
						)
					: e.concat(t);
		}
		e.r(8114);
		let p = ['name', 'httpEquiv', 'charSet', 'itemProp'];
		function y(e) {
			let t, r, n, o;
			return e
				.reduce(d, [])
				.reverse()
				.concat(f().reverse())
				.filter(
					((t = new Set()),
					(r = new Set()),
					(n = new Set()),
					(o = {}),
					(e) => {
						let u = !0,
							a = !1;
						if (e.key && 'number' != typeof e.key && e.key.indexOf('$') > 0) {
							a = !0;
							let r = e.key.slice(e.key.indexOf('$') + 1);
							t.has(r) ? (u = !1) : t.add(r);
						}
						switch (e.type) {
							case 'title':
							case 'base':
								r.has(e.type) ? (u = !1) : r.add(e.type);
								break;
							case 'meta':
								for (let t = 0, r = p.length; t < r; t++) {
									let r = p[t];
									if (e.props.hasOwnProperty(r))
										if ('charSet' === r) n.has(r) ? (u = !1) : n.add(r);
										else {
											let t = e.props[r],
												n = o[r] || new Set();
											('name' !== r || !a) && n.has(t)
												? (u = !1)
												: (n.add(t), (o[r] = n));
										}
								}
						}
						return u;
					}),
				)
				.reverse()
				.map((e, t) => {
					let r = e.key || t;
					return s.default.cloneElement(e, { key: r });
				});
		}
		let m = function ({ children: e }) {
			let t = (0, s.useContext)(l.HeadManagerContext);
			return (0, i.jsx)(c.default, {
				reduceComponentsToState: y,
				headManager: t,
				children: e,
			});
		};
		('function' == typeof r.default ||
			('object' == typeof r.default && null !== r.default)) &&
			void 0 === r.default.__esModule &&
			(Object.defineProperty(r.default, '__esModule', { value: !0 }),
			Object.assign(r.default, r),
			(t.exports = r.default));
	},
	3790,
	(e, t, r) => {
		'use strict';
		Object.defineProperty(r, '__esModule', { value: !0 });
		var n = {
			DecodeError: function () {
				return _;
			},
			MiddlewareNotFoundError: function () {
				return w;
			},
			MissingStaticPage: function () {
				return g;
			},
			NormalizeError: function () {
				return v;
			},
			PageNotFoundError: function () {
				return b;
			},
			SP: function () {
				return m;
			},
			ST: function () {
				return h;
			},
			WEB_VITALS: function () {
				return u;
			},
			execOnce: function () {
				return a;
			},
			getDisplayName: function () {
				return f;
			},
			getLocationOrigin: function () {
				return c;
			},
			getURL: function () {
				return l;
			},
			isAbsoluteUrl: function () {
				return s;
			},
			isResSent: function () {
				return d;
			},
			loadGetInitialProps: function () {
				return y;
			},
			normalizeRepeatedSlashes: function () {
				return p;
			},
			stringifyError: function () {
				return E;
			},
		};
		for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
		let u = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
		function a(e) {
			let t,
				r = !1;
			return (...n) => (r || ((r = !0), (t = e(...n))), t);
		}
		let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
			s = (e) => i.test(e);
		function c() {
			let { protocol: e, hostname: t, port: r } = window.location;
			return `${e}//${t}${r ? ':' + r : ''}`;
		}
		function l() {
			let { href: e } = window.location,
				t = c();
			return e.substring(t.length);
		}
		function f(e) {
			return 'string' == typeof e ? e : e.displayName || e.name || 'Unknown';
		}
		function d(e) {
			return e.finished || e.headersSent;
		}
		function p(e) {
			let t = e.split('?');
			return (
				t[0].replace(/\\/g, '/').replace(/\/\/+/g, '/') +
				(t[1] ? `?${t.slice(1).join('?')}` : '')
			);
		}
		async function y(e, t) {
			let r = t.res || (t.ctx && t.ctx.res);
			if (!e.getInitialProps)
				return t.ctx && t.Component
					? { pageProps: await y(t.Component, t.ctx) }
					: {};
			let n = await e.getInitialProps(t);
			if (r && d(r)) return n;
			if (!n)
				throw Object.defineProperty(
					Error(
						`"${f(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`,
					),
					'__NEXT_ERROR_CODE',
					{ value: 'E394', enumerable: !1, configurable: !0 },
				);
			return n;
		}
		let m = 'undefined' != typeof performance,
			h =
				m &&
				['mark', 'measure', 'getEntriesByName'].every(
					(e) => 'function' == typeof performance[e],
				);
		class _ extends Error {}
		class v extends Error {}
		class b extends Error {
			constructor(e) {
				(super(),
					(this.code = 'ENOENT'),
					(this.name = 'PageNotFoundError'),
					(this.message = `Cannot find module for page: ${e}`));
			}
		}
		class g extends Error {
			constructor(e, t) {
				(super(),
					(this.message = `Failed to load static file for page: ${e} ${t}`));
			}
		}
		class w extends Error {
			constructor() {
				(super(),
					(this.code = 'ENOENT'),
					(this.message = 'Cannot find the middleware module'));
			}
		}
		function E(e) {
			return JSON.stringify({ message: e.message, stack: e.stack });
		}
	},
	7914,
	(e) => {
		e.v({
			className: 'geist_67d76b20-module__yOMf8W__className',
			variable: 'geist_67d76b20-module__yOMf8W__variable',
		});
	},
	4510,
	(e) => {
		e.v({
			className: 'geist_mono_66039167-module__O0reuq__className',
			variable: 'geist_mono_66039167-module__O0reuq__variable',
		});
	},
	1805,
	(e, t, r) => {
		t.exports = e.r(6196);
	},
	6027,
	(e) => {
		'use strict';
		var t = e.i(4601),
			r = e.i(7914);
		let n = {
			className: r.default.className,
			style: { fontFamily: "'Geist', 'Geist Fallback'", fontStyle: 'normal' },
		};
		null != r.default.variable && (n.variable = r.default.variable);
		var o = e.i(4510);
		let u = {
			className: o.default.className,
			style: {
				fontFamily: "'Geist Mono', 'Geist Mono Fallback'",
				fontStyle: 'normal',
			},
		};
		null != o.default.variable && (u.variable = o.default.variable);
		var a = e.i(1805);
		e.s(
			[
				'default',
				0,
				({ Component: e, pageProps: r }) =>
					(0, t.jsxs)(t.Fragment, {
						children: [
							(0, t.jsx)(a.default, {
								children: (0, t.jsx)('title', { children: 'today.do' }),
							}),
							(0, t.jsx)('div', {
								className: `${n.className} ${u.className}`,
								children: (0, t.jsx)(e, { ...r }),
							}),
						],
					}),
			],
			6027,
		);
	},
	4757,
	(e, t, r) => {
		let n = '/_app';
		((window.__NEXT_P = window.__NEXT_P || []).push([n, () => e.r(6027)]),
			t.hot &&
				t.hot.dispose(function () {
					window.__NEXT_P.push([n]);
				}));
	},
	7114,
	(e) => {
		e.v((t) =>
			Promise.all(
				['static/chunks/90899a9f881f81b2.js'].map((t) => e.l(t)),
			).then(() => t(1201)),
		);
	},
	8093,
	(e) => {
		e.v((t) =>
			Promise.all(
				['static/chunks/001ccb3ba18d9746.js'].map((t) => e.l(t)),
			).then(() => t(2314)),
		);
	},
]);
