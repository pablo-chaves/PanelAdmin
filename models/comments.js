'use strict';
module.exports = (sequelize, DataTypes) => {
  const comments = sequelize.define('comments', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    stars: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
comments.associate = function(models) {
  comments.belongsTo(models.users, { foreignKey: 'userId' });
  comments.belongsTo(models.posts, { foreignKey: 'postId' });
};
return comments;
};
