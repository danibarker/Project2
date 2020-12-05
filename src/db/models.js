const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() }, "passwordToken");

    user.tokens = user.tokens.concat({ token });
    await user.save();
    return token;
};
userSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    delete userObject.tokens;
    return userObject;
};
userSchema.statics.findByCredentials = async (username, password) => {
    const user = await User.findOne({ username: username });
    if (!user) {
        throw new Error("Username does not exist");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error("Username and Password do not match");
    }
    return user;
};
// Hash password
userSchema.pre("save", async function (next) {
    const user = this;
    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});
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
