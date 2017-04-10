import {inject} from 'aurelia-framework';
import {AuthService} from 'aurelia-auth';

@inject(AuthService)

export class Dashboard {
    constructor(auth) {
        this.message ="";
        this.bodyClass = "home";
        this.auth = auth;
    }
    
}