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
userSchema.virtual("warnings", {
    ref: "Warning",
    localField: "_id",
    foreignField: "userID",
});
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
            ref: "Movie"
        },
        categoryID: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Category"
        }
    },
    {
        timestamps: true,
    }
);
const Warning = mongoose.model("Warning", warningSchema);

const categorySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        }
    }
)
const Category = mongoose.model("Category", categorySchema)
categorySchema.virtual("warnings", {
    ref: "Warning",
    localField: "_id",
    foreignField: "categoryID",
});
module.exports = { User, Movie, Warning, Category};
