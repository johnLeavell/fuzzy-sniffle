const { validate: uuidValidate } = require("uuid");
const db = require("../models");

const { ValidationError } = require("sequelize");

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!uuidValidate(id)) {
      return res.status(400).send("Provided ID is not valid UUID");
    }

    const user = await db.User.findByPk(id);

    if (user) {
      return res.status(200).json({ user });
    }
    return res
      .status(400)
      .send("User with the specified ID does not exist!");
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const create = async (req, res) => {
  try {
    const user = await db.User.create(req.body);
    return res.status(201).json(user);
  } catch (err) {
    if (err instanceof ValidationError) {
      console.info("400 error @ POST /user", err);
      return res.status(400).send(err.message);
    }
    console.error("500 error @ POST /user", err);
    return res.status(500), send("Something went wrong");
  }
};

const findAll = async (req, res) => {
  try {
    const userList = await db.User.findAll();
    return res.status(200).json(userList);
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
    if (!uuidValidate(id)) {
      return res.status(400).send("Provided ID is not valid UUID");
    }
    const { name } = req.body;

    await db.User.update(
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

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await db.User.destroy({
      where: {
        id: id,
      },
    });
    return res.status(200).send("User deleted");
  } catch (err) {
    if (err) {
      console.log("Delete error", err);
      return res.status(400).json({ error: err.message });
    }
    return res.status(500).json({ error: err.message });
  }
};
module.exports = { getUserById, create, findAll, update, deleteUser };
