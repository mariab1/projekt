define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  class App {

    configureRouter(config, router) {
      this.router = router;
      config.title = 'Aurelia';

      config.map([{ route: ['', 'home'], name: 'home', moduleId: 'index' }, { route: 'dashboard', name: 'dashboard', moduleId: 'dashboard', nav: true }]);
    }
  }
  exports.App = App;
});
define('dashboard',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    class Dashboard {
        constructor() {
            this.message = "";
            this.bodyClass = "home";
        }

    }
    exports.Dashboard = Dashboard;
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
define('index',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    class Home {
        constructor() {
            this.message = "";
        }

    }
    exports.Home = Home;
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
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n    <router-view></router-view>    \n</template>\n"; });
define('text!dashboard.html', ['module'], function(module) { module.exports = "<template>\n    <div>\n        <nav class=\"navbar navbar-inverse\">\n            <div class=\"container-fluid\">\n                <div class=\"navbar-header\">\n                    <a class=\"navbar-logo\">\n                    <img alt=\"Logo\" src=\"styles/logo2.png\" height=\"40px\"\n                    </a>\n                </div>\n            </div>\n        </nav>\n            <div class=\"columns pull-left\">\n                <div class=\"column\">\n                    <h2>Hello, Reelika!</h2>\n                    <a href=\"\">Create a new project</a>\n                    <p>Your projects:</p>\n                    <a href=\"\">My Apartment</a>\n                    <a href=\"\">Maria's home</a>\n                    <!--<a href=\"\">Change your profile</a>-->\n                </div>\n            </div>\n        \n        <div class=\"column box\">\n            <center>\n            <form>\n                <p>Submit your interior idea</p>\n                <input type=\"file\" name=\"fileToUpload\">\n                <textarea placeholder=\"Add a link\"></textarea>\n                <textarea placeholder=\"Price\"></textarea>\n                <textarea placeholder=\"Add additional notes\"></textarea>\n                <button type=\"submit\">Submit</button>\n            </form>\n            </center>\n        </div>\n    </div>\n\n</template>"; });
define('text!index.html', ['module'], function(module) { module.exports = "<template>\n    \n    <body class=\"home\">\n        <nav class=\"navbar navbar-inverse\">\n            <div class=\"container-fluid\">\n                <div class=\"navbar-header\">\n                    <a class=\"navbar-logo\">\n                    <img alt=\"Logo\" src=\"styles/logo2.png\" height=\"40px\"\n                    </a>\n                </div>\n            </div>\n        </nav>\n        <center>\n        <div class=\"panel\">\n            <h2>Are you making plans for your new home and want to store your ideas?</h2>\n            <h3>We've got you covered. Sign up and see yourself!</h3>\n            <form>\n                \n                <input name=\"reg_email\" type=\"text\" placeholder=\"email\">\n                <input name=\"reg_username\" type=\"text\" placeholder=\"username\">\n                <input name=\"reg_password\" type=\"text\" placeholder=\"password\">\n                <button type=\"submit\">Sign up</button> \n            </form>\n        </div>        \n        </center>\n    </body>\n</template>\n    "; });
//# sourceMappingURL=app-bundle.js.map