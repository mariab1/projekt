export class App {
 
configureRouter(config, router) {
    this.router = router;
    config.title = 'Aurelia';
    
    config.map([
      { route: ['', 'home'],       name: 'home',       moduleId: 'index' },
      { route: 'dashboard',            name: 'dashboard',      moduleId: 'dashboard',   nav: true }
    ]);
  }
}
