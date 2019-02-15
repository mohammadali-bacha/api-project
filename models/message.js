'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    content: DataTypes.STRING,
    name: DataTypes.STRING,
  }, {});
  Message.associate = function(models) {
    // associations can be defined here
  };
  return Message;
};