const mongoose = require('mongoose');

const user_schema = mongoose.Schema({
    user_name: { type: String, require: true },
    password: { type: String, require: true },
    birth_date: { type: Date, require: true },
    email: { type: String, require: true, unique: true },
    address: {
        type: Object,
        require: true,
        city: {
            type: String,
            require: true
        },
        code_zip: {
            type: String,
            require: true
        }
    },
});

module.exports = mongoose.model("User", user_schema);