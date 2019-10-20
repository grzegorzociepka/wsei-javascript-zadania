const path = require('path');

module.exports = {
    entry: './js/app.js',
    output: {
        filename: 'out.js',
        path: path.resolve(__dirname, 'js'),
    },
};