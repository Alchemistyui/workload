<template>
    <table class="table table-striped">
        <tr>
            <th>序号</th>
            <th>操作时间</th>
            <th>操作人员</th>
            <th>操作内容</th>
        </tr>
        <tr v-for="(item, index) in reverseItems">
            <td>{{index+1}}</td>
            <td>{{item.time}}</td>
            <td>{{item.person}}</td>
            <td>{{item.content}}</td>
        </tr>
        
    </table>
</template>


<!-- row的值存在父组件里，用prop传值，动态传值，但是要考虑如何在组件中动态创建结点（直接v-for） -->

<script>
    export default {
        // props: { //传递父组件传递的数据
        //     items: Object //判断是否是Object类型的数据
        // },
        data () {
            return {
                items: [
                {time: '2018-09-11', person: '李美蓉', content: '删除工作量计算规则：x。'},
                {time: '2018-09-12', person: '李美蓉', content: '删除工作量计算规则：y。'},
                {time: '2018-09-13', person: '李美蓉', content: '删除工作量计算规则：z. '}
                ]
            }
        },
        computed: {
            reverseItems: function () {
                return this.items.reverse()
            }
        }
    }
</script>