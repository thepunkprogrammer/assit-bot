const express = require('express');
const parser = require('body-parser');

const rest = express();

rest.use(parser.urlencoded({
    extended: true
}));

rest.use(parser.json());

rest.post('/google_now_bot', function(req, res) {
    var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.message ? req.body.result.parameters.message : "I cannot get you, please speak again."
        res.json({
            message: speech,
            displayText: speech,
            source: 'rehan-bot' 
        });
});


rest.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});