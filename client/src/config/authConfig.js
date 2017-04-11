let configForDevelopment = {
    loginRedirect: '#/dashboard',
    baseUrl: 'http://iplanner.dev',
    profileUrl: '/api/user',
};

let configForProduction = {
    loginRedirect: '#/dashboard',
    baseUrl: 'http://iplanner.eleanor.ee'
};
let config = configForProduction;
if (window.location.hostname === 'localhost') {
    config = configForDevelopment;
}

export default config;