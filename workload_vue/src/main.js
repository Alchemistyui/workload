// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'lib-flexible'
import Vue_Router from 'vue-router'
import Vue_Resource from 'vue-resource'
import routerMap from './routers.js'

Vue.use(Vue_Router)
Vue.use(Vue_Resource)

Vue.config.productionTip = false

// 请求编码转换
Vue.http.options.emulateJSON = true

var router = new Vue_Router({
    hashbang: true,
    history: false,
    saveScrollPosition: false,
    transitionOnLoad: true,
    linkActiveClass: 'active'
})

// 全局的前置钩子函数，在路由切换开始时调用
router.beforeEach(function(){
    window.scrollTo(0,0)
})

// 独立出来的路由
routerMap(router)

router.start(App, '#app')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})


