/**
 * @param
 * @returns Regxp
 */
function email() {
    return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
}

/**
 * @param
 * @returns Regxp
 */
function url() {
    return /^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/;
}

export { email, url };
