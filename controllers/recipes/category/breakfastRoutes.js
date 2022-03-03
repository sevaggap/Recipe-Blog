const router = require('express').Router();
//const {User, Recipe, Category, Comments} = require('../../models');

// get all recipes that are snacks
router.get('/', async (req,res) => {
    try{
        const breakfastData = await Recipe.findAll({
            include: [{
                model: User,
                attributes: ['first_name','last_name']
            }],
            where: {
                category_id: 4,
            }
        });

        const breakfasts = breakfastData.map((breakfast) => breakfast.get({plain:true}));
    
        res.render('category', breakfasts);

    } catch (err) {
        res.status(500).json(err)
    }
});

// get a specific recipe
router.get('/:id', async (req,res) => {
    try{
        const breakfastData = await Recipe.findByPk(req.params.id, {
            include: [{
                model: User,
                attributes: ['first_name','last_name']
            }]
        })

        const breakfast = breakfastData.get({plain:true});

        res.render("snacks", breakfast);

    } catch (err) {
        res.status(500).json(err);
    }
})
module.exports = router;
