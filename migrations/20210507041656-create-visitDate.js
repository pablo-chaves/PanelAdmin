'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('images', {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('images');
  }
};
