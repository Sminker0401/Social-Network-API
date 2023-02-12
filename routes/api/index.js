const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoute');
const userRoutes = require('./userRoute');

router.use('/user', userRoutes);
router.use('/thought', thoughtRoutes);

module.exports = router;