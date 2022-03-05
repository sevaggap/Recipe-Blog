const router = require('express').Router();
const {User, Recipe, Category, Comments} = require('../../../models');

// get all recipes that are snacks
router.get('/', async (req,res) => {
    try{
        const snackData = await Recipe.findAll({
            include: [{
                model: User,
                attributes: ['first_name','last_name']
            }],
            where: {
                category_id: 1,
            }
        });

        const recipes = snackData.map((snack) => snack.get({plain:true}));
    
        res.render('category', recipes);

    } catch (err) {
        res.status(500).json(err)
    }
});

// get a specific recipe
router.get('/:id', async (req,res) => {
    try{
        const snackData = await Recipe.findByPk(req.params.id, {
            include: [{
                model: User,
                attributes: ['first_name','last_name']
            }]
        })

        const snack = snackData.get({plain:true});

        res.render("snacks", snack);

    } catch (err) {
        res.status(500).json(err);
    }
})
module.exports = router;
