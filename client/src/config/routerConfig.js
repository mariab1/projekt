import {AuthorizeStep} from 'aurelia-auth';
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export default class {
    constructor(router) {
        this.router = router;
    }

    configure() {
        let appRouterConfig = function(config) {
            config.title = 'Aurelia';
            config.addPipelineStep('authorize', AuthorizeStep); // Add a route filter to the authorize extensibility point.
            config.map([
                { route: '', redirect: 'home', nav: false },
                { route: 'home', name: 'home', moduleId: 'index/index', nav: false },
                { route: 'signup', name: 'signup', moduleId: 'signup/signup', nav: false },
                { route: 'login', moduleId: 'login/login', title: 'Login', nav: false },
                { route: 'logout', moduleId: 'logout/logout', title: 'Logout', nav: false },
                { route: 'dashboard', name: 'dashboard', moduleId: 'dashboard/dashboard', auth: true , nav: true },
                { route: 'project/create', name: 'project-create', moduleId: 'project/project', auth: true , nav: false },
                { route: 'project/:id', name: 'project-view', moduleId: 'project/view', auth: true , nav: false }
            ]);
        };
        this.router.configure(appRouterConfig);
    }
}
