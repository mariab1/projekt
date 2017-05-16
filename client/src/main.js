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
    aurelia.use
      .developmentLogging()
      .plugin('aurelia-configuration', config => {
        config.setEnvironment('development');
      });
  } else if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  } else {
    aurelia.use
      .plugin('aurelia-configuration', config => {
        config.setEnvironment('production');
      });
  }

  aurelia.use
      .plugin('aurelia-animator-css')
      .plugin('aurelia-auth', (baseConfig) => {
          baseConfig.configure(authConfig);
      });

  aurelia.start().then(() => aurelia.setRoot());
}
