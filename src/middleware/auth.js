const jwt = require("jsonwebtoken");
const { User } = require("../db/models");

const auth = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        const decoded = jwt.verify(token, "ghfjRgfg343fdhdfhs2234");
        const user = await User.findOne({ _id: decoded._id });
        if (!user) {
            throw new Error("no user");
        }
        req.token = token;
        req.user = user;
        next();
    } catch (e) {
        console.log(e);
        res.status(401).send({ error: "Please authenticate" });
    }
};

module.exports = auth;