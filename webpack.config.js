const path = require("path"); // connect path to webpack config
const HtmlWebpackPlugin = require("html-webpack-plugin"); // connect plugin
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // connect plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devtool: "inline-source-map",
  entry: {
    main: "./src/pages/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"), // you could name this anything you want, but let's stick to 'dist'
    filename: "main.js", // you could also name this anything you want, but let's stick to 'main.js'
    publicPath: "",
  },
  target: ["web", "es5"],
  mode: "development",
  stats: "errors-only", // only output when errors happen
  devServer: {
    static: path.resolve(__dirname, "./dist"), // specifies a folder from where to serve the application and its contents
    compress: true, // this will speed up file loading in development mode
    port: 8080, // will open your site at localhost:8080 (you can use another port)
    open: true, // site will open automatically in the browser after executing npm run dev
    liveReload: true,
    hot: false,
  },
  module: {
    rules: [
      // this is an array of rules
      // add an object containing rules for Babel to it
      {
        // a regular expression that searches for all js files
        test: /\.js$/,
        // all files must be processed by babel-loader
        loader: "babel-loader",
        // exclude the node_modules folder, we don't need to process files in it
        exclude: "/node_modules/",
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          },
          "postcss-loader",
        ],
      },
      {
        // add the rule for processing files
        test: /\.(png|svg|jpg|jpeg|gif|woff(2)?|eot|ttf|otf)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // path to our index.html file
    }),
    new CleanWebpackPlugin(), // use plugin
    new MiniCssExtractPlugin(), // connect the plugin for merging CSS files
  ], // add the array here
};

// module.exports is the syntax for export in Node.js
// we specified the location where webpack will start bundling - it's the index.js file inside the src folder. You could omit this since it's the webpack default entry point.
// specified and named the file in which all the js code will be collected
