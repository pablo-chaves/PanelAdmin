'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('post', {
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
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('post');
  }
};
