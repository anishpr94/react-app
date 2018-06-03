// var webpack = require("webpack");
// var path = require("path");

// var DIST_DIR = path.resolve(__dirname, "dist");
// //var SRC_DIR = path.resolve(__dirname,  "\\src");
// //console.log(SRC_DIR);
// var config = {
//     entry:  "C:\\Users\\anpr.oradev\\projects\\react-App\\src\\app\\index.js",
//     output: {
//         path: DIST_DIR + "/app",
//         filename: "bundle.js",
//         publicPath: "/app/"
//     },
//     modules:{
//         loaders: [
//             {   
//                  test: /\.js?/,
//                  include:  "C:\\Users\\anpr.oradev\\projects\\react-App\\src",
//                  loader: "babel-loader",
//                  query:{
//                      presets: ["react", "es2015", "stage-2"]
//                  }
//             }
//         ]
//     }
// };

// module.export = config;

var path = require("path");
var webpack = require('webpack');
var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ]
    },
    mode: 'development'
   
};

module.exports = config;