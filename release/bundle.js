/**
 * @param
 * @returns RegExp
 */
function positiveInteger() {
    return /^[0-9]*[1-9][0-9]*$/;
}

/**
 * @param
 * @returns RegExp
 */
function negativeInteger() {
    return /^-[0-9]*[1-9][0-9]*$/;
}

var number = /*#__PURE__*/Object.freeze({
    __proto__: null,
    positiveInteger: positiveInteger,
    negativeInteger: negativeInteger
});

function init(classProto) {
    for (const key in number) {
        classProto[key] = number[key];
    }
}

function CommonRegexpJs() {}

init(CommonRegexpJs.prototype);

const _regexpStr = new CommonRegexpJs();

export { _regexpStr };
