const ApiWrapper = require("./ApiWrapper");
const API_NAME = "RatingOperators";

async function ratingOperators (parent, args, context, info) {
    const promiseResponse = await ApiWrapper.callApiMethod(API_NAME);
    return promiseResponse.ratingOperator;
}

module.exports = {
    ratingOperators
};
