const rp = require('request-promise');
const express = require('express');
const fs = require('fs');
const router = express.Router();

const config = require('../config');
const token = require('../common/token');
const generateSignature = require('../common/signature');


function generatePassword() {
    const password = Math.random().toString(36).slice(2)
    if (password.length > 10) {
        return generatePassword();
    }
    return password;
}

router.post('/create', (req, res) => {
    const meeting_topic = req.body.meeting_topic || "Vishant's Meeting";
    const meeting_number = req.body.meeting_number;
    const meeting_pwd = req.body.meeting_pwd || generatePassword();
    
    console.log('Password', meeting_pwd);
    console.log('Password-length', meeting_pwd.length);
    let options = {
        // uri: 'https://api.zoom.us/v2/users/00NAA7rTTaSdcRit_QRoUw/meetings', // VIShant
        uri: 'https://api.zoom.us/v2/users/7sD7hcj3StmL_eqJmqY_qA/meetings',
        auth: { 'bearer': token },
        method: 'POST',
        headers: {
            'User-Agent': 'Zoom-api-Jwt-Request',
            'content-type': 'application/json'
        },
        body: {
            "topic": meeting_topic,
            "type": 2,
            "start_time": "2020-06-23T16:15:00Z",
            "duration": 60,
            "timezone": "Asia/Calcutta",
            "password": meeting_pwd,
            "agenda": "Meeting Description goes here....",
            "settings": {
                "host_video": false,
                "participant_video": false,
                "in_meeting": true,
                "join_before_host": true,   
                "mute_upon_entry": true,
                "approval_type": 2,
                "audio": "both",
                "auto_recording": "local",
                "option_jbh": true,
                "waiting_room": false
            }
        },
        json: true
    };

    // Use request-promise module's .then() method to make request calls.
    rp(options)
        .then(function (response) {
            fs.writeFile('meetingNumber.txt', parseInt(response.id, 10).toString(), function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
            fs.writeFile('meetingPassword.txt', meeting_pwd, function (err) {
                if (err) throw err;
                console.log('Saved!!');
            });
            res.send(response);
        })
        .catch(function (err) {
            res.status(500).send(err.message);
            console.log('API call fail');
        });
});

router.post('/genSign', (req, res) => {
    const API_KEY = config.APIKey;
    const API_SECRET = config.APISecret;
    const meetingNum = fs.readFileSync('meetingNumber.txt', 'utf8');
    const meetingPwd = fs.readFileSync('meetingPassword.txt', 'utf8');
    const GLOBAL_MEETING = meetingNum;

    const sign = generateSignature(API_KEY, API_SECRET, GLOBAL_MEETING, 0)
    res.send({ sign: sign, meetingId: meetingNum, meetingPwd });
})

module.exports = router;