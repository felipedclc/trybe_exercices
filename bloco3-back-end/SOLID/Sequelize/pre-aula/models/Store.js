const Store = (sequelize, DataTypes) => {
  const Store = sequelize.define('Store', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, { timestamps : false }); // para usar sem o createdAt e updatedAt

  return Store;
}

module.exports = Store;