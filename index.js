require('colors');
let express = require('express');
let bodyParser = require('body-parser');
let app = express();

// We allow more requests
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(bodyParser.json());

app.use(express.static('./')); // Distributing public folder

// ~~~~~~~~~~~~~ ROUTING ~~~~~~~~~~~~~~~

app.get('/admin', function(req, res) {
    console.log('GET Request at myRoute with Param : ', req.params.myParam);
});

// ~~~~~~~~~~~~ ROUTING END ~~~~~~~~~~~~~~~~~~~~

let server = app.listen(8080, '127.0.0.1', function() {
    let serverInfo = server.address();
    console.log(('\n\t Server takes a Jet-Express on http://' + serverInfo.address + ':' + serverInfo.port));
    console.log('The Jet-Express flight like an Eagle!'.rainbow);
    // We use .color after a string for a max of debugging style
});