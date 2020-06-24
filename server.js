const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config()

const port = process.env.PORT || 5000;

// Routes
const meeting = require('./routes/meeting');
const user = require('./routes/user');
const meetingApproval = require('./routes/meetingApproval');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use Routes
app.use('/meeting', meeting);
app.use('/user', user);
app.use('/meetingApproval', meetingApproval);

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static( 'client/build'));

//     app.get('*', (req,res) => {
//         res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
//     });
// }

app.listen(port, () => console.log(`App listening on port ${port}!`));
