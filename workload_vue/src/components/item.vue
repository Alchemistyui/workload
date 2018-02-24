<template>
    <div>
        <div>
            <li>
                <div  @mouseenter="enterLeave" @mouseleave="enterLeave">
                    <input type="checkbox" :value="this.model.name"  v-model="isFolder?checked : allChecked"> 
                    <span
                    :class="{bold: isFolder}"
                    @click="toggle">
                    {{ model.name }}
                    <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
                </span>

                <span class="add" v-if="showAdd" @click="popBox" id="btnLogin">+</span>
                <span class="add" v-if="showAdd" @click="popBox" id="btnLogin">修改</span>
                <span v-if="this.model.newItem && showAdd"  @click="deletItem">-</span>
            </div>


            <ul v-show="open" v-if="isFolder">
              <item
              class="item"
              v-for="(model, index) in model.children"
              :key="index"
              :model="model"
              @popBox="popBox">
          </item>
      </ul>
  </li>    
</div>
</div>
</template>



<script>
import Vue from 'vue' 
import addRuleItem from './addRuleItem'

// var addRuleItem = Vue.extend({
//     template:'<div>emmmmm{{name}}</div>',
//     data: function () {
//         return {
//             name: 'big biao'
//         }
//     }
//     //  '<div id="box">\
//     //     <div id="boxTop">\
//     //         <span>规则信息</span>\
//     //         <span id="close">关闭</span>\
//     //     </div>\
//     //     <div>\
//     //         <p><label for="name">规则名称* </label><input id="name" v-model="name"></p>\
//     //         <p><label for="intro">规则简介* </label><input id="intro" v-model="name"></p>\
//     //         <p>规则类别* \
//     //         <select v-model="selected">\
//     //             <option>无特殊类别</option>\
//     //             <option>导入复核类</option>\
//     //             <option>申报审核类</option>\
//     //         </select>\
//     //         </p>\
//     //         <p><label for="fatherRule">父级规则* </label><input id="name" v-model="fatherRule"></p>\
//     //     </div>\
//     //     <div>\
//     //         <button>取消</button>\
//     //         <button>保存</button>\
//     //     </div>\
//     // </div>',
//     // data: function () {
//     //     return {
//     //         name: '',
//     //         intro: '',
//     //         selected: '无特殊类别',
//     //         fatherRule: ''
//     //     }
//     // }
// })



export default {
    components: {
        addRuleItem
    },
    name: 'item',
    props: { //传递父组件传递的数据
        model: Object //判断是否是Object类型的数据
    },
    data: function () {
        return {
            open: false,
            newItem: false,
            checked: [],
            showAdd: false,
            name: '',
            intro: '',
            selected: '无特殊类别',
            fatherRule: '',
            // addRuleItem: 'addRuleItem',
            // blank: '',
            // currentView: ''
            // len: this.model.children.length
        }
    },
    computed: {
        isFolder: function () {
          return this.model.children &&
          this.model.children.length
      },
      allChecked: {
            // 检查下面的属性
            get: function() {
                if (this.model.isFolder) {
                    return this.checkedCount == this.model.children.length
                }

            },
            // 为属性赋值不是直接赋而是调用函数
            set: function(value) {
                if (value) {
                    this.checked = this.model.children.map(function(item) {
                        return item.name
                    })
                } else {
                    this.checked = []
                }
            }
        },
        checkedCount: {
            get: function() {
                return this.checked.length
            }
        }
    },

    methods: {
        toggle: function () {
          if (this.isFolder) {
            this.open = !this.open
        }
    },
    changeType: function () {
        Vue.set(this.model, 'children', [])
    },
    addChild: function () {

        if (!this.isFolder) {
            this.changeType()
        }
        Vue.set(this.model, 'new', true),
        this.model.children.push({
            name: 'new stuff'
        }),
        this.open = true
    },
        // new: function () {
        //     this.newItem = !this.newItem
        // },
        deletItem: function () {
            this.model.children.pop()
        },
        enterLeave: function () {
            this.showAdd = !this.showAdd
        },
        // addBox: function () {
        //     var html = "<div id='box'>\
        //     <div id='boxTop'>\
        //     <span>规则信息</span>\
        //     <button id='close' @click='closeBox'>关闭</button>\
        //     </div>\
        //     <div>\
        //     <p><label for='name'>规则名称* </label><input id='name' v-model='name'></p>\
        //     <p><label for='intro'>规则简介* </label><input id='intro' v-model='intro'></p>\
        //     <p>规则类别* \
        //     <select v-model='selected'>\
        //     <option>无特殊类别</option>\
        //     <option>导入复核类</option>\
        //     <option>申报审核类</option>\
        //     </select>\
        //     </p>\
        //     <p><label for='fatherRule'>父级规则* </label><input id='fatherRule' v-model='fatherRule'></p>\
        //     </div>\
        //     <div>\
        //     <button  click='closeBox'>取消</button>\
        //     <button>保存</button>\
        //     </div>\
        //     </div>";
        //     // this.popBox(html)
        // },
        // editBox: function () {
        //     var html = "<div id='box'>\
        //     <div id='boxTop'>\
        //     <span>规则信息</span>\
        //     <span id='close'>关闭</span>\
        //     </div>\
        //     <div>\
        //     <p><label for='name'>规则名称* </label><input id='name' v-model='name' value='1、本科生和研究生（含留学生、非全日制研究生）培养方案'></p>\
        //     <p><label for='intro'>规则简介* </label><input id='intro' v-model='intro'></p>\
        //     <p>规则类别* \
        //     <select v-model='selected'>\
        //     <option>无特殊类别</option>\
        //     <option>导入复核类</option>\
        //     <option>申报审核类</option>\
        //     </select>\
        //     </p>\
        //     <p><label for='fatherRule'>父级规则* </label><input id='fatherRule' v-model='fatherRule'></p>\
        //     </div>\
        //     <div>\
        //     <button>取消</button>\
        //     <button>保存</button>\
        //     </div>\
        //     </div>";
        //     // this.popBox(html)
        // },
        // popBox: function () {
        // //获取页面的高度和宽度
        // var sWidth=document.body.scrollWidth;
        // var sHeight=document.body.scrollHeight;
        
        // //获取页面的可视区域高度和宽度
        // var wHeight=document.documentElement.clientHeight;
        
        // var oMask=document.createElement("div");
        // oMask.id="mask";
        // oMask.style.height=sHeight+"px";
        // oMask.style.width=sWidth+"px";
        // document.body.appendChild(oMask);


        // this.pop = true,
        // this.$emit('update:pop', true),

        // this.currentView = 'addRuleItem'


        // var popBox=document.getElementById('#pop-box');
        // // popBox.id="popBox";

        // // popBox.innerHTML= html;
        // // document.body.appendChild(popBox);
        // // var addRuleItem = new addRuleItem({  
        // // el:"#point"
        // // })  
        // // new addRuleItem().$mount('#pop-box')
        // alert(popBox)

        
        // //获取登陆框的宽和高
        // // var dHeight=popBox.offsetHeight;
        // // var dWidth=popBox.offsetWidth;
        // //     //设置登陆框的left和top
        // //     popBox.style.left=sWidth/2-dWidth/2+"px";
        //     // popBox.style.top=wHeight/2-dHeight/2+"px";
        // },
        // closeBox: function () {
        //     alert('ok'),
        //     this.currentView = 'blank',
        //     // document.body.removeChild(popBox);
        //     document.body.removeChild(oMask);
        // },
        popBox: function () {
            this.$emit('popBox')
        }

    }
}

</script>


<style type="text/css">
#mask{ 
    background-color:rgba(0,0,0,0.75);
    filter: alpha(opacity=50); 
    position:absolute; 
    left:0;
    top:0;
    z-index:1000;
}

</style>

