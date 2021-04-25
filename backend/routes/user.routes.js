module.exports = app => {
    const user = require("../controllers/user.controller.js");
  
    app.get("/users", user.findAll);
    app.post("/user", user.create);
  
};