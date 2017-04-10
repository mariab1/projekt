import {inject} from 'aurelia-framework';
import {AuthService} from 'aurelia-auth';

@inject(AuthService)

export class Logout {
    email = '';
    password = '';
    username = '';

    constructor(auth) {
        this.auth = auth;
    }

    signup() {
        return this.auth.signup(this.username, this.email, this.password)
            .then((response) => {
                console.log("signed up");
            });
    }

}