const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator")

let Schema = mongoose.Schema;


let listSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: [true, "title is required"]
    },

    completed: {
        type : String,
        required: [false, "to-do is done"]
    },

    active: {
        type: Boolean,
        default : true,
        required: [true, "to-do delete"]
    }
});

listSchema.plugin(uniqueValidator, {message: "{PATH} should be unique"});

module.exports = mongoose.model("List", listSchema);