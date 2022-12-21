const db = require('../models');
const Employers = db.Employers;
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.login = async (req, res) => {
    Employers.findOne({ where: { userName: req.body.userName } }).then(employer => {

        bcrypt.compare(req.body.password, employer.password).then(async (result) => {
            console.log(employer);
            if (result) {
                const accessToken = jwt.sign(employer.dataValues.id, process.env.ACCESS_TOKEN_SECRET);
                console.log("accessToken", accessToken)
                return res.status(200).json({
                    accessToken: accessToken,
                    success: true,
                    infor: employer.dataValues
                });
            } else {
                return res.status(202).json({
                    success: false,
                    message: 'Mật khẩu không đúng',
                });
            }
        })
    }).catch(err => {
        return res.status(202).json({
            success: false,
            message: 'Tài khoản không tồn tại',
        })
    })
}
exports.create = async (req, res) => {
    const userFind = await Employers.findOne({ where: { userName: req.body.userName } });
    if (userFind === null) {
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        // console.log(hashedPassword);
        const user = {
            name: req.body.name,
            email: req.body.email,
            userName: req.body.userName,
            avatar: req.body.avatar,
            logo: req.body.logo,
            addRess: req.body.addRess,
            sdt: req.body.sdt,
            career: req.body.career,
            scale: req.body.scale,
            introduce: req.body.introduce,
            password: hashedPassword,
            status: 1
        }
        let users = await Employers.create(user);
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




exports.post = async (require, respon) => {
    const career = await Employers.create(require.body);
    return respon.status(200).json(career.dataValues.id)
};
exports.get = async (require, res) => {
    const employers = await Employers.findAll({
    });
    const respon = employers.map(item => item.dataValues);
    return res.status(200).json(respon);
}


exports.getId = async (require, res) => {
    console.log(require.params.id);
    const employer = await Employers.findOne({ where: { id: require.params.id } });
    return res.status(200).json(employer);
}
exports.put = async (req, res) => {
    let employer = await Employers.update(req.body, { where: { id: req.params.id } });
    return res.status(200).json(true)
}


