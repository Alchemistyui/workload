// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'lib-flexible'
<<<<<<< HEAD
import VueRouter from 'vue-router'; // 引入vue路由组件  
import VueSource from 'vue-resource'; // 引入组件，vue-source 有类似ajax的数据交互功能  
import goods from './components/home/home.vue'; // 引用组件，为了在配置路由时使用  
import ratings from './components/detail/detail.vue';  
import seller from './components/about/about.vue';  

Vue.use(VueRouter); // 使用引入的路由组件 

=======
import Vue_Router from 'vue-router'
import Vue_Resource from 'vue-resource'
import routerMap from './routers.js'

Vue.use(Vue_Router)
Vue.use(Vue_Resource)
>>>>>>> origin/master

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

const routes = [
{path: '/home', component: home},
{path: '/detail', component: detail},
{path: '/about', component: about},
{path: '/', component: home} //这里是为了让输入错误路径和空路径时默认显示home的内容  
];  
let router = new VueRouter({
routes, // routes:routes 传入路由参数  
linkActiveClass: 'active' // 这个属性是设置当前被点击的a标签class名，为了方便设置选中项的样式  
}); // 声明一个路由对象  
  
/* eslint-disable no-new */  
// new 一个vue的实例  
let vue = new Vue({
el: '#app', // 挂载点，挂载在id为app的组件上  
template: '<App/>',  
router, //把声明的router对象作为参数传给vue对象  
components: { App } // 组册组件，这里是一个es6的缩写方法，相当于components:{App:App}  
});  
vue.$mount('#app'); // 把vue挂载到dom上  
router.push('/goods');// 代替原本的router.go()，让页面初始默认跳转到/goods  

