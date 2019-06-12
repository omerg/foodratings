const ApiWrapper = require("./ApiWrapper");
const API_NAME = "Countries";

async function countries (parent, args, context, info) {

    if (args.id !== undefined) {
        const singleResult = await getSingleCountry(args.id);
        return [singleResult];
    }

    const promiseResponse = await ApiWrapper.callApiMethod(API_NAME, args);
    return promiseResponse.countries;
}

async function getSingleCountry (countryId) {
    return await ApiWrapper.callApiMethod(API_NAME, {id: countryId});
}

module.exports = {
    countries,
    getSingleCountry
};
