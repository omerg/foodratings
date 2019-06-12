const ApiWrapper = require("./ApiWrapper");
const API_NAME = "Regions";

async function regions (parent, args, context, info) {

    if (args.id !== undefined) {
        const singleResult = getSingleRegion(args.id);
        return [singleResult];
    }

    const promiseResponse = await ApiWrapper.callApiMethod(API_NAME, args);
    return promiseResponse.regions;
}

async function getSingleRegion (regionId) {
    return await ApiWrapper.callApiMethod(API_NAME, {id: regionId});
}

module.exports = {
    regions,
    getSingleRegion
};
