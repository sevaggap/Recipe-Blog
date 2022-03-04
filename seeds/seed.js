const sequelize = require('../config/connection');
const { User, Category, Recipe, Comment } = require('../models');

const userData = require('./userData.json');
const categoryData = require('./categoryData.json');
const recipeData = require('./recipeData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const category = await Category.bulkCreate(categoryData);

  const recipe = await Recipe.bulkCreate(recipeData);

  const comment = await Comment.bulkCreate(commentData);

  process.exit(0);
};

seedDatabase();