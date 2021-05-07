'use strict';
module.exports = (sequelize, DataTypes) => {
  const favorites = sequelize.define('favorites', {
    id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
});
// Company.associate = function(models) {
//   Company.belongsTo(models.User, { foreignKey: ‘user_id’ });
// };
return favorites;
};
