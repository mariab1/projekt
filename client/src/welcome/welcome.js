import {inject} from 'aurelia-framework';
import {AuthService} from 'aurelia-auth';

@inject(AuthService)

export class Welcome {
    constructor(auth) {
        this.auth = auth;
    }
}