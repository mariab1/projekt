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
        this.getData();

        auth.getMe().then(data => {
            this.user = data;
        });
    }

    getData() {
        this.httpClient.fetch(this.apiURL + '/ideas')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.ideas = data;
            });

        this.httpClient.fetch(this.apiURL + '/projects')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.projects = data;
            });
    }

    deleteIdea(id) {
        if (confirm('oled kindel, et soovid seda ideed kustutada?')) {
            this.httpClient.fetch(this.apiURL + '/ideas/' + id, {
                method: "DELETE"
            })
                .then(resp => {
                    console.log(resp);
                    //this.ideas.push(savedIdea);
                });
        }
    }

    submitIdea() {
        let idea = {
            link: this.link,
            price: this.price,
            notes: this.notes,
            user_id: this.user.id
        };

        this.httpClient.fetch(this.apiURL + '/ideas', {
            method: "POST",
            body: json(idea)
        })
            .then(response => response.json())
            .then(savedIdea => {
                this.ideas.push(savedIdea);
                this.link = '';
                this.price = '';
                this.notes = '';
            });
    }
    
}