const db = require('../models');
const Users = db.Users;
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
require('dotenv').config();
exports.get = async (require, res) => {
    console.log(require.params);
    const users = await Users.findAll({
    });
    const respon = users.map(item => item.dataValues);
    return res.status(200).json(respon);
}
exports.getId = async (require, res) => {
    console.log(require.params.id);
    const user = await Users.findOne({ where: { id: require.params.id } });
    return res.status(200).json(user)
}
exports.getUuid = async (require, res) => {
    console.log(require.body.uuid);
    const users = await Users.findOne({
        where: { uuid: require.params.uuid },
    });
    return res.status(200).json(users);
}
exports.put = async (req, res) => {
    let user = await Users.update(req.body, { where: { id: req.params.id } });
    return res.status(200).json(true)
}
exports.getEmail = async (require, res) => {
    console.log(require.params.id);
    const user = await Users.findOne({ where: { email: require.params.email } });
    return res.status(200).json(user)
}


exports.create = async (req, res) => {
    const userFind = await Users.findOne({ where: { email: req.body.email } });
    if (userFind === null) {
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        const user = {
            fullname: req.body.fullname,
            email: req.body.email,
            password: hashedPassword,
            status: 1
        }
        let users = await Users.create(user);
        return res.status(200).json({
            success: true,
            data: users
        })
    } else {
        return res.status(202).json({
            success: false,
            message: "Người dùng đã tồn tại!"
        })
    }
}

exports.login = async (req, res) => {
    console.log("accessToken", req.body)
    Users.findOne({ where: { email: req.body.email } }).then(user => {
        bcrypt.compare(req.body.password, user.password).then(async (result) => {
            if (result) {
                const accessToken = jwt.sign(user.dataValues.id, process.env.ACCESS_TOKEN_SECRET);
                console.log("accessToken", accessToken)
                return res.status(200).json({
                    accessToken: accessToken,
                    success: true,
                    infor: user.dataValues
                });
            } else {
                console.log("Wrong password. Please try again!")
                return res.status(202).json({
                    success: false,
                    message: 'Mật khẩu không đúng',
                });
            }
        })
    }).catch(err => {
        return res.status(202).json({
            success: false,
            message: 'Người dùng không tồn tại',
        })
    })
}
exports.loginAdmin = async (req, res) => {
    Users.findOne({ where: { email: req.body.account } }).then(user => {
        bcrypt.compare(req.body.password, user.password).then(async (result) => {
            if (result) {
                const payload = { ...user.dataValues };
                console.log("user", user);
                const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
                return res.status(200).json({
                    accessToken: accessToken,
                    success: true,
                    isAdmin: true,
                    infor: user
                });
            } else {
                console.log("Wrong password. Please try again!")
                return res.status(202).json({
                    success: false,
                    message: 'Wrong password. Please try again!',
                });
            }
        })
    }).catch(err => {
        console.log("loi roi nha")
        return res.status(202).json({
            success: false,
            message: 'Người dùng không tồn tại',
        })
    })
}
