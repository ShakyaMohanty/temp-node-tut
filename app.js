const _ = require("lodash");
const items = [1, [3, [6, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
