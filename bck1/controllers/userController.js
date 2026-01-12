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

const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, role } = req.body;

    const userIndex = users.findIndex((user) => user.id === Number(id));

    if (userIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    // Update user
    if (name) users[userIndex].name = name;
    if (role) users[userIndex].role = role;

    res.status(200).json({
        success: true,
        message: "User updated successfully",
        user: users[userIndex]
    });
}

const deleteUser = (req, res) => {
    const { id } = req.params;

    const userIndex = users.findIndex((user) => user.id === Number(id));

    if (userIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    // Remove user from array
    users.splice(userIndex, 1);

    res.status(200).json({
        success: true,
        message: "User deleted successfully"
    });
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}