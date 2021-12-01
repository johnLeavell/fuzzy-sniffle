const { ValidationError } = require("sequelize");
const db = require("../models");

const createResult = async (req, res) => {
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

const findAllResults = async (req, res) => {
  try {
    const resultList = await db.Result.findAll();
    return res.status(200).json(resultList);
  } catch (err) {
    if (err) {
      log.error("400 validation error", err);
      return res.status(400).json({ err: err.message });
    }
    return res.status(500).json({ err: err.message });
  }
};

const updateResult = async (req, res) => {
  try {
    const { id } = req.params;
    await db.Result.update({ id: id }, { where: { id: id } });
    return res.status(200).json.send("Result has been updated.");
  } catch (err) {
    if (err) {
      console.log("Update error", err);
      return res.status(400).json({ err: err.message });
    }
    return res.status(500).json({ err: err.message });
  }
};

const deleteResult = async (req, res) => {
  try {
    const { id } = req.params;
    await db.Result.destroy({ where: { id: id } });
    return res.status(200).json.send("Result has been deleted");
  } catch (err) {
    if (err) {
      console.log("Delete error", err);
      return res.status(400).json({ err: err.message });
    }
    return res.status(500).json({ err: err.message });
  }
};

module.exports = { createResult, findAllResults, deleteResult, updateResult };
