const User = require("../models/user.model.js");

// Retrieve all User from the database.
exports.findAll = (req, res) => {
    User.getAll((err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "error retrieving users."
        });
        else res.send(data);
    });
};

exports.create = (req, res) => {

    if (!req.body) {
      res.status(400).send({
        message: "error empty!"
      });
    }
    const user = new User({
        name            : req.body.name,
        rut             : req.body.rut,
        email           : req.body.email,
        number          : req.body.number,
        bank_id         : req.body.bank_id,
        bank_name       : req.body.bank_name,
        account_type_id : req.body.account_type_id,
        account_number  : req.body.account_number,
        created_at       : new Date(),
        updated_at      : new Date()
    });
  
    User.create(user, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "error creating the user."
        });
      else res.send(data);
    });
  };