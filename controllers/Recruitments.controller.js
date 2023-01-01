const db = require('../models');
const Recruitments = db.Recruitments;
const Jobs = db.Jobs;
const Users = db.Users;
exports.post = async (require, respon) => {
    const item = await Recruitments.create(require.body);
    return respon.status(200).json(item.dataValues.id)
};
exports.get = async (require, res) => {
    const recruitments = await Recruitments.findAll({});
    var respon = [];
    for (let i = 0; i < recruitments.length; i++) {
        var jobs = await Jobs.findOne({ where: { id: recruitments[i]['job_id'] } });
        var item = {
            "id": recruitments[i].id,
            "user_id": recruitments[i].user_id,
            "jobs": jobs,
            "status": recruitments[i].status,
            "apply": recruitments[i].apply,
            "qty": recruitments[i].qty,
            "applyNote": recruitments[i].applyNote,
            "applyDate": recruitments[i].applyDate,
            "qty": recruitments[i].qty,
            "des": recruitments[i].des
        };
        respon.push(item);
    }
    return res.status(200).json(respon);
}

exports.getId = async (require, res) => {
    const recruitments = await Recruitments.findAll({ where: { user_id: require.params.id } });
    var respon = [];
    var respon = [];
    for (let i = 0; i < recruitments.length; i++) {
        var jobs = await Jobs.findOne({ where: { id: recruitments[i]['job_id'] } });
        var item = {
            "id": recruitments[i].id,
            "user_id": recruitments[i].user_id,
            "jobs": jobs,
            "status": recruitments[i].status,
            "apply": recruitments[i].apply,
            "qty": recruitments[i].qty,
            "applyNote": recruitments[i].applyNote,
            "applyDate": recruitments[i].applyDate,
            "qty": recruitments[i].qty,
            "des": recruitments[i].des
        };
        respon.push(item);
    }
    return res.status(200).json(respon);
}
exports.getJobId = async (require, res) => {
    const recruitments = await Recruitments.findAll({ where: { job_id: require.params.id } });
    var respon = [];
    for (let i = 0; i < recruitments.length; i++) {
        const user = await Users.findOne({ where: { id: recruitments[i].user_id } });
        var item = {
            "id": recruitments[i].id,
            "user":user,
            "status": recruitments[i].status,
            "apply": recruitments[i].apply,
            "applyNote": recruitments[i].applyNote,
            "applyDate": recruitments[i].applyDate,
            "des": recruitments[i].des,

        };
        respon.push(item);
    }
    return res.status(200).json(respon);
}

exports.put = async (req, res) => {
    let recruitment = await Recruitments.update(req.body, { where: { id: req.params.id } });
    return res.status(200).json(true)
}
exports.delete = async (req, res) => {
    let roles = await Recruitments.destroy({ where: { id: req.params.id } });
    return res.status(200).json({
        success: true,
        data: roles
    })
}