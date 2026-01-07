const getUsers = (req, res) => {
    res.json({
      success: true,
      users: ["Aman", "Ravi", "Neha"]
    });
  };
  
  const createUser = (req, res) => {
    const user = req.body;
  
    res.json({
      success: true,
      message: "User created",
      user
    });
  };
  
  module.exports = {
    getUsers,
    createUser
  };
  