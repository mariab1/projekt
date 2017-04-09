import {AuthorizeStep} from 'aurelia-auth';
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export default class{
    constructor(router){
        this.router = router;
    }
    configure(){
        let appRouterConfig = function(config){
            config.title = 'Aurelia';
            config.addPipelineStep('authorize', AuthorizeStep); // Add a route filter to the authorize extensibility point.
            config.map([
                { route: '', redirect: 'home' },
                { route: 'home', name: 'home', moduleId: 'index' },
                { route: 'signup', name: 'signup', moduleId: 'signup/signup', nav: true },
                { route: 'dashboard', name: 'dashboard', moduleId: 'dashboard/dashboard', nav: true, settings: { auth: true } }
            ]);
        };
        this.router.configure(appRouterConfig);
    }
}
