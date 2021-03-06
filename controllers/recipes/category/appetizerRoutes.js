const router = require('express').Router();
const {User, Recipe, Category, Comments} = require('../../../models');

// get all the recipes that are appetizers
router.get('/', async (req,res) => {
    try{
        const appetizerData = await Recipe.findAll({
            include: [{
                model: User,
                attributes: ['first_name','last_name']
            }],
            where: {
                category_id: 2,
            }
        });
        
        const recipes = appetizerData.map((appetizer) => appetizer.get({plain:true}));
    
        res.render('category', {recipes});
        
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;
