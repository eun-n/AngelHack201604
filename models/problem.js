'use strict';
module.exports = function(sequelize, DataTypes) {
  var problem = sequelize.define('problem', {
    username: DataTypes.STRING,
    postTitle: DataTypes.STRING,
    category: DataTypes.STRING,
    date: DataTypes.DATE,
    picture: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return problem;
};