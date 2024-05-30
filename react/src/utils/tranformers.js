import _ from "lodash";

export const countOccurrences = (data, key) => {
    const counts = _.countBy(data, key);
    return _.map(counts, (count, name) => ({ name, count }));
};

export const orderValues = (data) => _.orderBy(data, ["count"], ["desc"]);

export const filterTopValues = (data, limit) => {
    return _.slice(orderValues(data), 0, limit);
};

export const transformCounts = (data, key, topValues = false, limit = 10) => {
    const filteredArray = _.filter(data, (item) => item[key]);
    const countedItems = countOccurrences(filteredArray, key);
    const transformedArray = topValues
        ? filterTopValues(countedItems, limit)
        : orderValues(countedItems);
    return transformedArray;
};
