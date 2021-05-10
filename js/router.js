export class Router {
    static run(app) {
        const HOME_PAGE = 0;
        const PRODUITS_PAGE = 1;
        const ADMIN_PAGE = 2;

        const routes = [
            'home',
            'produits',
            'admin',
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
            }
        }
        else {
            app.Search(routes[HOME_PAGE]);
        }
    }
}