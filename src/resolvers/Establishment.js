const BusinessTypes =  require( "../apiWrappers/BusinessTypes");
const Ratings = require( "../apiWrappers/Ratings");
const Authorities = require( "../apiWrappers/Authorities");
const SchemeTypes = require( "../apiWrappers/SchemeTypes");

async function BusinessType(parent, args, { loaders }, info) {
    return await BusinessTypes.businessTypesLoader.load(parent.BusinessTypeID)
}

async function Rating(parent, args, context) {
    return await Ratings.ratingsLoader.load(parent.RatingKey);
}

async function LocalAuthority(parent, args, context) {
    return await Authorities.authoritiesLoader.load(parent.LocalAuthorityCode);
}

async function scores(parent, args, context) {
    return {
        Hygiene: parent.scores.Hygiene,
        Structural: parent.scores.Structural,
        ConfidenceInManagement: parent.scores.ConfidenceInManagement
    };
}

async function SchemeType(parent, args, context) {
    return await SchemeTypes.schemeTypeLoader.load(parent.SchemeType);
}

async function geocode(parent, args, context) {
    return {
        longitude: parent.geocode.longitude,
        latitude: parent.geocode.latitude
    };
}

module.exports = {
    BusinessType,
    Rating,
    LocalAuthority,
    scores,
    SchemeType,
    geocode
};
