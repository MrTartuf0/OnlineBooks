import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.b5e575ee.js","app":"_app/immutable/entry/app.1c01339c.js","imports":["_app/immutable/entry/start.b5e575ee.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.6ce8577b.js","_app/immutable/entry/app.1c01339c.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.0719bd3d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
