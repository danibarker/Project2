const { Category } = require("../db/models");
const debug = require("debug")("mwdb:server");

// Display list of ALL categories.
exports.category_list = async function (req, res) {
    // an array of entries is returned
    const categoryEntries = await Category.find();
    if (categoryEntries != null) {
        debug(`Success: categories found: ${categoryEntries}`); // success
        res.status(200).json(categoryEntries);
    } else {
        debug(`Error: cannot find categories: ${categoryEntries}`); // failure
        res.sendStatus(400);
    }
};

// Display detail page for ONE category.
exports.category_detail = async function (req, res) {
    const cat = req.params.category;
    debug(`Find single category: ${cat}`);
    // an object is returned
    const response = await Category.findOne({ category: cat });
    if (response != null) {
        debug(`Found category: ${cat}`);
        debug(`Find category result: ${response}`);
        res.status(200).json(response);
    } else {
        debug(`Error: cannot find category: ${cat}`);
        res.sendStatus(400);
    }
};

// Handle category create on POST.
exports.category_create_post = async (req, res) => {
    const newCategory = req.body.title;
    
    debug(`newCategory : ${newCategory}`);
    const newRecord = {
        title: newCategory
    };
    debug(`newRecord: ${JSON.stringify(newRecord)}`);
    try {
        // add new record to database
        const response = await Category.create(newRecord);
        
        console.log(response)
        debug(`Success: category created: ${newCategory}`); // success
        debug(`Create category result: ${response}`);
        res.status(200).json(response);
    } catch (error) {
        console.log(error)
        debug(`Error: unable to create category: ${newCategory}`); // failure
        debug(`Error: category error: ${error}`);
        res.status(500).json(error);
    }
};

// Handle category delete on POST.
exports.category_delete_post = async function (req, res) {
    const cat = req.body.title;
    debug(`Deleting Category: ${cat}`);

    // delete a single entry
    const response = await Category.deleteOne({ title: cat });
    const result = JSON.stringify(response);

    if (response.deletedCount != 0) {
        debug(`Success: category deleted: ${cat}`); // success
        debug(`Delete category response: ${result}`);
        res.status(200).json(response);
    } else {
        debug(`Error: unable to delete category: ${result}`); // failure
        res.status(500).json(response);
    }
};

// Handle category update on POST.
exports.category_update_post = async function (req, res) {
    const oldcat = req.body.oldCategory;
    const newcat = req.body.newCategory;
    debug(`old and new: ${oldcat}, ${newcat}`);
    const response = await Category.updateOne(
        {
            title: oldcat,
        },
        {
            $set: {
                title: newcat,
            },
        }
    );

    const result = JSON.stringify(response);

    if (response.nModified != 0) {
        debug(`Success: category updated: ${oldcat} to ${newcat}`);
        debug(`Update category response: ${result}`);
        res.status(200).json(response);
    } else {
        debug(`Error: unable to update category ${result}`);
        res.status(500).json(response);
    }
};
