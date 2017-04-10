import {AuthService} from 'aurelia-auth';
import {inject} from 'aurelia-framework';
@inject(AuthService)

export class Login {
    constructor(auth){
        this.auth = auth;
    };

    email = '';
    password = '';

    login() {
        return this.auth.login(this.email, this.password)
            .then(response => {
                console.log("success logged " + response);
            })
            .catch(err => {
                err.json().then(function(e) {
                    console.log("login failure : " + e.message);
                });
            });
    };
}