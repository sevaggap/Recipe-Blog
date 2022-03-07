const router = require('express').Router();
//const {User, Recipe, Category, Comments} = require('../../models');
const withAuth = require('../../utils/auth');

// render add recipe page
router.get('/', withAuth, async (req,res) => {
    try {
        res.render('add-recipe');
    } catch (err) {
        res.status(500).json(err);
    }
});

// add a recipe
router.post('/', withAuth, async (req,res) => {
    try{
        if(req.body.category == 'Snack') {
            category = 1;
        } else if(req.body.category == 'Appetizer') {
            category = 2;
        } else if(req.body.category == 'Entree') {
            category = 3;
        } else if(req.body.category == 'Dessert') {
            category = 4;
        }

        const newRecipeData = await Recipe.create({
            title: req.body.title,
            description: req.body.description,
            ingredients: req.body.ingredients,
            steps: req.body.steps,
            category_id: category,
            user_id: req.session.user_id,
        });

        res.status(200).json(newRecipeData);
        res.render('dashboard');
        
    } catch (err) {
    res.status(500).json(err);
    }
});

module.exports = router;
