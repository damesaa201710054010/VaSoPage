const app = require('./app');
require('./database');
//const ngrok = require('ngrok');

async function main() {
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
    
}

main();