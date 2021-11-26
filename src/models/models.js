const mongoose = require("mongoose");
const validator = require("validator");


// ****************************************
// USER
//
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            validate(value) {
                if (value.length > 32) {
                    throw new Error(
                        "Username must be less than 32 characters long"
                    );
                }
            },
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error("Invalid email entered");
                }
            },
        },
        password: {
            type: String,
            required: true,
        },
        tokens: [
            {
                token: {
                    type: String,
                    required: true,
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

userSchema.virtual("warnings", {
    ref: "Warning",
    localField: "_id",
    foreignField: "userID",
});


// ****************************************
// MOVIE
//
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    tmdb: {
        type: Number,
        required: true,
        unique: true,
    },
});
const Movie = mongoose.model("Movie", movieSchema);

movieSchema.virtual("warnings", {
    ref: "Warning",
    localField: "_id",
    foreignField: "movieID",
});


// ****************************************
// WARNING
//
const warningSchema = new mongoose.Schema(
    {
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        movieID: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Movie",
        },
        categoryID: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Category",
        },
        frequencyID: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Frequency",
        },
        typeID: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Type",
        },
        severityID: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Severity",
        },
        description: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);
const Warning = mongoose.model("Warning", warningSchema);


// ****************************************
// CATEGORY - added unique
//
const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
});
const Category = mongoose.model("Category", categorySchema);

categorySchema.virtual("warnings", {
    ref: "Warning",
    localField: "_id",
    foreignField: "categoryID",
});


// ****************************************
// FREQUENCY - added unique
//
const frequencySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
});
const Frequency = mongoose.model("Frequency", frequencySchema);

frequencySchema.virtual("warnings", {
    ref: "Warning",
    localField: "_id",
    foreignField: "frequencyID",
});


// ****************************************
// SEVERITY - added unique
//
const severitySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
});
const Severity = mongoose.model("Severity", severitySchema);

severitySchema.virtual("warnings", {
    ref: "Warning",
    localField: "_id",
    foreignField: "severityID",
});


// ****************************************
// TYPE - added unique
//
const typeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
});
const Type = mongoose.model("Type", typeSchema);

typeSchema.virtual("warnings", {
    ref: "Warning",
    localField: "_id",
    foreignField: "typeID",
});


module.exports = { User, Movie, Warning, Category, Frequency, Type, Severity };
