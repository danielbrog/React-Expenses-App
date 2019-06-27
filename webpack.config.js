const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

console.log(path.resolve(__dirname, 'public'))

module.exports = (env) => {
    const isProduction = env ==='production'

    let outputPath
    if(isProduction) {
        outputPath = path.resolve(__dirname, '../../backend/public/ReactApps/ExpensifyApp')
    } else {
        outputPath = path.resolve(__dirname, 'public')
    }

    return {
        plugins: [
            new MiniCssExtractPlugin({filename: 'styles.css'})
        ],
        entry: './src/app.js',
        output: {
            path: outputPath,
            filename: 'notes.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },{
                test: /\.s?css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                            hmr: process.env.NODE_ENV === 'development'
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }]
        },
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    }
}