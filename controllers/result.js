const { ValidationError } = require("sequelize");
const { validate: uuidValidate } = require("uuid");
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

const getResultById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!uuidValidate(id)) {
      return res.status(400).send("Provided ID is not a valid UUID");
    }
    const result = await db.Result.findByPk(id);
    if (result) {
      return res.status(200).json({ result });
    }
    return res
      .status(404)
      .send("Result with the specificed ID does not exist!");
  } catch (err) {
    console.error("500 - something is not right", err);
    return res.status(500).send(err.message);
  }
};

const updateResult = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.Result.findOne({
      where: { id: id },
    });
    await result.update({ ...req.body }, { where: { id } });
    return res.status(200).json({ message: "updated successfully" });
  } catch (err) {
    if (err) {
      console.log("Update error", err);
      return res.status(400).json({ err: err.message });
    }
    return res.status(500).json({ err: err.message });
  }
};

const deleteResult = async (req, res) => {
  const { id } = req.params;
  try {
    await db.Result.destroy({ where: { id: id } });
    return res.status(200).json({message: "Result has been deleted"});
  } catch (err) {
    if (err) {
      console.log("Delete error", err);
      return res.status(400).json({ err: err.message });
    }
    return res.status(500).json({ err: err.message });
  }
};

module.exports = {
  createResult,
  findAllResults,
  deleteResult,
  updateResult,
  getResultById,
};
