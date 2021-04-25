module.exports = app => {
    const accounts = require("../controllers/account.controller.js");
  
    app.get("/accounts", accounts.findAll);
  
};