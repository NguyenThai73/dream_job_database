const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const mainRoutes = require("./routes");

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ credentials: true }));

const db = require("./models");
// Routers
app.use('/api/', mainRoutes);

db.sequelize.sync().then(() => {
    app.listen(8084, () => {
        console.log("Server running on port 8084");
    });
}).catch((err) => {console.log(err)}); 