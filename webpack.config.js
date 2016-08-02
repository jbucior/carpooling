var webpack = require("webpack");

module.exports = {
    entry: "./app/index.js",
    output: {
        path: __dirname,
        filename: "./app/bundle.js"
    }
};