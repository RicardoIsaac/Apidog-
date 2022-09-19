const { DataTypes } = require('sequelize');

module.exports = (sequelize) => { 

  sequelize.define('TempCat', { 

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  }, 
  );
};