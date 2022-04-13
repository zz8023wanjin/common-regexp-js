/**
 * @param
 * @returns Regxp
 */
function yearMonthDay() {
    return /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;
}

/**
 * @param
 * @returns RegExp
 */
function chineseCharacters() {
    return /[\u4e00-\u9fa5]/;
}

/**
 * @param
 * @returns RegExp
 */
function account() {
    return /^[a-zA-Z][a-zA-Z0-9_]{4,9}$/;
}

export { yearMonthDay, chineseCharacters, account };
