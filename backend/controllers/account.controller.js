const Account = require("../models/account.model.js");

exports.findAll = (req, res) => {
    Account.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "error retrieving account."
        });
      else res.send(data);
    });
  };