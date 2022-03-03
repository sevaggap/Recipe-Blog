const router = require('express').Router();
const appetizerRoutes = require('./appetizerRoutes');
const entreeRoutes = require('./entreeRoutes');
const dessertRoutes = require('./breakfastRoutes');
const breakfastRoutes = require('./breakfastRoutes');
const userRoutes = require('./userRoutes');
const addrecipeRoutes = require('./addrecipeRoutes');
const addcommentsRoutes = require('./addcommentRoutes');

router.use('/Appetizers', appetizerRoutes);
router.use('/Entrees', entreeRoutes);
router.use('/Desserts', dessertRoutes);
router.use('/Breakfast', breakfastRoutes);
router.use('/users', userRoutes);
router.use('/addrecipe', addrecipeRoutes)
router.use('/addcomment', addcommentsRoutes);

module.exports = router;
