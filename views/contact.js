// index.js runs this JavaScript file through Sequelize and exports an object used to interface with Sequelize in other files
// index.js provides vars sequelize and DataTypes
// sequelize is the connection to the db; DataTypes define what type of data each propery on our model should be
// Using the sequelize.define method and passing to arguments: the name of the modelas a string, and an object with model's schema
module.exports = function(sequelize, DataTypes){
var Contact = sequelize.define("Contact", {
  nameContact: {
    type: DataTypes.STRING,
    allowNull: false,
      validate: {
        len: [1]
      }
  },
  emailContact: {
    type: DataTypes.STRING,
    allowNull: false,
      validate: {
        len: [1]
      }
  },
  petsOfInterest: {
    type: DataTypes.STRING,
    allowNull: false,
      validate: {
        len: [1]
      }
  },
  commentContact: {
    type: DataTypes.STRING,
  },
});

return Contact;
};
