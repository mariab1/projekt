let configForDevelopment = {
    loginRedirect: '#/dashboard',
    baseUrl: 'http://iplanner.dev'
};

let configForProduction = {
    loginRedirect: 'dashboard',
    baseUrl: 'http://iplanner.dev'
};
let config = configForProduction;
if (window.location.hostname === 'localhost') {
    config = configForDevelopment;
}

export default config;