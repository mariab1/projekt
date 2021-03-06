import {inject} from 'aurelia-framework';
import {AuthService} from 'aurelia-auth';
import {AureliaConfiguration} from 'aurelia-configuration';
import {HttpClient, json} from 'aurelia-fetch-client';

@inject(AuthService, AureliaConfiguration)

export class Dashboard {
    link;
    price;
    notes;
    apiURL;
    ideas = [];
    projects = [];

    constructor(auth, config) {
        this.auth = auth;
        this.apiURL = config.get('api.endpoint');
        this.httpClient = new HttpClient();

        auth.getMe().then(data => {
            this.user = data;
            this.httpClient.fetch(this.apiURL + '/projects/user/' + this.user.id)
                .then(response => response.json())
                .then(data => {
                    this.projects = data;
                });
        });
    }
}