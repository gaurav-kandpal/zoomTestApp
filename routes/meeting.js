const rp = require('request-promise');
const express = require('express');
const router = express.Router();

const config = require('../config');
const token = require('../common/token');
const generateSignature = require('../common/signature');


router.post('/create', (req, res) => {
    const meeting_topic = req.body.meeting_topic || "Vishant's Meeting";
    const meeting_number = req.body.meeting_number;
    const meeting_pwd = req.body.meeting_pwd;

    let options = {
        uri: 'https://api.zoom.us/v2/users/00NAA7rTTaSdcRit_QRoUw/meetings', // VIShant
        // uri: 'https://api.zoom.us/v2/users/qeCLkVSjSeqPZ6l7bes1wQ/meetings', // Nitish's
        auth: { 'bearer': token },
        method: 'POST',
        headers: {
            'User-Agent': 'Zoom-api-Jwt-Request',
            'content-type': 'application/json'
        },
        body: {
            "topic": meeting_topic,
            "type": 3,
            "start_time": "2020-06-08T011:35:00Z",
            "duration": 60,
            "timezone": "Asia/Calcutta",
            "password": meeting_pwd,
            "agenda": "Meeting Description goes here....",
            "settings": {
                "host_video": true,
                "participant_video": true,
                "in_meeting": true,
                "join_before_host": true,   
                "mute_upon_entry": true,
                "approval_type": 2,
                "audio": "both",
                "auto_recording": "local",
                "option_jbh": true
            }
        },
        json: true
    };

    // Use request-promise module's .then() method to make request calls.
    rp(options)
        .then(function (response) {
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
    const GLOBAL_MEETING = config.MeetingId;

    const sign = generateSignature(API_KEY, API_SECRET, GLOBAL_MEETING, 0)
    res.send({ sign: sign });
})

module.exports = router;