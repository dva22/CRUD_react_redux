import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
//import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config.dev.js';


let app = express();
const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler));

//app.use(webpackHotMiddleware(compiler));
//app.use(express.static(__dirname + '/public'));
app.get('/*', (req, res) => {
   res.sendFile(path.join(__dirname,"/public/index.html"));

});

app.listen(3000, () => console.log('Running on location:3000'));