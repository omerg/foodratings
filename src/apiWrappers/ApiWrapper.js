const fetch = require("node-fetch");
const CONSTANTS = require("../constants");
const headers = { 'x-api-version': `${CONSTANTS.API_VERSION}` };

async function callApiMethod (apiName, params) {

    //add id to url if exists in params
    let urlString = CONSTANTS.BASE_URL + apiName;
    if (params !== undefined && params.id !== undefined) {
        urlString += "/" + params.id;
    }

    const url = new URL(urlString);
    url.search = new URLSearchParams(params);
    const fetchResponse = await fetch(url, {method: 'get', headers: headers});
    return await fetchResponse.json();
}

async function callApiMethodPromise (apiName, params) {

    //add id to url if exists in params
    let urlString = CONSTANTS.BASE_URL + apiName;
    if (params !== undefined && params.id !== undefined) {
        urlString += "/" + params.id;
    }

    const url = new URL(urlString);
    url.searchParams = new URLSearchParams(params);
    const fetchResponse = await fetch(url, {method: 'get', headers: headers});
    return fetchResponse.json();
}

module.exports = {
    callApiMethod,
    callApiMethodPromise
};
