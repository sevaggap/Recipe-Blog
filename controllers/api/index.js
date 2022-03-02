const router = require('express').Router();
const appetizerRoutes = require('./appetizerRoutes');
const entreeRoutes = require('./entreeRoutes');
const dessertRoutes = require('./dessertRoutes');
const snackRoutes = require('./snackRoutes');
const userRoutes = require('./userRoutes');
const addrecipeRoutes = require('./addrecipeRoutes');
const addcommentsRoutes = require('./addcommentRoutes');

router.use('/appetizers', appetizerRoutes);
router.use('/entrees', entreeRoutes);
router.use('/desserts', dessertRoutes);
router.use('/snacks', snackRoutes);
router.use('/users', userRoutes);
router.use('/addrecipe', addrecipeRoutes)
router.use('/addcomment', addcommentsRoutes);

module.exports = router;
