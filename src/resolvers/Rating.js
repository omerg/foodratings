const SchemeTypes = require("../apiWrappers/SchemeTypes");

async function schemeType (parent, args, context) {
    return await SchemeTypes.getSingleSchemeType(parent.schemeTypeId);
}

module.exports = {
    schemeType,
};
