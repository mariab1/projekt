import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {FetchConfig} from 'aurelia-auth';
import AppRouterConfig from 'config/routerConfig';

@inject(Router, FetchConfig, AppRouterConfig)

export class App {
    constructor(router, fetchConfig, appRouterConfig) {
        this.router = router;
        this.appRouterConfig = appRouterConfig;
        this.fetchConfig = fetchConfig;
    }

    activate() {
        this.appRouterConfig.configure();
        this.fetchConfig.configure();
    }
}
