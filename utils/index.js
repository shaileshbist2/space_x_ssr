const queryString = require('query-string');

export function prepareUrl(state) {
    let query = {};
    for (let i in state) {
        if (state[i]) {
            query[i] = state[i]
        } else {
            delete query[i];
        }
    }
    const stringified = queryString.stringify(query);
    return stringified;
}