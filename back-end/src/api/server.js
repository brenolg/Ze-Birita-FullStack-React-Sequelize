const App = require('./app');

const PORT = process.env.APP_PORT || 3001;

new App().start(PORT);
