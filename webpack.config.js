const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        // __dirname is a Node.js variable that gives us 
        // the absolute path to our current directory
        bundle: path.resolve(__dirname, 'src/index.js')},
    output: {
        path: path.resolve(__dirname, 'dist'),
        // [name] is a placeholder for the entry object keys
        // in this case 'bundle'
        filename: '[name][contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]   
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: 'src/template.html'
        })
    ]

}