const router = require('express').Router();
//const {User, Recipe, Category, Comments} = require('../../models');
const withAuth = require('../../../utils/auth');

// add a recipe
router.post('/', withAuth, async (req,res) => {
    try{
        const newRecipeData = await Recipe.create(req.body);

        res.status(200).json(newRecipeData);
        res.render('homepage');
        
    } catch (err) {
    res.status(500).json(err);
    }
});
module.exports = router;
