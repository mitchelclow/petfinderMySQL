// The node module to get correct directory as well as other things
var path = require('path');
// All of the settings for webpack
// Looks at all of the source JS, JSX, or ES2106 and combine it into one file to reduce http requests
// Transforms any JS, JSX, or ES2016 code into vanilla JS and outputs it all into one specified file and look at CSS
module.exports = {

    // The first JS script file (root) for the app
    entry: path.resolve(__dirname, 'src') + '/app/index.js',
    // Configuring the output after bringing all of the app/index.js requires and bring them together
    // Webpack automatically creates the 'dist' (distribution) folder when it runs
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        // Creates a bundle.js file with all code transformed into one file in the dist/app folder
        filename: 'bundle.js',
        // References the index file as '/app/' for the public path
        publicPath: '/app/'
    },
    // Configures babel stuff
    module: {
        loaders: [
            {
                // Looks for any file in 'src' with a .js extension and converts them into normal JS
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    // Tells which code to convert to JS
                    presets: ['react', 'env']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};
