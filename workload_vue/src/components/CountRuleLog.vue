<template>
    <table class="table table-striped">
        <tr>
            <th>序号</th>
            <th>操作时间</th>
            <th>操作人员</th>
            <th>操作内容</th>
        </tr>
        <tr v-for="(item, index) in reverseItems">
            <td>{{index}}</td>
            <td>{{item.time}}</td>
            <td>{{item.person}}</td>
            <td>{{item.content}}</td>
        </tr>
<<<<<<< HEAD
        <!-- <tfoot>
=======
        <tfoot>
>>>>>>> origin/master
=======
        <tfoot>
>>>>>>> abe53c5501b077d0e6b75822b4f57a8f29ad11e6
            <tr>
                <td colspan="4">
                    <div class="pull-left">
                        <button class="btn btn-default" @click="refresh">刷新</button>
                    </div>
                    <div class="pull-right">
                        <bootPage v-ref:page :async="false" :data="lists" :lens="lenArr" :page-len="pageLen" :param="param"></bootPage>
                    </div>
                </td>
            </tr>
<<<<<<< HEAD
<<<<<<< HEAD
        </tfoot> -->
=======
        </tfoot>
>>>>>>> abe53c5501b077d0e6b75822b4f57a8f29ad11e6
    </table>
</template>


<!-- row的值存在父组件里，用prop传值，动态传值，但是要考虑如何在组件中动态创建结点（直接v-for） -->

<script>
<<<<<<< HEAD
// import bootPage from './BootPage.vue'

    export default {
        // components: {
        //         bootPage
        //     },

=======
import bootPage from './BootPage.vue'

    export default {
        components: {
                bootPage
            },
>>>>>>> abe53c5501b077d0e6b75822b4f57a8f29ad11e6
        // props: { //传递父组件传递的数据
        //     items: Object //判断是否是Object类型的数据
        // },
        data () {
            return {
                lenArr: [10, 50, 100], // 每页显示长度设置
                pageLen: 5, // 可显示的分页数
                param: {}, // 传递参数
                lists: [
                {time: '2018-09-11', person: '李美蓉', content: '删除工作量计算规则：x。'},
                {time: '2018-09-12', person: '李美蓉', content: '删除工作量计算规则：y。'},
                {time: '2018-09-13', person: '李美蓉', content: '删除工作量计算规则：z. '},
                {time: '2018-09-11', person: '李美蓉', content: '删除工作量计算规则：x。'},
                {time: '2018-09-12', person: '李美蓉', content: '删除工作量计算规则：y。'},
                {time: '2018-09-13', person: '李美蓉', content: '删除工作量计算规则：z. '},
                {time: '2018-09-11', person: '李美蓉', content: '删除工作量计算规则：x。'},
                {time: '2018-09-12', person: '李美蓉', content: '删除工作量计算规则：y。'},
                {time: '2018-09-13', person: '李美蓉', content: '删除工作量计算规则：z. '},
                {time: '2018-09-11', person: '李美蓉', content: '删除工作量计算规则：x。'},
                {time: '2018-09-12', person: '李美蓉', content: '删除工作量计算规则：y。'},
                {time: '2018-09-13', person: '李美蓉', content: '删除工作量计算规则：z. '},
                {time: '2018-09-11', person: '李美蓉', content: '删除工作量计算规则：x。'},
                {time: '2018-09-12', person: '李美蓉', content: '删除工作量计算规则：y。'},
                {time: '2018-09-13', person: '李美蓉', content: '删除工作量计算规则：z. '},
                {time: '2018-09-11', person: '李美蓉', content: '删除工作量计算规则：x。'},
                {time: '2018-09-12', person: '李美蓉', content: '删除工作量计算规则：y。'},
                {time: '2018-09-13', person: '李美蓉', content: '删除工作量计算规则：z. '},
                {time: '2018-09-11', person: '李美蓉', content: '删除工作量计算规则：x。'},
                {time: '2018-09-12', person: '李美蓉', content: '删除工作量计算规则：y。'},
                {time: '2018-09-13', person: '李美蓉', content: '删除工作量计算规则：z. '},
                {time: '2018-09-11', person: '李美蓉', content: '删除工作量计算规则：x。'},
                {time: '2018-09-12', person: '李美蓉', content: '删除工作量计算规则：y。'},
                {time: '2018-09-13', person: '李美蓉', content: '删除工作量计算规则：z. '}
                ],
                tableList: [] // 分页组件传回的分页后数据
            }
        },
        computed: {
            reverseItems: function () {
                return this.lists.reverse()
            }
        },
        methods: {
        refresh () {
            this.$refs.page.refresh()
        }
    },
    events: {
        // 分页组件传回的表格数据
        'data' (data) {
            this.tableList = data
        },
        // 刷新数据
        'refresh' () {
            this.refresh()
        }
    }
}

</script>



<style>
/*@import url('./assets/css/bootstrap.min.css');*/
.box {
    padding: 100px;
}
</style>