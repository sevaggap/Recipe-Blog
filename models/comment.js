const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    recipe_id: {
        type: DataTypes.INTEGER,
        references: {
        model: 'recipe',
        key: 'id',
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
        model: 'user',
        key: 'id',
        }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Comment',
  }
);

module.exports = Comment;