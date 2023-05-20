const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemovePlugin = require("remove-files-webpack-plugin");

module.exports = {
    entry: {
        main: ["./styles/main.scss"]
    },
    mode: 'development',
    plugins:[
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new RemovePlugin({
            after: {
                include: ["./dist/main.js"]
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/' // Output folder for fonts
                    }
                  }
                ]
              }
        ]
    }
}