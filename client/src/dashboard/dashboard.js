import {inject} from 'aurelia-framework';
import {AuthService} from 'aurelia-auth';

import {HttpClient, json} from 'aurelia-fetch-client';

@inject(AuthService)

export class Dashboard {
    link;
    price;
    notes;
    ideas = [];
    projects = [];

    constructor(auth) {
        this.auth = auth;
        this.httpClient = new HttpClient();
        this.getData();

        auth.getMe().then(data => {
            this.user = data;
        });
    }

    getData() {
        this.httpClient.fetch('http://iplanner.dev/api/ideas')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.ideas = data;
            });

        this.httpClient.fetch('http://iplanner.dev/api/projects')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.projects = data;
            });
    }

    deleteIdea(id) {
        if (confirm('oled kindel, et soovid seda ideed kustutada?')) {
            this.httpClient.fetch('http://iplanner.dev/api/ideas/' + id, {
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

        this.httpClient.fetch('http://iplanner.dev/api/ideas', {
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