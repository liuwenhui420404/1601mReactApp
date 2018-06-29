var path = require("path")
var api = require("../mock/index")

module.exports = {
    base: {
        entry:path.join(__dirname,`../src/main.jsx`),
        outputPath: path.join(__dirname, "../dist"),
        outputFileName: "[id]-[name]-[hash].js",
        templatePath: `./src/index.html`,
        htmlMinify: {
            removeComments: true, //去除注释
            collapseWhitespace: true, //去除空格
            removeAttributeQuotes: true, //移除属性的引号
            removeEmptyAttributes: true, //去除空属性
        }

    },
    dev: {
        host: "localhost",
        port: 9797,
        browserOpen: true,
        devtool: "cheap-module-eval-source-map",
        // devtool:false,
        proxy: {
            "/apis": {
                target: "http://localhost:3000",
                pathRewrite: { "^/apis": "/api" },
                secure: false
            }
        },
        before: api
    },
    build: {
        uglifyJsSourceMap: false,
        devtool: false
    },
    device:{
        type:"pc",
        width:750
    },
    babel: {
        presets: [
            // "env",
            ["env", { modules: false }],
            "stage-0",
            "react"
        ],
        plugins: [
            ["transform-runtime",
                {
                    "helpers": false,
                    "polyfill": false,
                    "regenerator": true,
                    "moduleName": "babel-runtime"
                }
            ],
            "syntax-dynamic-import", "transform-object-rest-spread", "transform-react-jsx",["import", {
                libraryName: "antd-mobile",
                style: true,
              }]
        ]
        
    }
}