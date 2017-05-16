import {inject} from 'aurelia-framework';
import {AuthService} from 'aurelia-auth';
import {AureliaConfiguration} from 'aurelia-configuration';
import {HttpClient, json} from 'aurelia-fetch-client';

@inject(AuthService, AureliaConfiguration)

export class View {
    idea = {
        link: '',
        price: '',
        notes: ''
    };
    apiURL;
    projects = [];
    project = {};
    ideas = [];

    constructor(auth, config) {
        this.auth = auth;
        this.apiURL = config.get('api.endpoint');
        this.httpClient = new HttpClient();

        auth.getMe().then(data => {
            this.user = data;
        });
    }

    activate(params) {
        this.httpClient.fetch(this.apiURL + '/projects/' + params.id)
            .then(response => response.json())
            .then(data => {
                this.project = data;
                this.loadIdeas();
            });
    }

    loadIdeas() {
        this.httpClient.fetch(this.apiURL + '/projects/' + this.project.id + '/ideas')
            .then(response => response.json())
            .then(data => {
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

        this.httpClient.fetch(this.apiURL + '/ideas', {
            method: "POST",
            body: json(idea)
        })
            .then(response => response.json())
            .then(savedIdea => {
                this.ideas.push(savedIdea);
                this.idea = {
                    link: '',
                    price: '',
                    notes: ''
                };
            });
    }

}