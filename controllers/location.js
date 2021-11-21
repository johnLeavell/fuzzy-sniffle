const { validate: uuidValidate } = require("uuid");
const db = require("../models");

const { ValidationError } = require("sequelize");

const getLocationById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!uuidValidate(id)) {
      return res.status(400).send("Provided ID is not valid UUID");
    }

    const location = await db.Location.findByPk(id);

    if (location) {
      return res.status(200).json({ location });
    }
    return res
      .status(400)
      .send("Location with the specified ID does not exist!");
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const create = async (req, res) => {
  try {
    const location = await db.Location.create(req.body);
    return res.status(201).json({ location });
  } catch (err) {
    if (err instanceof ValidationError) {
      console.info("400 error @ POST /location", err);
      return res.status(400).send(err.message);
    }
    console.error("500 error @ POST /location", err);
    return res.status(500), send("Something went wrong");
  }
};

const findAll = async (req, res) => {
  try {
    const locationList = await db.Location.findAll();
    return res.status(200).json(locationList);
  } catch (err) {
    if (err) {
      console.log("400 validation error", err);
      return res.status(400).json({ error: err.message });
    }
    return res.status(500).json({ error: err.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    await db.Location.update(
      { name: `${name}` },
      {
        where: {
          id: id,
        },
      }
    );
    return res.status(200).json(name);
  } catch (err) {
    if (err) {
      console.log("Update error", err);
      return res.status(400).json({ error: err.message });
    }
    return res.status(500).json({ error: err.message });
  }
};

const deleteLocation = async (req, res) => {
  try {
    const { id } = req.params;
    await db.Location.destroy({
      where: {
        id: id,
      },
    });
    return res.status(200).send("Location deleted");
  } catch (err) {
    if (err) {
      console.log("Delete error", err);
      return res.status(400).json({ error: err.message });
    }
    return res.status(500).json({ error: err.message });
  }
};
module.exports = { getLocationById, create, findAll, update, deleteLocation };
