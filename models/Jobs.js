module.exports = (sequelize, DataTypes) => {
    const Jobs = sequelize.define("Jobs", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        career_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        employer_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        qty: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        salary: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        addRess: {
            type: DataTypes.STRING,
        },
        age: {
            type: DataTypes.STRING(30),
        },
        englishLevel: {
            type: DataTypes.STRING,
        },
        exp: {
            type: DataTypes.STRING(30),
        },
        expirationDate: {
            type: DataTypes.DATE,
        },
        otherRequirements: {
            type: DataTypes.STRING(3000),
        },
        provinceCode: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status: {
            type: DataTypes.INTEGER,
        }
    },
    );

    return Jobs;
};