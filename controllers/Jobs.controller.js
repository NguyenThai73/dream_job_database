const db = require('../models');
const Jobs = db.Jobs;
const CareersEmployers = db.CareersEmployers;
const Employers = db.Employers;
const Careers = db.Careers;
exports.post = async (require, respon) => {
    const job = await Jobs.create(require.body);
    return respon.status(200).json(job.dataValues.id)
};
exports.get = async (require, res) => {
    var jobs = await Jobs.findAll({});
    var respon = [];
    for (let i = 0; i < jobs.length; i++) {
        var employer = await Employers.findOne({ where: { id: jobs[i].employer_id } });
        var career = await Careers.findOne({ where: { id: jobs[i].career_id } });
        var item = {
            "id": jobs[i].id,
            "employerName": employer,
            "careerName": career,
            "name": jobs[i].name,
            "qty": jobs[i].qty,
            "salary": jobs[i].salary,
            "age": jobs[i].age,
            "englishLevel": jobs[i].englishLevel,
            "exp": jobs[i].exp,
            "expirationDate": jobs[i].expirationDate,
            "otherRequirements": jobs[i].otherRequirements,
            "provinceCode": jobs[i].provinceCode,
            "status": jobs[i].status
        };
        respon.push(item);
    }
    return res.status(200).json(respon);
}

exports.getId = async (require, res) => {
    console.log(require.params.id);
    const job = await Jobs.findOne({ where: { id: require.params.id } });

    var employer = await Employers.findOne({ where: { id: job.employer_id } });
    var career = await Careers.findOne({ where: { id: job.career_id } });
    var item = {
        "id": job.id,
        "employerName": employer,
        "careerName": career,
        "name": job.name,
        "addRess":job.addRess,
        "qty": job.qty,
        "salary": job.salary,
        "age": job.age,
        "englishLevel": job.englishLevel,
        "exp": job.exp,
        "expirationDate": job.expirationDate,
        "otherRequirements": job.otherRequirements,
        "provinceCode": job.provinceCode,
        "status": job.status
    };
    return res.status(200).json(item);
}

exports.getEmployerId = async (require, res) => {
    var jobs = await Jobs.findAll({ where: { employer_id: require.params.id } });
    var respon = [];
    for (let i = 0; i < jobs.length; i++) {
        var employer = await Employers.findOne({ where: { id: jobs[i].employer_id } });
        var career = await Careers.findOne({ where: { id: jobs[i].career_id } });
        var item = {
            "id": jobs[i].id,
            "employerName": employer,
            "careerName": career,
            "name": jobs[i].name,
            "addRess":jobs[i].addRess,
            "qty": jobs[i].qty,
            "salary": jobs[i].salary,
            "age": jobs[i].age,
            "englishLevel": jobs[i].englishLevel,
            "exp": jobs[i].exp,
            "expirationDate": jobs[i].expirationDate,
            "otherRequirements": jobs[i].otherRequirements,
            "provinceCode": jobs[i].provinceCode,
            "status": jobs[i].status
        };
        respon.push(item);
    }
    return res.status(200).json(respon);
}
exports.put = async (req, res) => {
    let job = await Jobs.update(req.body, { where: { id: req.params.id } });
    return res.status(200).json(true)
}
exports.delete = async (req, res) => {
    let roles = await Jobs.destroy({ where: { id: req.params.id } });
    return res.status(200).json({
        success: true,
        data: roles
    })
}
