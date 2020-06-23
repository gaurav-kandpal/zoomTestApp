const express = require('express');
const app = express();
require('dotenv').config()

const port = process.env.PORT || 5000;

// Routes
const meeting = require('./routes/meeting');
const user = require('./routes/user');
const meetingApproval = require('./routes/meetingApproval');

// Middlewares
app.use(express.json());
app.use(express.urlencoded());

// Use Routes
app.use('/meeting', meeting);
app.use('/user', user);
app.use('/meetingApproval', meetingApproval);

app.listen(port, () => console.log(`App listening on port ${port}!`));
