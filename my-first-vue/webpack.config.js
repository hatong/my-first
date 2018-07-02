var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // separate css
var CopyWebpackPlugin = require('copy-webpack-plugin');

var webpackConfig = module.exports = {}; // init object
var isProduction = process.env.NODE_ENV === 'production'; // production environment


// input
webpackConfig.entry = {
  app: './src/app.js', // main
};

// output
webpackConfig.output = {
  path: path.resolve(__dirname, 'dist'),
   publicPath: './',
  filename: isProduction ? '[name].[hash].js' : '[name].js',
};

// loader
webpackConfig.module = {
  rules: [
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader",
      }),
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader',
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.(eot(|\?v=.*)|woff(|\?v=.*)|woff2(|\?v=.*)|ttf(|\?v=.*)|svg(|\?v=.*))$/,
      loader: 'file-loader',
      options: { name: 'fonts/[name].[ext]' },
    },
    {
      test: /\.(png|jpg|gif)$/,
      loader: 'file-loader',
      options:{
        name:"images/[name].[ext]"    //配置build之后，图片的存储路径,[ext]可能是自动匹配格式名称，否则webpack打包之后可能没有图片的格式名称
      }
    },
  ]
};

webpackConfig.plugins = [
  // make index.html
  new HtmlWebpackPlugin({
    template: './src/index.html'
  }),
  // separate css file
  new ExtractTextPlugin({
    filename: isProduction ? 'app.[hash].css' : 'app.css',
    // disable: false,
    // allChunks: true
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"dev"'
    }
  }),
  new CopyWebpackPlugin([
    { from: 'src/mock/api.json', to: 'mock' },
    { context: 'src/images', from: '*', to: path.join(__dirname, 'dist', 'images') }
  ]),
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    "windows.jQuery": "jquery"
  }),

];


webpackConfig.externals={
  'BMap': 'BMap',            //引入百度地图
  'BMapSymbolSHAPEPOINT': 'BMap_Symbol_SHAPE_POINT'
};

if (!isProduction) {
  webpackConfig.devServer = {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    compress: true,
    historyApiFallback: true,
    port: 8080,
  };
}
