'use strict';
module.exports = (sequelize, DataTypes) => {
  const posts = sequelize.define('posts', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    post_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    premium: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });
  posts.associate = function(models) {
    posts.belongsTo(models.property, { foreignKey: 'propertyId' });
  };
  return posts;
};
