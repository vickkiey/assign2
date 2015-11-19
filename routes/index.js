

var express = require('express');
var passport = require('passport');
var router = express.Router();

var User = require('../models/user');

/* Render home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Victoria Gillis Portfolio',
    displayName: req.user ? req.user.displayName : ''
    });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me', 
            displayName: req.user ? req.user.displayName : '' 
             });
});
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects', 
            displayName: req.user ? req.user.displayName : '' 
             });
});
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services', 
            displayName: req.user ? req.user.displayName : '' 
           });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' , 
            displayName: req.user ? req.user.displayName : '' 
           });
});


/* Render Login page. */
router.get('/login', function (req, res, next) {
    if (!req.user) {
        res.render('login', {
            title: 'Login',
           messages: req.flash('loginMessage'), 
            displayName: req.user ? req.user.displayName : ''
        });
    }
    else {
        return res.redirect('/articles');
    }
});

/* Process the Login Request */
router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/articles',
    failureRedirect: '/login',
    failureFlash: true
}));

/* Show Registration Page */
router.get('/register', function (req, res, next) {
    if (!req.user) {
        res.render('register', {
            title: 'Register',
          messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    }
    else {
        return res.redirect('/articles');
    }
});

/* POST signup data. */
router.post('/register', passport.authenticate('local-registration', {
    //Success go to Profile Page / Fail go to Signup page
    successRedirect : '/articles',
    failureRedirect : '/register',
    failureFlash : true
}));


/* Process Logout Request */
router.get('/logout', function (req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;



module.exports = router;
