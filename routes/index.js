const { request } = require('express');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const User = require("../controllers/User.controller");
const Employers = require("../controllers/Employers.controller");
const Careers = require("../controllers/Careers.controller");
const Jobs = require("../controllers/Jobs.controller");
const Recruitments = require("../controllers/Recruitments.controller");
const Messenger = require("../controllers/Messenger.controller");

const verifyToken = (req, res, next) => {
    const authHeader = req.header('Authorization');
    const token = authHeader;
    console.log("token", token);

    if (!token) return res.sendStatus(401);
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.decode = decoded;
        next();
    } catch (error) {
        console.log("sai roi")
        console.log(error);
        return res.sendStatus(403);
    }
};
// const verifyAdmin = (req, res, next) => {
//     if (req.decode.role_id === 2) {
//         next();
//     } else {
//         return res.status(403).json({
//             success: false,
//             message: 'User is not admin',
//         });
//     }
// }

router.post("/user/signup", User.create);
router.post("/user/login", User.login);
router.get("/user/:id", User.getId);
router.put("/user/put/:id", verifyToken, User.put);



router.get("/user/get", verifyToken, User.get);
router.get("/user/get/:id&:uuid", User.get);
router.get("/user/:email", User.getEmail);
router.get("/userUuid/:uuid", User.getUuid);


router.post("/employer/login", Employers.login);
router.post("/employer/sign", Employers.create);
router.post("/employer/post", Employers.post);
router.get("/employer/get", verifyToken, Employers.get);
router.get("/employer/:id", verifyToken, Employers.getId);
router.put("/employer/put/:id", Employers.put);

router.post("/career/post", Careers.post);
router.get("/career/get", verifyToken, Careers.get);
router.get("/career/:id", verifyToken, Careers.getId);

router.post("/job/post",verifyToken, Jobs.post);
router.get("/job/get", verifyToken, Jobs.get);
router.get("/job/:id", verifyToken, Jobs.getId);
router.get("/job/employerId/:id", verifyToken, Jobs.getEmployerId);
router.put("/job/put/:id", verifyToken, Jobs.put);
router.delete("/job/delete/:id", verifyToken, Jobs.delete);

router.post("/recruitment/post", verifyToken, Recruitments.post);
router.get("/recruitment/get", verifyToken, Recruitments.get);
router.get("/recruitment/:id", verifyToken, Recruitments.getId);
router.get("/recruitment/job/:id", verifyToken, Recruitments.getJobId);
router.put("/recruitment/put/:id", verifyToken, Recruitments.put);
router.delete("/recruitment/delete/:id"), verifyToken, Recruitments.delete;


router.get("/recruitment/put/:id", verifyToken, Recruitments.put);

router.post("/messenger/post", verifyToken, Messenger.post);
router.get("/messenger/get/:id", verifyToken, Messenger.get);
router.get("/messenger/:id", verifyToken, Messenger.getId);


module.exports = router;