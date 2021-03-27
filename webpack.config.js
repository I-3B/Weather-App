const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/display.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
