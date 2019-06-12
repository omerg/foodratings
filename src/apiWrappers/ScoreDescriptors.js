const ApiWrapper = require("./ApiWrapper");
const API_NAME = "ScoreDescriptors";

async function scoreDescriptors (parent, args, context, info) {
    const promiseResponse = await ApiWrapper.callApiMethod(API_NAME);
    return promiseResponse.scoreDescriptors;
}

module.exports = {
    scoreDescriptors
};
