'use strict'
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    githubId: DataTypes.INTEGER
  }, {})
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Solution, {as: 'student', foreignKey: 'studentId', sourceKey: 'id'})
  }
  return User
}
