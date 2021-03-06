const router = require('express').Router();
const {User, Recipe, Category, Comments} = require('../../../models');

// get all recipes that are desserts
router.get('/', async (req,res) => {
    try{
        const dessertData = await Recipe.findAll({
            include: [{
                model: User,
                attributes: ['first_name','last_name']
            }],
            where: {
                category_id: 4,
            }
        });

        const recipes = dessertData.map((dessert) => dessert.get({plain:true}));
    
        res.render('category', {recipes});
        
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;
