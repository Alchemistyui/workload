<template>
    <div>
    <div>
        <li style="width: 250px" @mouseenter="enterLeave" @mouseleave="enterLeave">
           <input type="checkbox" :value="this.model.name"  v-model="isFolder?checked : allChecked"> 
            <span
            :class="{bold: isFolder}"
            @click="toggle">
            {{ model.name }}
            <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
            </span>

            <span class="add" v-if="showAdd" @click="popBox" id="btnLogin">+</span>
            <!-- 减号数量到了后消失未解决 -->
            <span v-if="this.model.new"  @click="deletItem">-</span>

        <ul v-show="open" v-if="isFolder">
          <item
          class="item"
          v-for="(model, index) in model.children"
          :key="index"
          :model="model">
      </item>
  </ul>
</li>    
    </div>

</div>
</template>



<script>
import Vue from 'vue' 

export default {
    name: 'item',
    props: { //传递父组件传递的数据
        model: Object, //判断是否是Object类型的数据
    },
    data: function () {
        return {
            open: false,
            newItem: false,
            checked: [],
            showAdd: false
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
                return this.checked.length;
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
    popBox: function () {
        //获取页面的高度和宽度
        var sWidth=document.body.scrollWidth;
        var sHeight=document.body.scrollHeight;
        
        //获取页面的可视区域高度和宽度
        var wHeight=document.documentElement.clientHeight;
        
        var oMask=document.createElement("div");
            oMask.id="mask";
            oMask.style.height=sHeight+"px";
            oMask.style.width=sWidth+"px";
            document.body.appendChild(oMask);
        var popBox=document.createElement("div");
            popBox.id="login";
            popBox.innerHTML="<div>\
            <button>取消</button>\
            <button>保存</button>\
        </div>";
            document.body.appendChild(popBox);
        
        //获取登陆框的宽和高
        var dHeight=popBox.offsetHeight;
        var dWidth=popBox.offsetWidth;
            //设置登陆框的left和top
            popBox.style.left=sWidth/2-dWidth/2+"px";
            popBox.style.top=wHeight/2-dHeight/2+"px";
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
#login{ 
    position:fixed;
    z-index:1001;
    }
</style>

