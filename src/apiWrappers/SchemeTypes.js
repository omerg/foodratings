const ApiWrapper = require("./ApiWrapper");
const API_NAME = "SchemeTypes";
const DataLoader = require('dataloader');

async function schemeTypes (parent, args, context, info) {

    const promiseResponse = await ApiWrapper.callApiMethod(API_NAME, args);
    return promiseResponse.schemeTypes;
}

async function getSingleSchemeType (schemeTypeId) {
    const promiseResponse = await ApiWrapper.callApiMethod(API_NAME);
    const schemeTypes = promiseResponse.schemeTypes;
    for (const schemeType of schemeTypes) {
        if (schemeType.schemeTypeid === schemeTypeId) {
            return schemeType;
        }
    }
}

const schemeTypeLoader = new DataLoader(async (schemeTypeKeys) => {
    return ApiWrapper.callApiMethodPromise(API_NAME).then((data) => {

        //return matching keys only
        return schemeTypeKeys.map((key) => {
            return data.schemeTypes.find((schemeType) => key === schemeType.schemeTypeKey)
        });
    });
});

async function getSingleSchemeTypeByKey (schemeTypeKey) {
    const promiseResponse = await ApiWrapper.callApiMethod(API_NAME);
    const schemeTypes = promiseResponse.schemeTypes;
    for (const schemeType of schemeTypes) {
        if (schemeType.schemeTypeKey === schemeTypeKey) {
            return schemeType;
        }
    }
}

module.exports = {
    schemeTypes,
    getSingleSchemeType,
    getSingleSchemeTypeByKey,
    schemeTypeLoader
};
