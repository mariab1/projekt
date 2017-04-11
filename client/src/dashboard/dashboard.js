import {inject} from 'aurelia-framework';
import {AuthService} from 'aurelia-auth';

import {HttpClient, json} from 'aurelia-fetch-client';

@inject(AuthService)

export class Dashboard {
    link;
    price;
    notes;

    constructor(auth) {
        this.auth = auth;
        this.httpClient = new HttpClient();
    }

    submitIdea() {
        let idea = {
            link: this.link,
            price: this.price,
            notes: this.notes
        };

        this.httpClient.fetch('http://iplanner.dev/api/ideas/store', {
            method: "POST",
            body: JSON.stringify(idea)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });
    }
    
}