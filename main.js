import { App } from './js/app.js';
import { Router } from '/js/router.js';


const app = new App();
Router.run(app);


window.addEventListener('hashchange', () => {
    Router.run(app);
});

window.onload = () => {
    localStorage.removeItem('todos')
    localStorage.nom = 'Martin'
    localStorage.prenom = 'Raphael'
    localStorage.status = 'Admin'
    localStorage.log = JSON.parse(123456)

}