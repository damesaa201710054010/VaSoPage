const app = require('./app');
require('./database');
//const ngrok = require('ngrok');

async function main() {
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
    /*app.listen(app.get('port'), app.get('ip'));
    const url = await ngrok.connect(app.get('port'));
    console.log(url);*/
}

main();