//import 'bootstrap';

import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {FetchConfig} from 'aurelia-auth';
//import AppRouterConfig from 'config/routerConfig';

//@inject(Router, FetchConfig, AppRouterConfig)
@inject(Router, FetchConfig)

export class App {
    //constructor(router, fetchConfig, appRouterConfig) {
    constructor(router, fetchConfig) {
        this.router = router;
        //this.appRouterConfig = appRouterConfig;
        this.fetchConfig = fetchConfig;
    }

    activate() {
        //this.appRouterConfig.configure();
        this.fetchConfig.configure();
    }
    /**
    constructor(router, fetchConfig, appRouterConfig){
        this.router = router;
        this.fetchConfig = fetchConfig;
    }

    activate() {
        this.fetchConfig.configure();
    }
*/
    configureRouter(config, router) {
        this.router = router;
        config.title = 'Aurelia';

        config.map([
          { route: ['', 'home'], name: 'home', moduleId: 'index' },
          { route: 'dashboard', name: 'dashboard', moduleId: 'dashboard', nav: true }
        ]);
    }

}
