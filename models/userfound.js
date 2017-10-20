// index.js runs this JavaScript file through Sequelize and exports an object used to interface with Sequelize in other files
// index.js provides vars sequelize and DataTypes
// sequelize is the connection to the db; DataTypes define what type of data each propery on our model should be
// Using the sequelize.define method and passing to arguments: the name of the modelas a string, and an object with model's schema
module.exports = function(sequelize, DataTypes){
var UserFound = sequelize.define("UserFound", {
  nameFound: {
    type: DataTypes.STRING,
    allowNull: false,
      validate: {
        len: [1]
      }
  },
  emailFound: {
    type: DataTypes.STRING,
    allowNull: false,
      validate: {
        isEmail: true,
        len: [1]
      }
  },
  phoneFound: {
    type: DataTypes.STRING,
  },
  addressFound: {
    type: DataTypes.STRING,
    allowNull: false,
      validate: {
        len: [1]
      }
  },
  typeFound: {
    type: DataTypes.STRING,
    allowNull: false,
      validate: {
        len: [1]
      }
  },
  dateFound: {
    type: DataTypes.STRING,
    allowNull: false,
      validate: {
        len: [1]
      }
  },
  genderFound: {
    type: DataTypes.STRING,
  },
  commentFound: {
    type: DataTypes.STRING,
  },
  photoFound: {
    type: DataTypes.TEXT,
  }
});

return UserFound;
};
