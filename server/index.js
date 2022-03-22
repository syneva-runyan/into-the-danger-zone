const express = require('express');
const router = express.Router();
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use("/", router);


app.get('/', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    fs.readFile('./profileInfo.json', 'utf8', (err, data) => {
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

app.post('/updateProfile', function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");

    // check to make sure profile info provided. 
    // TODO add validation.
    const { profileKey, updatedProfile } = req.body;

    fs.readFile('./profileInfo.json', 'utf8', (err, data) => {
        if (err) {
            console.log(`Error reading file from disk: ${err}`);
            res.send("error");
        } else {
            const profileInfo = JSON.parse(data);
            profileInfo[profileKey] = updatedProfile;
            fs.writeFile('./profileInfo.json', JSON.stringify(profileInfo), (err) => {
                if (err) {
                    res.send("error");
                } else {
                    res.json({"status": "success", updatedProfile });
                    return;
                }
              });
        }
    });
});

app.post('/resetProfileInfo', function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");

    fs.readFile('./profileInfo_backup.json', 'utf8', (err, data) => {
        if (err) {
            console.log(`Error reading file from disk: ${err}`);
            res.send("error");
        } else {
            const profileInfo = JSON.parse(data);
            fs.writeFile('./profileInfo.json', JSON.stringify(profileInfo), (err) => {
                if (err) {
                    res.send("error");
                } else {
                    res.json({"status": "success", updatedProfiles: profileInfo });
                    return;
                }
              });
        }
    });
});

var server =  app.listen(8080, function () {  
    var host = server.address().address;  
    var port = server.address().port;  
    console.log("Example app listening at http://%s:%s", host, port)  
});
