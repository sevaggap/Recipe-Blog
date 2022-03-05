const router = require('express').Router();
const {User, Recipe, Category, Comments} = require('../../../models');

// get all recipes that are entree
router.get('/', async (req,res) => {
    try{
        const entreeData = await Recipe.findAll({
            include: [{
                model: User,
                attributes: ['first_name','last_name']
            }],
            where: {
                category_id: 3,
            }
        });

        const recipes = entreeData.map((entree) => entree.get({plain:true}));
    
        res.render('category', recipes);

    } catch (err) {
        res.status(500).json(err)
    }
});

// get a specific recipe
router.get('/:id', async (req,res) => {
    try{
        const entreeData = await Recipe.findByPk(req.params.id, {
            include: [{
                    model: User,
                    attributes: ['first_name','last_name']
            }]
        });

        const entree = entreeData.get({plain:true});

        res.render('entrees', entree);

    } catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router;
