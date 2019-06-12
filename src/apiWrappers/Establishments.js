const ApiWrapper = require("./ApiWrapper");
const API_NAME = "Establishments";

async function establishments (parent, args, context, info) {

    if (args.id !== undefined) {
        const singleResult = await getSingleEstablishment(args.id);
        return [singleResult];
    }

    //this is a weird api
    if (args.ratingName !== undefined) {
        args.ratingKey = args.ratingName;
    }

    const promiseResponse = await ApiWrapper.callApiMethod(API_NAME, args);
    return promiseResponse.establishments;
}

async function getSingleEstablishment (establishmentId) {
    return await ApiWrapper.callApiMethod(API_NAME, {id: establishmentId});
}

module.exports = {
    establishments,
    getSingleEstablishment
};
