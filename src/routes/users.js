const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.post("/user", (req, res) => {
    const user = new User(req.body);
    user.save()
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});

router.get("/", (req, res) => {
    User.find()
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});

router.get("/:user_id", (req, res) => {
    const user_id = req.params.user_id;
    User.findById(user_id)
                .then((data) => res.json(data))
                .catch((err) => res.json({message: err}));
});

router.put("/:user_id", (req, res) => {
    const user_id = req.params.user_id;
    const { user_name, age, email, address } = req.body;
    
    var dict = {};
    if (user_name !== undefined) dict.user_name = user_name;
    if (age !== undefined) dict.age = age;
    if (email !== undefined) dict.email = email;
    if (address !== undefined) dict.address = address;

    User.updateOne({ _id : user_id }, dict)
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
});

router.delete("/:user_id", (req, res) => {
    const user_id = req.params.user_id;
    User.findOneAndRemove(user_id)
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err}));
});

module.exports = router;