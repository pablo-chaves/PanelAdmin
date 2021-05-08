'use strict';
module.exports = (sequelize, DataTypes) => {
  const visitDate = sequelize.define('visitDate', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  visitDate.associate = function(models) {
    visitDate.belongsTo(models.property, { foreignKey: 'propertyId' });
    visitDate.belongsTo(models.users, { foreignKey: 'userId' });
  };
  return visitDate;
};
