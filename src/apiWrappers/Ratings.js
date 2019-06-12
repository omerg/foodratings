const ApiWrapper = require("./ApiWrapper");
const API_NAME = "Ratings";
const DataLoader = require('dataloader');

async function ratings (parent, args, context, info) {
    const promiseResponse = await ApiWrapper.callApiMethod(API_NAME);
    return promiseResponse.ratings;
}

const ratingsLoader = new DataLoader(async (ratingKeys) => {
    return ApiWrapper.callApiMethodPromise(API_NAME).then((data) => {

        //return matching keys only
        return ratingKeys.map((outerRatingKey) => {
            return data.ratings.find((rating) => outerRatingKey === rating.ratingKey);
        });
    });
});

async function getSingleRating (ratingKey) {
    const promiseResponse = await ApiWrapper.callApiMethod(API_NAME);
    const ratings = promiseResponse.ratings;
    for (const rating of ratings) {
        if (rating.ratingKey === ratingKey) {
            return rating;
        }
    }
}

module.exports = {
    ratings,
    getSingleRating,
    ratingsLoader
};
