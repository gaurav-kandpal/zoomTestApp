const rp = require('request-promise');
const express = require('express');
const fs = require('fs');
const router = express.Router();



router.post('/meetingRequested', (req, res) => {
    const flag = req.body.flag
    console.log('flag', flag);
    fs.writeFile('meetingRequested.txt', flag, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

    res.send({ flag });
})

router.post('/meetingApprovalSubmitted', (req, res) => {
    const flag = req.body.flag
    console.log('flag', flag);
    fs.writeFile('meetingApproved.txt', flag, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

    res.send({ flag });
})

router.get('/meetingRequestedRetreived', (req, res) => {
    const approved = fs.readFileSync('meetingRequested.txt', 'utf8');

    res.send({ approved });
})

router.get('/meetingApprovalRetreived', (req, res) => {
    const approved = fs.readFileSync('meetingApproved.txt', 'utf8');

    res.send({ approved });
})

module.exports = router;