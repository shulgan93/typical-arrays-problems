exports.min = function min(array = []) {
    if (array.length === 0) {
        return 0;
    }

    return Math.min(...array);
};

exports.max = function max(array = []) {
    if (array.length === 0) {
        return 0;
    }

    return Math.max(...array);
};

exports.avg = function avg(array = []) {
    if (array.length === 0) {
        return 0;
    }

    let avg =
        array.reduce((acc, el) => {
            return acc + el;
        }, 0) / array.length;

    return avg;
};
