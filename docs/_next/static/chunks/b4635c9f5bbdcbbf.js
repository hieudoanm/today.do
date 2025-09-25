(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
	'object' == typeof document ? document.currentScript : void 0,
	7856,
	(e) => {
		'use strict';
		e.s(['default', () => f], 7856);
		var t = e.i(5280),
			r = e.i(4431),
			n = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
			a = r.default.createContext && r.default.createContext(n),
			o = ['attr', 'size', 'title'];
		function l() {
			return (l = Object.assign.bind()).apply(this, arguments);
		}
		function s(e, t) {
			var r = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(e);
				(t &&
					(n = n.filter(function (t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable;
					})),
					r.push.apply(r, n));
			}
			return r;
		}
		function i(e) {
			for (var t = 1; t < arguments.length; t++) {
				var r = null != arguments[t] ? arguments[t] : {};
				t % 2
					? s(Object(r), !0).forEach(function (t) {
							var n, a, o;
							((n = e),
								(a = t),
								(o = r[t]),
								(a = (function (e) {
									var t = (function (e, t) {
										if ('object' != typeof e || !e) return e;
										var r = e[Symbol.toPrimitive];
										if (void 0 !== r) {
											var n = r.call(e, t || 'default');
											if ('object' != typeof n) return n;
											throw TypeError('@@toPrimitive must return a primitive value.');
										}
										return ('string' === t ? String : Number)(e);
									})(e, 'string');
									return 'symbol' == typeof t ? t : t + '';
								})(a)) in n
									? Object.defineProperty(n, a, { value: o, enumerable: !0, configurable: !0, writable: !0 })
									: (n[a] = o));
						})
					: Object.getOwnPropertyDescriptors
						? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
						: s(Object(r)).forEach(function (t) {
								Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
							});
			}
			return e;
		}
		function c(e) {
			return (t) =>
				r.default.createElement(
					d,
					l({ attr: i({}, e.attr) }, t),
					(function e(t) {
						return t && t.map((t, n) => r.default.createElement(t.tag, i({ key: n }, t.attr), e(t.child)));
					})(e.child),
				);
		}
		function d(e) {
			var t = (t) => {
				var n,
					{ attr: a, size: s, title: c } = e,
					d = (function (e, t) {
						if (null == e) return {};
						var r,
							n,
							a = (function (e, t) {
								if (null == e) return {};
								var r = {};
								for (var n in e)
									if (Object.prototype.hasOwnProperty.call(e, n)) {
										if (t.indexOf(n) >= 0) continue;
										r[n] = e[n];
									}
								return r;
							})(e, t);
						if (Object.getOwnPropertySymbols) {
							var o = Object.getOwnPropertySymbols(e);
							for (n = 0; n < o.length; n++)
								((r = o[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
						}
						return a;
					})(e, o),
					u = s || t.size || '1em';
				return (
					t.className && (n = t.className),
					e.className && (n = (n ? n + ' ' : '') + e.className),
					r.default.createElement(
						'svg',
						l({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, t.attr, a, d, {
							className: n,
							style: i(i({ color: e.color || t.color }, t.style), e.style),
							height: u,
							width: u,
							xmlns: 'http://www.w3.org/2000/svg',
						}),
						c && r.default.createElement('title', null, c),
						e.children,
					)
				);
			};
			return void 0 !== a ? r.default.createElement(a.Consumer, null, (e) => t(e)) : t(n);
		}
		function u(e) {
			return c({
				tag: 'svg',
				attr: { viewBox: '0 0 256 256', fill: 'currentColor' },
				child: [
					{
						tag: 'path',
						attr: {
							d: 'M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z',
						},
						child: [],
					},
				],
			})(e);
		}
		function m(e) {
			return c({
				tag: 'svg',
				attr: { viewBox: '0 0 256 256', fill: 'currentColor' },
				child: [
					{
						tag: 'path',
						attr: {
							d: 'M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z',
						},
						child: [],
					},
				],
			})(e);
		}
		let p = () => {
				let {
						database: e,
						list: n,
						add: a,
						update: o,
						remove: l,
					} = ((e) => {
						let { databaseName: t = '', storeName: n = '' } = e,
							[a, o] = (0, r.useState)(null);
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
									o(e.result);
								}),
								(e.onerror = (e) => {
									console.error('IndexedDB error:', e);
								}));
						}, [t, n]);
						let l = (e, t) =>
							e.completed !== t.completed
								? e.completed
									? 1
									: -1
								: new Date(t.updatedAt).getTime() - new Date(e.updatedAt).getTime();
						return {
							database: a,
							list: () =>
								new Promise((e, t) => {
									if (!a) return e([]);
									let r = a.transaction(n, 'readonly').objectStore(n).getAll();
									((r.onsuccess = () => {
										let t = r.result;
										(t.sort(l), e(t));
									}),
										(r.onerror = () => {
											var e;
											return t(Error((null == (e = r.error) ? void 0 : e.message) || 'Failed to fetch tasks'));
										}));
								}),
							add: (e) =>
								new Promise((t, r) => {
									if (!a) return;
									let o = new Date().toISOString(),
										l = a.transaction(n, 'readwrite');
									(l.objectStore(n).add({ text: e, completed: !1, updatedAt: o }),
										(l.oncomplete = () => t()),
										(l.onerror = () => {
											var e;
											return r(Error((null == (e = l.error) ? void 0 : e.message) || 'Failed to add task'));
										}));
								}),
							update: (e) =>
								new Promise((t, r) => {
									if (!a) return;
									let o = new Date().toISOString(),
										l = a.transaction(n, 'readwrite');
									(l.objectStore(n).put({ ...e, updatedAt: o }),
										(l.oncomplete = () => t()),
										(l.onerror = () => {
											var e;
											return r(Error((null == (e = l.error) ? void 0 : e.message) || 'Failed to update task'));
										}));
								}),
							remove: (e) =>
								new Promise((t, r) => {
									if (!a) return;
									let o = a.transaction(n, 'readwrite');
									(o.objectStore(n).delete(e),
										(o.oncomplete = () => t()),
										(o.onerror = () => {
											var e;
											return r(Error((null == (e = o.error) ? void 0 : e.message) || 'Failed to delete task'));
										}));
								}),
						};
					})({ databaseName: 'TasksDB', storeName: 'tasks' }),
					[s, i] = (0, r.useState)([]),
					[c, d] = (0, r.useState)('');
				(0, r.useEffect)(() => {
					e && n().then(i);
				}, [e, n]);
				let p = async () => {
						c.trim() && (await a(c.trim()), d(''), i(await n()));
					},
					f = async (e) => {
						(await o({ ...e, completed: !e.completed }), i(await n()));
					},
					b = async (e) => {
						(await l(e), i(await n()));
					};
				return (0, t.jsx)('div', {
					className: 'bg-base-200 flex h-screen flex-col items-center py-0 md:min-h-screen md:py-10',
					children: (0, t.jsxs)('div', {
						className: 'bg-base-100 h-screen w-full max-w-md rounded-none p-6 shadow-lg md:h-auto md:rounded-2xl',
						children: [
							(0, t.jsx)('h1', { className: 'mb-4 text-center text-2xl font-bold', children: 'Tasks' }),
							(0, t.jsxs)('div', {
								className: 'mb-4 flex gap-2',
								children: [
									(0, t.jsx)('input', {
										type: 'text',
										placeholder: 'Add a new task',
										className: 'input input-bordered flex-1',
										value: c,
										onChange: (e) => d(e.target.value),
										onKeyDown: (e) => 'Enter' === e.key && p(),
									}),
									(0, t.jsx)('button', { className: 'btn btn-glass', onClick: p, children: (0, t.jsx)(u, {}) }),
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
															onChange: () => f(e),
														}),
														(0, t.jsx)('span', {
															className: 'text-lg '.concat(e.completed ? 'text-gray-500 line-through' : ''),
															children: e.text,
														}),
													],
												}),
												(0, t.jsx)('button', {
													className: 'btn btn-sm btn-error',
													onClick: () => b(e.id),
													children: (0, t.jsx)(m, {}),
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
			},
			f = () => (0, t.jsx)(p, {});
	},
	5075,
	(e, t, r) => {
		((window.__NEXT_P = window.__NEXT_P || []).push(['/', () => e.r(7856)]),
			t.hot &&
				t.hot.dispose(function () {
					window.__NEXT_P.push(['/']);
				}));
	},
]);
