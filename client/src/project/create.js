import {inject} from 'aurelia-framework';
import {AuthService} from 'aurelia-auth';
import {AureliaConfiguration} from 'aurelia-configuration';

import {HttpClient, json} from 'aurelia-fetch-client';

@inject(AuthService, AureliaConfiguration)

export class Project {
    name;
    description;
    apiURL;
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

    submitProject() {
        let project = {
            name: this.name,
            description: this.description,
            user_id: this.user.id
        };

        this.httpClient.fetch(this.apiURL + '/projects', {
            method: "POST",
            body: json(project)
        })
            .then(response => response.json())
            .then(savedProject => {
                console.log(savedProject);
                this.projects.push(savedProject);
                this.name = '';
                this.description = '';
            });
    }
}