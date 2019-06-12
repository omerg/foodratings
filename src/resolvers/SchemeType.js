async function id (parent, args, context) {
    return parent.schemeTypeid;
}

module.exports = {
    id,
};
