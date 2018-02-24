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
            @popBox="popBox">
        </item> <!-- 将数据传递给子组件 -->
    </ul>
    <!-- <div id="popBox" :is="currentView"></div> -->
    <div id="mmmask"></div>
    <addRuleItem :is="currentView" @closeBox="closeBox" @saveItem="saveItem"></addRuleItem>
</div>

</template>





<script>
import item from './item'
import addRuleItem from './addRuleItem'
import ComputeRuleTitle from './ComputeRuleTitle'

var data = {
    name: '一、培养方案相关人才培养当量', intro: '培养方案相关人才培养工作是指教师从事与学院人才培养方案相关的课程教学、实践教学等（由多位老师共同参与完成的项目，工作当量由该项工作负责人根据教师参与情况分配。）', selected: '无特殊类别', fatherRule: '', newItem: false,
    children: [
    {
      name: '1、本科生和研究生（含留学生、非全日制研究生）培养方案', intro: '本科生和研究生（含留学生、非全日制研究生）培养方案', selected: '无特殊类别', fatherRule: '一、培养方案相关人才培养当量', newItem: false,
      children: [
      {
          name: 'new stuff', intro: 'newItem', selected: '无特殊类别', fatherRule: '1、本科生和研究生（含留学生、非全日制研究生）培养方案', newItem: true,
      //     children: [
      //     { name: 'hello' },
      //     { name: 'wat' }
      //     ]
      // },
      // { name: 'hello' },
      // { name: 'wat' },
      // {
      //     name: 'child folder',
      //     children: [
      //     { name: 'hello' },
      //     { name: 'wat' }
      //     ]
      }
      ]
  },
  // {name:, intro: , selected: , fatherRule: },
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
            alert(this.event),
            // 如何获取触发事件的对象
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
    不同类别计算规则和公式的处理
    保存按钮无法判断是谁发起的
    复选框的选择功能
操作日志：点击提交时组件间传值修改表格内容并提交到文件
提交规则：上传到后端

 -->