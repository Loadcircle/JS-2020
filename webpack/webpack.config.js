//aca inportamos path, es elemento de NODE 
const path = require('path');
module.exports = {
    //se puede pasar un arreglo en entry
    entry: {
        index: './src/js/index.js',
        nosotros: './src/js/nosotros.js'
    },
    output: {
        filename: '[name].bundle.js',
        //__dirname refiere a la la ubicación actual
        path: path.join(__dirname, '/dist')
    },
    module: {
        rules: [
            {
                //esto le dice que todo archivo que termine en .js
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            }
            
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'common',
                    chunks: 'all'
                }
            }
        }
    }
}