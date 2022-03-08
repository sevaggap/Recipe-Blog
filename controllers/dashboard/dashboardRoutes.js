const router = require('express').Router();
const withAuth = require('../../utils/auth');
const {User, Recipe, Category, Comments} = require('../../models');

// render the dashboard page
router.get('/', withAuth, async (req,res) => {
    try {

    const recipeData = await Recipe.findAll({
        include: [{
            model: User,
            attributes: ['first_name','last_name']
        }],
        where: {
            user_id: req.session.user_id,
        }
    });
    
    const recipes = recipeData.map((recipe) => recipe.get({plain:true}));

    console.log(recipes);

    res.render('dashboard',{recipes, loggedIn: req.session.logged_in});

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
