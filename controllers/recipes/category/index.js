const router = require('express').Router();
const appetizerRoutes = require('./appetizerRoutes');
const entreeRoutes = require('./entreeRoutes');
const dessertRoutes = require('./dessertRoutes');
const breakfastRoutes = require('./breakfastRoutes');
const addcommentsRoutes = require('./addcommentRoutes');

router.use('/Appetizers', appetizerRoutes);
router.use('/Entrees', entreeRoutes);
router.use('/Desserts', dessertRoutes);
router.use('/Breakfast', breakfastRoutes);
router.use('/addcomment', addcommentsRoutes);

module.exports = router;
