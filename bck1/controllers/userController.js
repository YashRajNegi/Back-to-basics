let users = require("../data/users");

//Get all users
const getUsers = (req, res) => {
    res.json({message: "Users fetched successfully", users: users, success: true});
};

//Get a user by id

const getUserById = (req, res, next) => {
    const user = users.find((user)=> user.id  === Number(req.params.id));
    if(!user){
        const error = new Error("User not found");
        error.status = 404;
        return next(error);
    }
    res.json({message: "User fetched successfully", user: user, success: true});

}

const createUser = (req,res) => {
    const {name , role} = req.body;

    const newUser = {
        id : users.length+1,
        name,
        role
    };
    users.push(newUser);

    res.status(201).json({message: "User created successfully", user: newUser, success: true});


}

module.exports = {
    getUsers,
    getUserById,
    createUser
}