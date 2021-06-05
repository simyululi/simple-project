const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}

let baseURL;
switch (process.env.NODE_ENV) {
    case 'development':
        baseURL = 'http://dev-mall-pre.springboot.cn';
        break;
    case 'test':
        baseURL = 'http://test-mall-pre.springboot.cn';
        break;
    case 'prev':
        baseURL = 'http://prev-mall-pre.springboot.cn';
        break;
    case 'prod':
        baseURL = 'http://mall-pre.springboot.cn';
        break;
    default:
        baseURL = 'http://mall-pre.springboot.cn';
        break;
}

module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/api':{
                target:"http://mall-pre.springboot.cn",
                changeOrigin:true,
                pathRewrite:{
                 '^/api':''
                }
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
}
