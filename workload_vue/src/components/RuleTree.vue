<template>
    <div>
        <!-- the demo root element -->
        <button @click="addTree">添加规则+</button>
        <button>提交规则</button>
        <ul id="demo" v-for="tree in trees">
            <item 
            class="item"
            :model="tree"
            @closeBox="closeBox"
            @popBox="popBox"
            @saveItem="saveItem">
        </item> <!-- 将数据传递给子组件 -->
    </ul>
    <!-- <div id="popBox" :is="currentView"></div> -->
    <div id="mmmask"></div>
    <addRuleItem :is="currentView" @closeBox="closeBox"></addRuleItem>
</div>

</template>





<script>
import item from './item'
import addRuleItem from './addRuleItem'
import ComputeRuleTitle from './ComputeRuleTitle'

var data = {
    name: 'My Tree',
    children: [
    { name: 'hello' },
    { name: 'wat' },
    {
      name: 'child folder',
      children: [
      {
          name: 'child folder',
          children: [
          { name: 'hello' },
          { name: 'wat' }
          ]
      },
      { name: 'hello' },
      { name: 'wat' },
      {
          name: 'child folder',
          children: [
          { name: 'hello' },
          { name: 'wat' }
          ]
      }
      ]
  }
  ],
}


export default {
    name: 'RuleTree',
    components: {
        item,
        addRuleItem,
        ComputeRuleTitle
    },
    data () {
        return {
            trees: [data, {name: 'new tree', children: []}],
            new: false,
            addRuleItem: '<addRuleItem @closeBox="closeBox">',
            currentView: '',
            screenWidth: document.body.clientWidth,
            screenHeight: document.body.clientHeight,
            logItems: []
      }
  },

  methods: {
    addTree: function () {
        this.trees.push({name: 'new tree', children: []})
    },
    popBox: function () {
        // //获取页面的高度和宽度
        var sWidth= document.body.scrollWidth;
        var sHeight=document.body.scrollHeight;
        
        // //获取页面的可视区域高度和宽度
        // var wHeight=document.documentElement.clientHeight;
        
        // var oMask=document.getElementById('mask');
        var oMask=document.createElement("div");
        oMask.id="mask";
        oMask.style.height=sHeight+"px";
        oMask.style.width=sWidth+"px";
        document.body.appendChild(oMask);


        // this.pop = true,
        // this.$emit('update:pop', true),

        this.currentView = 'addRuleItem'



        // var popBox=document.getElementById('#pop-box');
        // popBox.id="popBox";

        // popBox.innerHTML= html;
        // document.body.appendChild(popBox);
        // var addRuleItem = new addRuleItem({  
        // el:"#point"
        // })  
        // new addRuleItem().$mount('#pop-box')
        // alert(popBox)

        
        //获取登陆框的宽和高
        // var dHeight=popBox.offsetHeight;
        // var dWidth=popBox.offsetWidth;
        //     //设置登陆框的left和top
        //     popBox.style.left=sWidth/2-dWidth/2+"px";
            // popBox.style.top=wHeight/2-dHeight/2+"px";
        },
        closeBox: function () {
            this.currentView = ''
            var oMask=document.getElementById('mask');
            // document.body.removeChild(popBox);
            document.body.removeChild(oMask);

        },
        saveItem: function (data) {
            alert('emm'),
            alert(data),
            this.event.child.push(data)


        }
    //     watch: {
    //         screenWidth (val) {
    //             if (!this.timer) {
    //                 this.screenWidth = val
    //                 this.timer = true
    //                 let that = this
    //                 setTimeout(function () {
    //                     // that.screenWidth = that.$store.state.canvasWidth
    //                     console.log(that.screenWidth)
    //                     that.init()
    //                     that.timer = false
    //                 }, 400)
    //             }
    //         },
    //         screenHeight (val) {
    //             if (!this.timer) {
    //                 this.screenHeight = val
    //                 this.timer = true
    //                 let that = this
    //                 setTimeout(function () {
    //                     // that.screenWidth = that.$store.state.canvasWidth
    //                     console.log(that.screenHeight)
    //                     that.init()
    //                     that.timer = false
    //                 }, 400)
    //             }
    //         }
    //     },
    //     mounted () {
    //     const that = this
    //     window.onresize = () => {
    //         return (() => {
    //             window.screenWidth = document.body.clientWidth,
    //             this.screenWidth = window.screenWidth,
    //             window.screenHeight = document.body.clientHeight,
    //             this.screenHeight = window.screenHeight
    //         })()
    //     }
    // }

    }

}
</script>


<style type="text/css">
body {
  font-family: Menlo, Consolas, monospace;
  color: #444;
}
.item {
  cursor: pointer;
}
.bold {
  font-weight: bold;
}
#mask{ 
    background-color:rgba(0,0,0,0.75);
    filter: alpha(opacity=50); 
    position:absolute; 
    left:0;
    top:0;
    z-index:1000;
    height: 50px;
    width: this.screenWidth;
}

ul {
  padding-left: 5em;
  line-height: 1.5em;
  list-style-type: dot;
}
</style>

<!-- 
操作日志：点击提交时组件间传值修改表格内容并提交到文件
提交规则：上传到后端
添加，修改时的弹出界面：动态添加组件
复选框的选择功能
减号的问题
树形第二层结点：不能传递popbox事件
 -->