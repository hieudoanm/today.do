(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	'object' == typeof document ? document.currentScript : void 0,
	8406,
	(e, t, r) => {
		!(function () {
			var e = {
					229: function (e) {
						var t,
							r,
							n,
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
							r = 'function' == typeof clearTimeout ? clearTimeout : i;
						} catch (e) {
							r = i;
						}
						function s(e) {
							if (t === setTimeout) return setTimeout(e, 0);
							if ((t === u || !t) && setTimeout) return ((t = setTimeout), setTimeout(e, 0));
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
						var a = [],
							c = !1,
							l = -1;
						function f() {
							c && n && ((c = !1), n.length ? (a = n.concat(a)) : (l = -1), a.length && d());
						}
						function d() {
							if (!c) {
								var e = s(f);
								c = !0;
								for (var t = a.length; t; ) {
									for (n = a, a = []; ++l < t; ) n && n[l].run();
									((l = -1), (t = a.length));
								}
								((n = null),
									(c = !1),
									(function (e) {
										if (r === clearTimeout) return clearTimeout(e);
										if ((r === i || !r) && clearTimeout) return ((r = clearTimeout), clearTimeout(e));
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
						function m() {}
						((o.nextTick = function (e) {
							var t = Array(arguments.length - 1);
							if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
							(a.push(new p(e, t)), 1 !== a.length || c || s(d));
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
							(o.on = m),
							(o.addListener = m),
							(o.once = m),
							(o.off = m),
							(o.removeListener = m),
							(o.removeAllListeners = m),
							(o.emit = m),
							(o.prependListener = m),
							(o.prependOnceListener = m),
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
				r = {};
			function n(t) {
				var o = r[t];
				if (void 0 !== o) return o.exports;
				var u = (r[t] = { exports: {} }),
					i = !0;
				try {
					(e[t](u, u.exports, n), (i = !1));
				} finally {
					i && delete r[t];
				}
				return u.exports;
			}
			((n.ab =
				'/ROOT/node_modules/.pnpm/next@15.5.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/compiled/process/'),
				(t.exports = n(229)));
		})();
	},
	6503,
	(e, t, r) => {
		'use strict';
		var n, o;
		t.exports =
			(null == (n = e.g.process) ? void 0 : n.env) && 'object' == typeof (null == (o = e.g.process) ? void 0 : o.env)
				? e.g.process
				: e.r(8406);
	},
	7404,
	(e, t, r) => {
		'use strict';
		var n = Symbol.for('react.transitional.element');
		function o(e, t, r) {
			var o = null;
			if ((void 0 !== r && (o = '' + r), void 0 !== t.key && (o = '' + t.key), 'key' in t))
				for (var u in ((r = {}), t)) 'key' !== u && (r[u] = t[u]);
			else r = t;
			return { $$typeof: n, type: e, key: o, ref: void 0 !== (t = r.ref) ? t : null, props: r };
		}
		((r.Fragment = Symbol.for('react.fragment')), (r.jsx = o), (r.jsxs = o));
	},
	5280,
	(e, t, r) => {
		'use strict';
		t.exports = e.r(7404);
	},
	715,
	(e, t, r) => {
		'use strict';
		var n = e.i(6503),
			o = Symbol.for('react.transitional.element'),
			u = Symbol.for('react.portal'),
			i = Symbol.for('react.fragment'),
			s = Symbol.for('react.strict_mode'),
			a = Symbol.for('react.profiler'),
			c = Symbol.for('react.consumer'),
			l = Symbol.for('react.context'),
			f = Symbol.for('react.forward_ref'),
			d = Symbol.for('react.suspense'),
			p = Symbol.for('react.memo'),
			m = Symbol.for('react.lazy'),
			y = Symbol.iterator,
			h = {
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
			((this.props = e), (this.context = t), (this.refs = b), (this.updater = r || h));
		}
		function _() {}
		function w(e, t, r) {
			((this.props = e), (this.context = t), (this.refs = b), (this.updater = r || h));
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
			(_.prototype = g.prototype));
		var x = (w.prototype = new _());
		((x.constructor = w), v(x, g.prototype), (x.isPureReactComponent = !0));
		var E = Array.isArray,
			j = { H: null, A: null, T: null, S: null, V: null },
			S = Object.prototype.hasOwnProperty;
		function k(e, t, r, n, u, i) {
			return { $$typeof: o, type: e, key: t, ref: void 0 !== (r = i.ref) ? r : null, props: i };
		}
		function T(e) {
			return 'object' == typeof e && null !== e && e.$$typeof === o;
		}
		var P = /\/+/g;
		function O(e, t) {
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
		function N() {}
		function C(e, t, r) {
			if (null == e) return e;
			var n = [],
				i = 0;
			return (
				!(function e(t, r, n, i, s) {
					var a,
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
									case m:
										return e((d = t._init)(t._payload), r, n, i, s);
								}
						}
					if (d)
						return (
							(s = s(t)),
							(d = '' === i ? '.' + O(t, 0) : i),
							E(s)
								? ((n = ''),
									null != d && (n = d.replace(P, '$&/') + '/'),
									e(s, r, n, '', function (e) {
										return e;
									}))
								: null != s &&
									(T(s) &&
										((a = s),
										(c = n + (null == s.key || (t && t.key === s.key) ? '' : ('' + s.key).replace(P, '$&/') + '/') + d),
										(s = k(a.type, c, void 0, void 0, void 0, a.props))),
									r.push(s)),
							1
						);
					d = 0;
					var p = '' === i ? '.' : i + ':';
					if (E(t)) for (var h = 0; h < t.length; h++) ((f = p + O((i = t[h]), h)), (d += e(i, r, n, f, s)));
					else if (
						'function' ==
						typeof (h =
							null === (l = t) || 'object' != typeof l
								? null
								: 'function' == typeof (l = (y && l[y]) || l['@@iterator'])
									? l
									: null)
					)
						for (t = h.call(t), h = 0; !(i = t.next()).done; )
							((f = p + O((i = i.value), h++)), (d += e(i, r, n, f, s)));
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
													? e.then(N, N)
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
								r,
								n,
								i,
								s,
							);
						throw Error(
							'Objects are not valid as a React child (found: ' +
								('[object Object]' === (r = String(t)) ? 'object with keys {' + Object.keys(t).join(', ') + '}' : r) +
								'). If you meant to render a collection of children, use an array instead.',
						);
					}
					return d;
				})(e, n, '', '', function (e) {
					return t.call(r, e, i++);
				}),
				n
			);
		}
		function R(e) {
			if (-1 === e._status) {
				var t = e._result;
				((t = t()).then(
					function (t) {
						(0 === e._status || -1 === e._status) && ((e._status = 1), (e._result = t));
					},
					function (t) {
						(0 === e._status || -1 === e._status) && ((e._status = 2), (e._result = t));
					},
				),
					-1 === e._status && ((e._status = 0), (e._result = t)));
			}
			if (1 === e._status) return e._result.default;
			throw e._result;
		}
		var A =
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
						} else if ('object' == typeof n.default && 'function' == typeof n.default.emit)
							return void n.default.emit('uncaughtException', e);
						console.error(e);
					};
		function H() {}
		((r.Children = {
			map: C,
			forEach: function (e, t, r) {
				C(
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
					C(e, function () {
						t++;
					}),
					t
				);
			},
			toArray: function (e) {
				return (
					C(e, function (e) {
						return e;
					}) || []
				);
			},
			only: function (e) {
				if (!T(e)) throw Error('React.Children.only expected to receive a single React element child.');
				return e;
			},
		}),
			(r.Component = g),
			(r.Fragment = i),
			(r.Profiler = a),
			(r.PureComponent = w),
			(r.StrictMode = s),
			(r.Suspense = d),
			(r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = j),
			(r.__COMPILER_RUNTIME = {
				__proto__: null,
				c: function (e) {
					return j.H.useMemoCache(e);
				},
			}),
			(r.cache = function (e) {
				return function () {
					return e.apply(null, arguments);
				};
			}),
			(r.cloneElement = function (e, t, r) {
				if (null == e) throw Error('The argument must be a React element, but you passed ' + e + '.');
				var n = v({}, e.props),
					o = e.key,
					u = void 0;
				if (null != t)
					for (i in (void 0 !== t.ref && (u = void 0), void 0 !== t.key && (o = '' + t.key), t))
						S.call(t, i) &&
							'key' !== i &&
							'__self' !== i &&
							'__source' !== i &&
							('ref' !== i || void 0 !== t.ref) &&
							(n[i] = t[i]);
				var i = arguments.length - 2;
				if (1 === i) n.children = r;
				else if (1 < i) {
					for (var s = Array(i), a = 0; a < i; a++) s[a] = arguments[a + 2];
					n.children = s;
				}
				return k(e.type, o, void 0, void 0, u, n);
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
						S.call(t, n) && 'key' !== n && '__self' !== n && '__source' !== n && (o[n] = t[n]);
				var i = arguments.length - 2;
				if (1 === i) o.children = r;
				else if (1 < i) {
					for (var s = Array(i), a = 0; a < i; a++) s[a] = arguments[a + 2];
					o.children = s;
				}
				if (e && e.defaultProps) for (n in (i = e.defaultProps)) void 0 === o[n] && (o[n] = i[n]);
				return k(e, u, void 0, void 0, null, o);
			}),
			(r.createRef = function () {
				return { current: null };
			}),
			(r.forwardRef = function (e) {
				return { $$typeof: f, render: e };
			}),
			(r.isValidElement = T),
			(r.lazy = function (e) {
				return { $$typeof: m, _payload: { _status: -1, _result: e }, _init: R };
			}),
			(r.memo = function (e, t) {
				return { $$typeof: p, type: e, compare: void 0 === t ? null : t };
			}),
			(r.startTransition = function (e) {
				var t = j.T,
					r = {};
				j.T = r;
				try {
					var n = e(),
						o = j.S;
					(null !== o && o(r, n), 'object' == typeof n && null !== n && 'function' == typeof n.then && n.then(H, A));
				} catch (e) {
					A(e);
				} finally {
					j.T = t;
				}
			}),
			(r.unstable_useCacheRefresh = function () {
				return j.H.useCacheRefresh();
			}),
			(r.use = function (e) {
				return j.H.use(e);
			}),
			(r.useActionState = function (e, t, r) {
				return j.H.useActionState(e, t, r);
			}),
			(r.useCallback = function (e, t) {
				return j.H.useCallback(e, t);
			}),
			(r.useContext = function (e) {
				return j.H.useContext(e);
			}),
			(r.useDebugValue = function () {}),
			(r.useDeferredValue = function (e, t) {
				return j.H.useDeferredValue(e, t);
			}),
			(r.useEffect = function (e, t, r) {
				var n = j.H;
				if ('function' == typeof r) throw Error('useEffect CRUD overload is not enabled in this build of React.');
				return n.useEffect(e, t);
			}),
			(r.useId = function () {
				return j.H.useId();
			}),
			(r.useImperativeHandle = function (e, t, r) {
				return j.H.useImperativeHandle(e, t, r);
			}),
			(r.useInsertionEffect = function (e, t) {
				return j.H.useInsertionEffect(e, t);
			}),
			(r.useLayoutEffect = function (e, t) {
				return j.H.useLayoutEffect(e, t);
			}),
			(r.useMemo = function (e, t) {
				return j.H.useMemo(e, t);
			}),
			(r.useOptimistic = function (e, t) {
				return j.H.useOptimistic(e, t);
			}),
			(r.useReducer = function (e, t, r) {
				return j.H.useReducer(e, t, r);
			}),
			(r.useRef = function (e) {
				return j.H.useRef(e);
			}),
			(r.useState = function (e) {
				return j.H.useState(e);
			}),
			(r.useSyncExternalStore = function (e, t, r) {
				return j.H.useSyncExternalStore(e, t, r);
			}),
			(r.useTransition = function () {
				return j.H.useTransition();
			}),
			(r.version = '19.1.1'));
	},
	5929,
	(e, t, r) => {
		'use strict';
		t.exports = e.r(715);
	},
	2879,
	(e, t, r) => {
		'use strict';
		r._ = function (e) {
			return e && e.__esModule ? e : { default: e };
		};
	},
	973,
	(e, t, r) => {
		'use strict';
		(Object.defineProperty(r, '__esModule', { value: !0 }),
			Object.defineProperty(r, 'HeadManagerContext', {
				enumerable: !0,
				get: function () {
					return n;
				},
			}));
		let n = e.r(2879)._(e.r(5929)).default.createContext({});
	},
	9151,
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
			if (null === e || ('object' != typeof e && 'function' != typeof e)) return { default: e };
			var r = n(t);
			if (r && r.has(e)) return r.get(e);
			var o = { __proto__: null },
				u = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var i in e)
				if ('default' !== i && Object.prototype.hasOwnProperty.call(e, i)) {
					var s = u ? Object.getOwnPropertyDescriptor(e, i) : null;
					s && (s.get || s.set) ? Object.defineProperty(o, i, s) : (o[i] = e[i]);
				}
			return ((o.default = e), r && r.set(e, o), o);
		};
	},
	5923,
	(e, t, r) => {
		'use strict';
		(Object.defineProperty(r, '__esModule', { value: !0 }),
			!(function (e, t) {
				for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
			})(r, {
				DecodeError: function () {
					return y;
				},
				MiddlewareNotFoundError: function () {
					return g;
				},
				MissingStaticPage: function () {
					return b;
				},
				NormalizeError: function () {
					return h;
				},
				PageNotFoundError: function () {
					return v;
				},
				SP: function () {
					return p;
				},
				ST: function () {
					return m;
				},
				WEB_VITALS: function () {
					return n;
				},
				execOnce: function () {
					return o;
				},
				getDisplayName: function () {
					return c;
				},
				getLocationOrigin: function () {
					return s;
				},
				getURL: function () {
					return a;
				},
				isAbsoluteUrl: function () {
					return i;
				},
				isResSent: function () {
					return l;
				},
				loadGetInitialProps: function () {
					return d;
				},
				normalizeRepeatedSlashes: function () {
					return f;
				},
				stringifyError: function () {
					return _;
				},
			}));
		let n = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
		function o(e) {
			let t,
				r = !1;
			return function () {
				for (var n = arguments.length, o = Array(n), u = 0; u < n; u++) o[u] = arguments[u];
				return (r || ((r = !0), (t = e(...o))), t);
			};
		}
		let u = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
			i = (e) => u.test(e);
		function s() {
			let { protocol: e, hostname: t, port: r } = window.location;
			return e + '//' + t + (r ? ':' + r : '');
		}
		function a() {
			let { href: e } = window.location,
				t = s();
			return e.substring(t.length);
		}
		function c(e) {
			return 'string' == typeof e ? e : e.displayName || e.name || 'Unknown';
		}
		function l(e) {
			return e.finished || e.headersSent;
		}
		function f(e) {
			let t = e.split('?');
			return t[0].replace(/\\/g, '/').replace(/\/\/+/g, '/') + (t[1] ? '?' + t.slice(1).join('?') : '');
		}
		async function d(e, t) {
			let r = t.res || (t.ctx && t.ctx.res);
			if (!e.getInitialProps) return t.ctx && t.Component ? { pageProps: await d(t.Component, t.ctx) } : {};
			let n = await e.getInitialProps(t);
			if (r && l(r)) return n;
			if (!n)
				throw Object.defineProperty(
					Error('"' + c(e) + '.getInitialProps()" should resolve to an object. But found "' + n + '" instead.'),
					'__NEXT_ERROR_CODE',
					{ value: 'E394', enumerable: !1, configurable: !0 },
				);
			return n;
		}
		let p = 'undefined' != typeof performance,
			m = p && ['mark', 'measure', 'getEntriesByName'].every((e) => 'function' == typeof performance[e]);
		class y extends Error {}
		class h extends Error {}
		class v extends Error {
			constructor(e) {
				(super(),
					(this.code = 'ENOENT'),
					(this.name = 'PageNotFoundError'),
					(this.message = 'Cannot find module for page: ' + e));
			}
		}
		class b extends Error {
			constructor(e, t) {
				(super(), (this.message = 'Failed to load static file for page: ' + e + ' ' + t));
			}
		}
		class g extends Error {
			constructor() {
				(super(), (this.code = 'ENOENT'), (this.message = 'Cannot find the middleware module'));
			}
		}
		function _(e) {
			return JSON.stringify({ message: e.message, stack: e.stack });
		}
	},
	7856,
	(e) => {
		'use strict';
		e.s(['default', () => n], 7856);
		var t = e.i(5280),
			r = e.i(5929);
		let n = () => {
			let {
					database: e,
					list: n,
					add: o,
					update: u,
					remove: i,
				} = ((e) => {
					let { databaseName: t = '', storeName: n = '' } = e,
						[o, u] = (0, r.useState)(null);
					(0, r.useEffect)(() => {
						let e = indexedDB.open(t, 1);
						((e.onupgradeneeded = (e) => {
							let t = e.target.result;
							t.objectStoreNames.contains(n) ||
								t
									.createObjectStore(n, { keyPath: 'id', autoIncrement: !0 })
									.createIndex('updatedAt', 'updatedAt', { unique: !1 });
						}),
							(e.onsuccess = () => {
								u(e.result);
							}),
							(e.onerror = (e) => {
								console.error('IndexedDB error:', e);
							}));
					}, []);
					let i = (e, t) =>
						e.completed !== t.completed
							? e.completed
								? 1
								: -1
							: new Date(t.updatedAt).getTime() - new Date(e.updatedAt).getTime();
					return {
						database: o,
						list: () =>
							new Promise((e, t) => {
								if (!o) return e([]);
								let r = o.transaction(n, 'readonly').objectStore(n).getAll();
								((r.onsuccess = () => {
									let t = r.result;
									(t.sort(i), e(t));
								}),
									(r.onerror = () => {
										var e;
										return t(Error((null == (e = r.error) ? void 0 : e.message) || 'Failed to fetch tasks'));
									}));
							}),
						add: (e) =>
							new Promise((t, r) => {
								if (!o) return;
								let u = new Date().toISOString(),
									i = o.transaction(n, 'readwrite');
								(i.objectStore(n).add({ text: e, completed: !1, updatedAt: u }),
									(i.oncomplete = () => t()),
									(i.onerror = () => {
										var e;
										return r(Error((null == (e = i.error) ? void 0 : e.message) || 'Failed to add task'));
									}));
							}),
						update: (e) =>
							new Promise((t, r) => {
								if (!o) return;
								let u = new Date().toISOString(),
									i = o.transaction(n, 'readwrite');
								(i.objectStore(n).put({ ...e, updatedAt: u }),
									(i.oncomplete = () => t()),
									(i.onerror = () => {
										var e;
										return r(Error((null == (e = i.error) ? void 0 : e.message) || 'Failed to update task'));
									}));
							}),
						remove: (e) =>
							new Promise((t, r) => {
								if (!o) return;
								let u = o.transaction(n, 'readwrite');
								(u.objectStore(n).delete(e),
									(u.oncomplete = () => t()),
									(u.onerror = () => {
										var e;
										return r(Error((null == (e = u.error) ? void 0 : e.message) || 'Failed to delete task'));
									}));
							}),
					};
				})({ databaseName: 'TasksDB', storeName: 'tasks' }),
				[s, a] = (0, r.useState)([]),
				[c, l] = (0, r.useState)('');
			(0, r.useEffect)(() => {
				e && n().then(a);
			}, [e]);
			let f = async () => {
					c.trim() && (await o(c.trim()), l(''), a(await n()));
				},
				d = async (e) => {
					(await u({ ...e, completed: !e.completed }), a(await n()));
				},
				p = async (e) => {
					(await i(e), a(await n()));
				};
			return (0, t.jsx)('div', {
				className: 'bg-base-200 flex h-screen flex-col items-center py-0 md:min-h-screen md:py-10',
				children: (0, t.jsxs)('div', {
					className: 'bg-base-100 h-screen w-full max-w-md rounded-none p-6 shadow-lg md:h-auto md:rounded-2xl',
					children: [
						(0, t.jsx)('h1', { className: 'mb-4 text-center text-2xl font-bold', children: 'To-Do List' }),
						(0, t.jsxs)('div', {
							className: 'mb-4 flex gap-2',
							children: [
								(0, t.jsx)('input', {
									type: 'text',
									placeholder: 'Add a new task',
									className: 'input input-bordered flex-1',
									value: c,
									onChange: (e) => l(e.target.value),
									onKeyDown: (e) => 'Enter' === e.key && f(),
								}),
								(0, t.jsx)('button', { className: 'btn btn-glass', onClick: f, children: 'Add' }),
							],
						}),
						(0, t.jsx)('ul', {
							className: 'space-y-2',
							children: s.map((e) =>
								(0, t.jsxs)(
									'li',
									{
										className: 'bg-base-300 flex items-center justify-between rounded-lg p-3',
										children: [
											(0, t.jsxs)('div', {
												className: 'flex items-center gap-2',
												children: [
													(0, t.jsx)('input', {
														type: 'checkbox',
														className: 'checkbox checkbox-primary',
														checked: e.completed,
														onChange: () => d(e),
													}),
													(0, t.jsx)('span', {
														className: 'text-lg '.concat(e.completed ? 'text-gray-500 line-through' : ''),
														children: e.text,
													}),
												],
											}),
											(0, t.jsx)('button', {
												className: 'btn btn-sm btn-error',
												onClick: () => p(e.id),
												children: '✕',
											}),
										],
									},
									e.id,
								),
							),
						}),
						0 === s.length &&
							(0, t.jsx)('p', { className: 'mt-4 text-center text-gray-500', children: 'No tasks yet!' }),
					],
				}),
			});
		};
	},
	5075,
	(e, t, r) => {
		((window.__NEXT_P = window.__NEXT_P || []).push(['/', () => e.r(7856)]),
			t.hot &&
				t.hot.dispose(function () {
					window.__NEXT_P.push(['/']);
				}));
	},
	5332,
	(e) => {
		e.v((t) => Promise.all(['static/chunks/08de5b472d4d98a2.js'].map((t) => e.l(t))).then(() => t(180)));
	},
	7092,
	(e) => {
		e.v((t) => Promise.all(['static/chunks/5de5cb95685ee03e.js'].map((t) => e.l(t))).then(() => t(7138)));
	},
]);
