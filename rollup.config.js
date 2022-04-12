export default {
    input: "src/core.js",
    output: {
        file: "bundle.js",
        format: "esm",
    },
    watch: {
        exclude: "node_modules/**",
    },
};
