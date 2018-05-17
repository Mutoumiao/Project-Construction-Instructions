const path = require('path');
module.exports = {
    entry: {
        app: './app/js/main.js'  //入口路径
    },
    module: {
        loaders: [{   //表示使用什么样的文件，通过什么样的解析
            test: /\.html$/,
            loader: 'html-loader'
        },{
            test: /\.vue$/,
            loader: 'vue-loader'
        },{
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'  //支持串行解析，执行方向从右到左，比如先执行sass-loader,然后交给css-loader
        }]
    },
    plugins: {},
    output: {
        filename: '[name].min.js', 
        path: path.resolve(__dirname, 'dist') // __dirname 表示当前路径
    }
}