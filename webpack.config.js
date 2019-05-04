const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest')

module.exports = function (env, argv) {
    const base = {
        entry: {
            index: './src/index.tsx'
        },
        output: {
            filename: 'js/[name].[contentHash:8].js',
            path: path.resolve(process.cwd(), 'dist'),
            publicPath: '/'
        },
        devtool: 'eval-source-map',
        resolve: {
            extensions: ['.ts', ".tsx", ".js", ".jsx", ".json"]
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: [
                        {
                            loader: 'awesome-typescript-loader'
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(png|svg|jpe?g|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'images'
                            }
                        }

                    ]
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'fonts'
                            }
                        }

                    ]
                }
            ]
        },
        devServer: {
            port: 3001,
            contentBase: './dist',
            //inline: false,
            // overlay: {
            //     warning: true,
            //     errors: true
            // }
        },
        mode: 'development',
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    }
                }
            }
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                alwaysWriteToDisk: true,
                chunks: ['index', 'vendors'],
                favicon: "./src/images/logo.jpeg",
                title: 'logdyn',
                meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'}
            }),
            new GenerateSW({
                clientsClaim: true,
                skipWaiting: true
            }),
            new WebpackPwaManifest({
                name: 'Logdyn Showcase',
                short_name: 'logdyn',
                description: 'A showcase for the work done as part of Logdyn',
                background_color: '#FFF',
                crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
                icons: [
                    {
                        src: path.resolve('src/images/logo.jpeg'),
                        sizes: [96, 128, 192, 256, 384, 512], // multiple sizes,
                        destination: 'icons'
                    }
                ]
            })
        ]
    };

    return base;
};
