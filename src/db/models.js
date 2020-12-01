const mongoose = require("mongoose");
const validator = require("validator");

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
        comment: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);
const Warning = mongoose.model("Warning", warningSchema);

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
});
const Category = mongoose.model("Category", categorySchema);
const frequencySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    }
});
const Frequency = mongoose.model("Frequency", frequencySchema);
const severitySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    }
});
const Severity = mongoose.model("Severity", severitySchema);
const typeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true,
    }
});
const Type = mongoose.model("Type", typeSchema);
categorySchema.virtual("warnings", {
    ref: "Warning",
    localField: "_id",
    foreignField: "categoryID",
});
frequencySchema.virtual("warnings", {
    ref: "Warning",
    localField: "_id",
    foreignField: "frequencyID",
});
typeSchema.virtual("warnings", {
    ref: "Warning",
    localField: "_id",
    foreignField: "typeID",
});
severitySchema.virtual("warnings", {
    ref: "Warning",
    localField: "_id",
    foreignField: "severityID",
});

userSchema.virtual("warnings", {
    ref: "Warning",
    localField: "_id",
    foreignField: "userID",
});
module.exports = { User, Movie, Warning, Category, Frequency, Type, Severity };
