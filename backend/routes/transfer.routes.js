module.exports = app => {
    const transfer = require("../controllers/transfer.controller.js");
  
    app.get("/transfers", transfer.findAll);
    app.post("/transfer", transfer.create);
  
};