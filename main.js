import { App } from './js/app.js';
import { Router } from '/js/router.js';


const app = new App();
Router.run(app);


window.addEventListener('hashchange', () => {
    Router.run(app);
});