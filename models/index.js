const User = require('./User');
const Category = require('./Category');
const Recipe = require('./Recipe');
const Comment = require('./Comment');

Recipe.belongsTo(Category, {
    foreignKey: 'category_id'
});

Category.hasMany(Recipe, {
foreignKey: 'category_id',
onDelete: 'CASCADE'
});

User.belongsToMany(Recipe, {
    through: {
      model: Comment,
      unique: false
    }, foreignKey:'user_id'
})

Recipe.belongsToMany(User, {
    through: {
      model: Comment,
      unique: false
    }, foreignKey:'recipe_id'
})

Recipe.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Recipe, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Recipe.hasMany(Comment, {
//     foreignKey: 'recipe_id',
//     onDelete: 'CASCADE'
// });

// Comment.belongsTo(Recipe, {
//     foreignKey: 'recipe_id'
// });

// User.hasMany(Comment, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// Comment.belongsTo(User, {
//     foreignKey: 'user_id',
// });

module.exports = { User, Category, Recipe, Comment };