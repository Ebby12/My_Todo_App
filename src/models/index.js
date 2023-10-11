const User = require("./User");
const Task = require("./Task");


// some relations or associations
User.hasMany(Task, {
  onDelete: "CASCADE",
  foreignKey: {
    allowNull: false,
  },
});
Task.belongsTo(User);

module.exports = {
  Task,
  User,
};
