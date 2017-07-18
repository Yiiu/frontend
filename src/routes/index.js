import App from './App'
import Index from './routes/Index/index.js'
import Account from './routes/Account/index.js'
export default {
  path: '/',
  component: App,
  indexRoute: {
    component: Index
  },
  childRoutes: [
    Account
  ]
  
  // childRoutes: [
  //   // 路由按模块组织分离，避免单文件代码量过大
  //   require('./msg').default,
  //   require('./todo').default,
    
  //   // 强制“刷新”页面的 hack
  //   { path: 'redirect', component: require('COMPONENT/Redirect').default },
    
  //   // 无路由匹配的情况一定要放到最后，否则会拦截所有路由
  //   { path: '*', component: require('COMPONENT/404').default }
  // ]
}