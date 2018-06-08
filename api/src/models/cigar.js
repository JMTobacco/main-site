export default (sequelize, DataTypes) => {
  return sequelize.define('cigars', {
    name: {
      type: DataTypes.STRING,
    },
    cigar: {
      type: DataTypes.TEXT,
    },
  });
}
