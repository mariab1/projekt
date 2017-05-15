import {inject} from 'aurelia-framework';
import {AuthService} from 'aurelia-auth';

import {HttpClient, json} from 'aurelia-fetch-client';

@inject(AuthService)

export class View {
    idea = {
        link: '',
        price: '',
        notes: ''
    };
    projects = [];
    project = {};

    constructor(auth) {
        this.auth = auth;
        this.httpClient = new HttpClient();
        this.getData();

        auth.getMe().then(data => {
            this.user = data;
        });
    }

    activate(params) {
        this.httpClient.fetch('http://iplanner.dev/api/projects/' + params.id)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.project = data;
            });
    }

    getData() {
        this.httpClient.fetch('http://iplanner.dev/api/projects')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.ideas = data;
            });
    }

    submitIdea() {
        let idea = {
            link: this.idea.link,
            price: this.idea.price,
            notes: this.idea.notes,
            user_id: this.user.id,
            project_id: this.project.id
        };

        this.httpClient.fetch('http://iplanner.dev/api/ideas', {
            method: "POST",
            body: json(idea)
        })
            .then(response => response.json())
            .then(savedIdea => {
                console.log(savedIdea);
                this.ideas.push(savedIdea);
                this.idea = {
                    link: '',
                    price: '',
                    notes: ''
                };
            });
    }

}