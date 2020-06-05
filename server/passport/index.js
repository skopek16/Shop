// Passport.js
const passport = require("passport");
const passportLocal = require("passport-local");
const passportHttp = require("passport-http");

// reprezentacja „użytkownika” (Mongoose)
const User = require("../models/User");

// Konfiguracja Passport.js
const validateUser = (userName, password, done) => {
    User.findOne({userName: userName}, (err, user) => {
        console.log("w paspport")
        if (err) {
            console.log("w err")
            done(err);
        }
        if (user) {
            if (user.isValidPassword(password)) {
                done(null, user);
            } else {
                done(null, null);
            }
        } else {
            done(null, null);
        }
    });
};

passport.use(new passportLocal.Strategy({usernameField:"userName"},validateUser));
passport.use(new passportHttp.BasicStrategy(validateUser));

// mówi o tym jak pamiętać user-a w sesji (tutaj poprzez _id z MongoDB)
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// mówi o tym jak na podstawie danych z sesji sesji odtworzyć user-a
passport.deserializeUser((id, done) => {
    User.findOne({"_id": id}, (err, user) => {
        if (err) {
            done(err);
        }
        if (user) {
            done(null, {
                id: user._id,
                userName: user.userName,
                password: user.password
            });
        } else {
            done({
                msg: "Nieznany ID"
            });
        }
    });
});

module.exports = passport;
