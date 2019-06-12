const ApiWrapper = require("./ApiWrapper");
const API_NAME = "SortOptions";

async function sortOptions (parent, args, context, info) {
    const promiseResponse = await ApiWrapper.callApiMethod(API_NAME);
    return promiseResponse.sortOptions;
}

module.exports = {
    sortOptions
};
