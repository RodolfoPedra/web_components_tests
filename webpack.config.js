module.exports = {
    mode: 'production',
    entry: {
        'card': './src/components/card.js',
    },
    output: {
        filename: 'my-card.js',
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                },
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
};
