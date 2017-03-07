define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  class App {
    constructor() {
      this.message = '';
    }
  }
  exports.App = App;
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  //Configure Bluebird Promises.
  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(() => aurelia.setRoot());
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {
    //config.globalResources([]);
  }
});
define('dashboard',[], function () {
  "use strict";
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <body class=\"background-image\">\n        <nav class=\"navbar navbar-inverse\">\n            <div class=\"container-fluid\">\n                <div class=\"navbar-header\">\n                    <a class=\"navbar-logo\">\n                    <img alt=\"Logo\" src=\"styles/logo2.png\" height=\"40px\"\n                    </a>\n                </div>\n            </div>\n        </nav>\n        <center>\n        <div class=\"panel\">\n            <h2>Are you making plans for your new home and want to store your ideas?</h2>\n            <h3>We've got you covered. Sign up and see yourself!</h3>\n            <form>\n                \n                <input name=\"reg_email\" type=\"text\" placeholder=\"email\">\n                <input name=\"reg_username\" type=\"text\" placeholder=\"username\">\n                <input name=\"reg_password\" type=\"text\" placeholder=\"password\">\n                <button type=\"submit\">Sign uppp</button> \n            </form>\n        </div>        \n        </center>\n    </body>\n</template>\n"; });
define('text!dashboard.html', ['module'], function(module) { module.exports = ""; });
//# sourceMappingURL=app-bundle.js.map