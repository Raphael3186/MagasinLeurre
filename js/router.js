export class Router {
    static run(app) {
        const HOME_PAGE = 0;
        const PRODUITS_PAGE = 1;
        const ADMIN_PAGE = 2;
        const PANIER_PAGE = 3;
        const CONEXION_PAGE = 4;

        const routes = [
            'home',
            'produits',
            'admin',
            'panier',
            'conexion',
        ];
        
        if (!!location.hash) {
            switch (location.hash) {
                case '#':
                case `#${routes[HOME_PAGE]}`:
                 app.Search(routes[HOME_PAGE]);
                 break;
                case `#${routes[PRODUITS_PAGE]}`:
                 app.Search(routes[PRODUITS_PAGE]);
                 break;
                case `#${routes[ADMIN_PAGE]}`:
                 app.Search(routes[ADMIN_PAGE]);
                 break;
                case `#${routes[PANIER_PAGE]}`:
                 app.Search(routes[PANIER_PAGE]);
                 break;
                case `#${routes[CONEXION_PAGE]}`:
                 app.Search(routes[CONEXION_PAGE]);
                 break;
            }
        }
        else {
            app.Search(routes[HOME_PAGE]);
        }
    }
}