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
    fileName;
    file;

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

    deleteIdea(id) {
        if (confirm('Are you sure you want to delete this idea?')) {
            this.httpClient.fetch(this.apiURL + '/ideas/' + id, {
                method: "DELETE"
            })
                .then(resp => {
                    for (let i in this.ideas) {
                        if (this.ideas[i].id === id) {
                            this.ideas.splice(i, 1);
                        }
                    }
                });
        }
    }

    fileSelected(event) {
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.readAsDataURL(file);
        this.fileName = file.name;
        reader.onload = () => {
            this.idea.file = reader.result;
        };
    }

    submitIdea() {
        this.httpClient.fetch(this.apiURL + '/ideas', {
            method: "POST",
            body: json({
                link: this.idea.link,
                price: this.idea.price,
                notes: this.idea.notes,
                user_id: this.user.id,
                project_id: this.project.id,
                file: this.idea.file
            })
        })
            .then(response => response.json())
            .then(savedIdea => {
                this.ideas.push(savedIdea);
                this.idea = {
                    link: '',
                    price: '',
                    notes: '',
                    file: ''
                };
            });
    }

}