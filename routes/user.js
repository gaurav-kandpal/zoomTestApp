const rp = require('request-promise');
const express = require('express');
const router = express.Router();

const token = require('../common/token');

router.get('/details', (req, res) => {
    const userId = '00NAA7rTTaSdcRit_QRoUw';
    // const userId = '7sD7hcj3StmL_eqJmqY_qA';

    let options = {
        uri: 'https://api.zoom.us/v2/users/' + userId,
        qs: { status: 'active' },
        auth: { 'bearer': token },
        headers: {
            'User-Agent': 'Zoom-api-Jwt-Request',
            'content-type': 'application/json'
        },
        json: true
    };

    rp(options)
        .then(function (response) {
            res.send(response);
        })
        .catch(function (err) {
            res.status(500).send(err.message);
            console.log('API call fail');
        });
});

router.post('/app', (req, res) => {
    const email = req.body.email;
    let options = {
        uri: 'https://api.zoom.us/v2/users/' + email,
        qs: { status: 'active' },
        auth: { 'bearer': token },
        headers: {
            'User-Agent': 'Zoom-api-Jwt-Request',
            'content-type': 'application/json'
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

module.exports = router;
