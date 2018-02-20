<template>
    <div>
        <!-- the demo root element -->
        <button @click="addTree">添加规则+</button>
        <button>提交规则</button>
        <ul id="demo" v-for="tree in trees">
            <item 
            class="item"
            :model="tree">
        </item> <!-- 将数据传递给子组件 -->
    </ul>
    <addRuleItem></addRuleItem>
</div>

</template>





<script>
import item from './item'
import addRuleItem from './addRuleItem'

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
    components: {
        addRuleItem
    },
    name: 'RuleTree',
    components: {
        item
    },
    data () {
        return {
            trees: [data, {name: 'new tree', children: []}],
          new: false
      }
  },

  methods: {
    addTree: function () {
        this.trees.push({name: 'new tree', children: []})
    }
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
 -->