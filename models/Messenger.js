// import Users
module.exports = (sequelize, DataTypes) => {
    const Messenger = sequelize.define("Messenger", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        job_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        to: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeSend: {
            type: DataTypes.DATE,
            allowNull: false
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    },
    );

    return Messenger;
};