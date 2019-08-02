import Cookie from 'js-cookie'
import serverCookie from 'cookie'

function serverLogin(req) {
    return req.cookies&&req.cookies.token;
}

function clientLogin() {
    return Cookie.get('token');
}

/*
* 客户端与服务端判断是否需要登录
* 未登录用户权限页面跳转
* 1.xx页
* */

export default function ({ route, req, res, redirect }) {
    let isClient = process.client;
    let isServer = process.server;
    if (isServer) {
        // 在服务端判读是否需要登陆(如果直接输地址，在客户端是判断不到的)
        req.headers.cookie = req.headers.cookie || '';
        req.cookies = serverCookie.parse(req.headers.cookie);
        let cookies = req.cookies;
        let path = req.originalUrl;
        path = path.split('?')[0];
        if (path.indexOf('/write')>=0) {
            if (!serverLogin(req)) {
                redirect('/login?from=' + path);
            }
        }
    }
    //在客户端判读是否需要登陆
    if (isClient) {
        let path = route.path;
        path = path.split('?')[0]; // 去除?from后的路由参数
        if (path.indexOf('/write')>=0) {
            if (!clientLogin(req)) {
                redirect('/login?from=' + path);
            }
        }
    }
}
