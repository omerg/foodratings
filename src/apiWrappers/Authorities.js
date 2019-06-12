const ApiWrapper = require("./ApiWrapper");
const API_NAME = "Authorities";
const DataLoader = require('dataloader');

async function authorities (parent, args, context, info) {

    if (args.id !== undefined) {
        const singleResult = await getSingleAuthority(args.id);
        return [singleResult];
    }

    const promiseResponse = await ApiWrapper.callApiMethod(API_NAME, args);
    return promiseResponse.authorities;
}

async function getSingleAuthority (authorityId) {
    return await ApiWrapper.callApiMethod(API_NAME, {id: authorityId});
}

const authoritiesLoader = new DataLoader(async (authorityKeys) => {
    return ApiWrapper.callApiMethodPromise(API_NAME).then((data) => {

        //return matching keys only
        return authorityKeys.map((outerAuthorityKey) => data.authorities.find((authority) => {
            return outerAuthorityKey === authority.LocalAuthorityIdCode
        }));
    });
});

async function getSingleAuthorityByCode (authorityCode) {
    const promiseResponse = await ApiWrapper.callApiMethod(API_NAME);
    const authorities = promiseResponse.authorities;
    for (const authority of authorities) {
        if (authority.LocalAuthorityIdCode === authorityCode) {
            return authority;
        }
    }
}

module.exports = {
    authorities,
    getSingleAuthority,
    authoritiesLoader,
    getSingleAuthorityByCode,
};
