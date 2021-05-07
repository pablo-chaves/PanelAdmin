'use strict';
module.exports = (sequelize, DataTypes) => {
  const country = sequelize.define('country', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
      isUrl: true
    },
    continent: {
      type: DataTypes.ENUM('Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Polar', ''),
      allowNull: false
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subregion: {
      type: DataTypes.STRING
    },
    area: {
      type: DataTypes.INTEGER
    },
    population: {
      type: DataTypes.INTEGER
    }
  } , {
    timestamps: false
  }, {});

  return country;
};
