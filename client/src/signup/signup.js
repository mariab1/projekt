import {inject} from 'aurelia-framework';
import {AuthService} from 'aurelia-auth';

@inject(AuthService)

export class Signup {
    name = '';
    email = '';
    password = '';

    constructor(auth) {
        this.auth = auth;
    }

    signup() {
        return this.auth.signup(this.name, this.email, this.password)
            .then((response) => {
                console.log(response);
                console.log("signed up");
            });
    }

}