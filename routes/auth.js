var express    = require('express');
var signup     = require('./auth/signup');
var login      = require('./auth/login');
var google     = require('./auth/google');
var instagram  = require('./auth/instagram');
var facebook   = require('./auth/facebook');
var router     = express.Router();

router.use(instagram);
router.use(facebook);
router.use(signup);
router.use(google);
router.use(login);

module.exports = router;
