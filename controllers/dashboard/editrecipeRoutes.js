const router = require('express').Router();
//const {User, Recipe, Category, Comments} = require('../../models');
const withAuth = require('../../utils/auth');

// render add recipe page
router.get('/:id', async (req,res) => {
    try {
        res.render('loginpage');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
