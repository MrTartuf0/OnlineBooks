export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","grammar-hub.jpg","matematica-verde-4.jpg","nuovo-gestione-del-progetto-e-organizzazione-d-impresa.jpg","nuovo-sistemi-e-reti-3.jpg","pro-tech-c.jpg","qualcosa-che-sorprende-3-1.jpg","qualcosa-che-sorprende-3-2.jpg","storia-in-movimento-3.jpg","working-with-new-technology.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.34a83f49.js","app":"_app/immutable/entry/app.81a39aae.js","imports":["_app/immutable/entry/start.34a83f49.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.0bd2a8b6.js","_app/immutable/entry/app.81a39aae.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.0719bd3d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
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
})();
