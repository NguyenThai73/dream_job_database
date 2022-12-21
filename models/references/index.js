module.exports = (db) => {
    const {
        Users, Employers, Careers, Jobs, Recruitments, Messenger
    } = db;
    // Users  with Recruitments
    Users.hasOne(Recruitments, { foreignKey: 'user_id' });
    // Users  with Recruitments
    Jobs.hasOne(Recruitments, { foreignKey: 'job_id' });
    // Employers with CareersEmployers
    Employers.hasOne(Jobs, { foreignKey: 'employer_id' });
    Careers.hasOne(Jobs, { foreignKey: 'career_id' });
    // Jobs with CareersEmployers
    // Jobs.belongsTo(CareersEmployers, );
    Users.hasOne(Messenger, { foreignKey: 'user_id' });
    Jobs.hasOne(Messenger, { foreignKey: 'job_id' });

}