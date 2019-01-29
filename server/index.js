const y = require('ypsilon');

//if you want to make an automatic reverse proxy on nginx put addToNginx to true.
// the serverRoot point to where your server files are.
const yConfig = {
    addToNginx : false,
    serverRoot : 'server'
};

//With the app injector you can modify the global app object if needed
const appInjector = (app) => app;

y.init(appInjector,yConfig);