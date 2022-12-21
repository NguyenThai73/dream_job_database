const db = require('../models');
const Careers = db.Careers;
exports.post = async (require, respon) => {
    const career = await Careers.create(require.body);
    return respon.status(200).json(career.dataValues.id)
};
exports.get = async (require, res) => {
    const careers = await Careers.findAll({
    });
    const respon = careers.map(item => item.dataValues);
    return res.status(200).json(respon);
}

exports.getId = async (require, res) => {
    console.log(require.params.id);
    const career = await Careers.findOne({ where: { id: require.params.id} });
    return res.status(200).json(career);
}