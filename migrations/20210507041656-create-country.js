'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('countries', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      flag: {
        type: Sequelize.STRING,
      },
      continent: {
        type: Sequelize.ENUM('Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Polar', ''),
      },
      capital: {
        type: Sequelize.STRING,
      },
      subregion: {
        type: Sequelize.STRING
      },
      area: {
        type: Sequelize.INTEGER
      },
      population: {
        type: Sequelize.INTEGER
      }
    } , {
      timestamps: false
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('countries');
  }
};
