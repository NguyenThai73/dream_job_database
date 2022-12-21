module.exports = (sequelize, DataTypes) => {
    const Employers = sequelize.define("Employers", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        userName: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        avatar: {
            type: DataTypes.STRING,
        },
        logo: {
            type: DataTypes.STRING,
        },
        addRess: {
            type: DataTypes.STRING(100),
        },
        sdt: {
            type: DataTypes.STRING(15),
        },
        email: {
            type: DataTypes.STRING(30),
        },
        career: {
            type: DataTypes.STRING,
        },
        scale: {
            type: DataTypes.STRING(100),
        },
        introduce: {
            type: DataTypes.STRING(3000),
        },
        status: {
            type: DataTypes.INTEGER,
        }
    }
    );

    return Employers;
};