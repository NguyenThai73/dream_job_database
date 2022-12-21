module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        fullname: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        birthday: {
            type: DataTypes.DATE,
        },
        sdt: {
            type: DataTypes.STRING(12),
        },
        gender: {
            type: DataTypes.INTEGER,
        },
        idCardNo: {
            type: DataTypes.STRING(30),
        },
        addRess: {
            type: DataTypes.STRING,
        },
        cv: {
            type: DataTypes.STRING,
        },
        avatar: {
            type: DataTypes.STRING,
        },
        height: {
            type: DataTypes.INTEGER,
        },
        career: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.INTEGER,
        },
        rules: {
            type: DataTypes.INTEGER,
        },
    },
    );
    return Users;
};








