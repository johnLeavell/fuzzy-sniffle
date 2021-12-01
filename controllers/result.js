const { ValidationError } = require("sequelize");
const db = require("../models");

const create = async (req, res) => {
  try {
    const result = await db.Result.create(req.body);
    return res.status(201).json(result);
  } catch (err) {
    if (err instanceof ValidationError) {
      console.log("400 validation error", err);
      return res.status(400).json({ err: err.message });
    }
    console.error("500 error @ POST /result", err);
    return res.status(500).json({ err: err.message });
  }
};

module.exports = { create };
