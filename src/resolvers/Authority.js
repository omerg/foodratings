const SchemeTypes = require("../apiWrappers/SchemeTypes");

async function SchemeType (parent, args, context) {
    return await SchemeTypes.getSingleSchemeType(parent.SchemeType);
}

module.exports = {
    SchemeType,
};
