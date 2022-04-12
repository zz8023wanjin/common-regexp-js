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

export { positiveInteger, negativeInteger };
