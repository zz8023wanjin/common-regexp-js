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

/**
 * @param
 * @returns RegExp
 */
function positiveFloat() {
    return /^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/;
}

/**
 * @param
 * @returns RegExp
 */
function negativeFloat() {
    return /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;
}

/**
 * @param
 * @returns RegExp
 */
function postCode() {
    return /[1-9]\d{5}(?!\d)/;
}

/**
 * @param
 * @returns RegExp
 */
function idCard() {
    return /\d{15}|\d{18}/;
}

/**
 * @param
 * @returns RegExp
 */
function phone() {
    return /(\d{3}-|\d{4}-)?(\d{8}|\d{7})?/;
}

/**
 * @param
 * @returns RegExp
 */
function ip() {
    return /((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)/;
}

export { positiveInteger, negativeInteger, positiveFloat, negativeFloat };
