const ApiWrapper = require("./ApiWrapper");
const API_NAME = "BusinessTypes";
const DataLoader = require('dataloader');

async function businessTypes (parent, args, context, info) {

    if (args.id !== undefined) {
        const singleResult = await getSingleBusinessType(args.id);
        return [singleResult];
    }

    const promiseResponse = await ApiWrapper.callApiMethod(API_NAME, args);
    return promiseResponse.businessTypes;
}

const businessTypesLoader = new DataLoader(async (businessTypeIds) => {
    return ApiWrapper.callApiMethodPromise(API_NAME).then((data) => {

        //remove "All" element
        data.businessTypes.splice(0, 1);

        //return matching keys only
        return businessTypeIds.map((businessTypeId) => {
            return data.businessTypes.find((businessType) => businessTypeId === businessType.BusinessTypeId);
        });
    });
});

async function getSingleBusinessType (businessTypeId) {
    return await ApiWrapper.callApiMethod(API_NAME, {id: businessTypeId});
}

module.exports = {
    businessTypes,
    businessTypesLoader,
    getSingleBusinessType
};
