import environment from './environment';
import authConfig from 'config/authConfig';

//Configure Bluebird Promises.
Promise.config({
  warnings: {
    wForgottenReturn: false
  }
});

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.use
      .plugin('aurelia-animator-css')
      .plugin('aurelia-auth', (baseConfig) => {
          baseConfig.configure(authConfig);
      });

  aurelia.use
      .plugin('aurelia-bootstrap')
      .feature('resources');

  aurelia.start().then(() => aurelia.setRoot());
}
