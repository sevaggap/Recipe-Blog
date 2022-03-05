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

        const desserts = dessertData.map((dessert) => dessert.get({plain:true}));
    
        res.render('category', desserts);
        
    } catch (err) {
        res.status(500).json(err)
    }
})

// get a specific recipe
router.get('/:id', async (req,res) => {
    try{
        const dessertData = await Recipe.findByPk(req.params.id, {
            include: [{
                model: User,
                attributes: ['first_name','last_name']
            }]
        });

        const dessert = dessertData.get({plain:true});

        res.render('desserts', dessert);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;
