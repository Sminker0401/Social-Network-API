const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoute');
const userRoutes = require('./userRoutes');

router.use('/user', userRoute);
router.use('/thought', thoughtRoute);

module.exports = router;