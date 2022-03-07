const router = require('express').Router();
const {User, Recipe, Category, Comments} = require('../../models');

// get a specific recipe
router.get('/:id', async (req,res) => {
    try{
        const recipeData = await Recipe.findByPk(req.params.id, {
            include: [{
                model: User,
                attributes: ['first_name','last_name']
            }]
        });

        const recipe = recipeData.get({plain:true});

        const ingredients = recipeData.ingredients.split(';');
        const steps = recipeData.steps.split(';');
        
        console.log(recipe);
        
        console.log(ingredients);
        console.log(steps);
        console.log(recipe);
        
        res.render('single-recipe', {recipe,ingredients,steps})
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;