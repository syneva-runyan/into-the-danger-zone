const express = require('express');
const fs = require('fs');
const cors = require('cors');
// const url = require('url');
// const bodyParser = require('body-parser');

const app = express();

app.use(cors());

// app.use(express.static('public', {}));
// // parse application/json
// app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    fs.readFile('../public/profileInfo.json', 'utf8', (err, data) => {
        if (err) {
            console.log(`Error reading file from disk: ${err}`);
            res.send("error")
        } else {
            // parse JSON string to JSON object
            const profileInfo = JSON.parse(data);
            res.json({"status": "success", profileInfo});
        }
    
    });
});

app.post('/setProfileInfo', function(request, respond) {
    // filePath = __dirname + '/public/profileInfo.json';
    // fs.appendFile(filePath, request.body, function () {
    //     respond.end();
    // });
});

app.listen(8080);