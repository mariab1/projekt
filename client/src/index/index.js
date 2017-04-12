export class Home {
    constructor(router) {
        this.router = router;
        this.message = "";
    }

    signup () {
        this.router.navigateToRoute('signup');
    }
}