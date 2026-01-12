const User = require("../models/User");

const getUsers = async (req, res) => {
  const users = await User.find();

  res.json({
    success: true,
    users,
  });
};

const createUsers = async (req, res) => {
  const user = await User.create(req.body);

  res.json({
    success: true,
    user,
  });
};

const updateUser = async (req, res) => {
  const { id } = req.params; // url se id nikal rahe hai..

  const user = await User.findById(id);

  //Agar user nhi mila toh
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  //user update
  user.name = req.body.name || user.name;
  user.role = req.body.role || user.role;

  const updatedUser = await user.save();

  res.status(200).json({
    success: true,
    user: updatedUser,
  });
};

const deleteUser = async (req,res) => {
    const {id} = req.params;
    const user = await User.findById(id);

    if(!user){
        return res.status(404).json({
            success : false,
            message : "User not found"
        })
    }

    await user.deleteOne();

    res.status(200).json({
        success: true,
        message: "User deleted"
    })
}



module.exports = {
  getUsers,
  createUsers,
  updateUser,
  deleteUser,
};
