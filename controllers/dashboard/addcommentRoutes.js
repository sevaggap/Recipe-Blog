const router = require('express').Router();
const {User, Recipe, Category, Comment} = require('../../models');
const withAuth = require('../../utils/auth');

// render add recipe page
router.post('/', withAuth, async (req,res) => {
    try {
        
        const newCommentData = await Comment.create({
            text: req.body.comment,
            recipe_id: req.body.recipeid,
            user_id: req.session.user_id,
        });

        res.status(200).json(newCommentData);
        res.render('dashboard');

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
