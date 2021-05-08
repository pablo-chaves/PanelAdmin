'use strict';
module.exports = (sequelize, DataTypes) => {
  const images = sequelize.define('images', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
      isUrl: true,
    },
  });
images.associate = function(models) {
  images.belongsTo(models.property, { foreignKey: 'propertyId' });
};
return images;
};
