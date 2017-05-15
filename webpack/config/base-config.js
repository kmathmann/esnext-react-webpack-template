import path from 'path';

const ROOT_PATH = path.resolve('./');

export default (dev = false) => {
    const config = {
        entry: {
            template: [
                path.resolve('src/index')
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx', '.scss']
        },
        output: {
            path: path.resolve(ROOT_PATH, 'build'),
            filename: `[name].bundle.js?${dev ? '' : '[hash]'}`
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: ['babel-loader'],
                    include: path.resolve(ROOT_PATH, 'src')
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: 'style-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                minimize: !dev
                            }
                        },
                        {
                            loader: 'postcss-loader',
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
                }
            ]
        },
    };

    if (dev) {
        config.entry.template.unshift('react-hot-loader/patch');
    }

    return config;
};
