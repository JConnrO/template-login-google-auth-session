const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const PORT = process.env.PORT || 5000;

require('./models/user');
require('./services/passport'); // just need this file to execute

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        //      day/hour/ min/ sec/ mil
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]

    })
)
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

app.listen(PORT, () => {
    console.log("Express server listening on port ", `${PORT}`)
});
