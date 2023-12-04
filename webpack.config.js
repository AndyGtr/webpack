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
        filename: '[name][contenthash].js',
        // clean the dist folder before each build
        clean: true,
        // specify the format for the output file names when emitting assets
        assetModuleFilename: '[name][ext]'
    },
    devtool: 'source-map',
    devServer: {
        // serve files from the dist directory
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        // prevents the default browser full page refresh on form submission and link change
        historyApiFallback: true 
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
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['@babel/preset-env'] }
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ], 
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: 'src/template.html'
        })
    ]

}