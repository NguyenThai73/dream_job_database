module.exports = (sequelize, DataTypes) => {
    const Careers = sequelize.define("Careers", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        parentId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    );

    return Careers;
};