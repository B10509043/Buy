// connect mongo db
require('../server/db').initialize();

// run web server
require('./www');