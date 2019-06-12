const Ratings = require( "../apiWrappers/Ratings");
const Regions = require( "../apiWrappers/Regions");
const Authorities = require( "../apiWrappers/Authorities");
const BusinessTypes = require( "../apiWrappers/BusinessTypes");
const Countries = require( "../apiWrappers/Countries");
const Establishments = require( "../apiWrappers/Establishments");
const SchemeTypes = require( "../apiWrappers/SchemeTypes");
const SortOptions = require( "../apiWrappers/SortOptions");
const ScoreDescriptors = require( "../apiWrappers/ScoreDescriptors");
const RatingOperators = require( "../apiWrappers/RatingOperators");


async function ratings (parent, args, context, info) {
    return Ratings.ratings(parent, args, context, info)
}

async function regions (parent, args, context, info) {
    return Regions.regions(parent, args, context, info)
}

async function authorities (parent, args, context, info) {
    return Authorities.authorities(parent, args, context, info)
}

async function businessTypes (parent, args, context, info) {
    return BusinessTypes.businessTypes(parent, args, context, info)
}

async function countries (parent, args, context, info) {
    return Countries.countries(parent, args, context, info)
}

async function establishments (parent, args, context, info) {
    return Establishments.establishments(parent, args, context, info)
}

async function schemeTypes (parent, args, context, info) {
    return SchemeTypes.schemeTypes(parent, args, context, info)
}

async function sortOptions (parent, args, context, info) {
    return SortOptions.sortOptions(parent, args, context, info)
}

async function scoreDescriptors (parent, args, context, info) {
    return ScoreDescriptors.scoreDescriptors(parent, args, context, info)
}

async function ratingOperators (parent, args, context, info) {
    return RatingOperators.ratingOperators(parent, args, context, info)
}

module.exports = {
    ratings,
    regions,
    authorities,
    businessTypes,
    countries,
    establishments,
    schemeTypes,
    sortOptions,
    scoreDescriptors,
    ratingOperators
};
