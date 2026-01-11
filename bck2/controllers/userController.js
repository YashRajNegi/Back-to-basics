const User = require("../models/User");

const getUsers = async(req,res) => {
    const users = await User.find();

    res.json({
        success: true,
        users
    });

};

const createUsers = async(req,res) => {
    const user = await User.create(req.body);

    res.json({
        success: true,
        user
    });

};


module.exports={
    getUsers,
    createUsers
};

