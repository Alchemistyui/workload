<template>
    <div>
        <select v-model="selectState" id="state">
            <option disabled value="">项目状态</option>
            <option v-for="state in states">{{state.text}}</option>
        </select>


        <div>
            <input type="text" placeholder="教师姓名" @input="search" v-model="searchTeacher">
            <table v-for="item in reverseItems">
                <tr>{{item.teacher}}</tr>
            </table>
        </div>




        <button>导出</button>

        <table class="table table-striped">
        <tr>
            <th>序号</th>
            <th>规则名称</th>
            <th>类别</th>
            <th>项目名称</th>
            <th>申报形式</th>
            <th>工作当量</th>
            <th>教师姓名</th>
            <th>项目状态</th>
            <th>操作</th>
        </tr>
        <tr v-for="(item, index) in reverseItems">
            <td>{{index + 1}}</td>
            <td>{{item.ruleName}}</td>
            <td>{{item.type}}</td>
            <td>{{item.projectName}}</td>
            <td>{{item.form}}</td>
            <td>{{item.workload}}</td>
            <td>{{item.teacher}}</td>
            <td>{{item.projectState}}</td>
            <td><button>退回导入</button><button>退回复核</button><button>查看详情</button></td>
        </tr>
    </table>

    </div>
</template>



<script>
export default {
  data () {
    return {
        selectState: '',
        states: [
            {text: '待审核/待复核'},
            {text: '审核/复核已通过'},
            {text: '尚存疑'},
            {text: '已解决'},
            {text: '已拒绝'}
        ],
        lists: [
            {ruleName: '1.1', type:'导入复核类', projectName: 'werfas', form: '个人申报', workload: 2, teacher: '李美蓉', projectState: '待审核/待复核'},
             {ruleName: '1.1', type:'导入复核类', projectName: 'werfas', form: '个人申报', workload: 2, teacher: '张翔', projectState: '待审核/待复核'},
             {ruleName: '1.2', type:'导入复核类', projectName: 'werfas', form: '个人申报', workload: 2, teacher: '李美蓉', projectState: '待审核/待复核'},
             {ruleName: '1.2', type:'导入复核类', projectName: 'werfas', form: '个人申报', workload: 2, teacher: '张翔', projectState: '待审核/待复核'},
             {ruleName: '1.2', type:'导入复核类', projectName: 'werfas', form: '个人申报', workload: 2, teacher: '张翔', projectState: '待审核/待复核'}

        ]
    }
  },
  computed: {
            reverseItems: function () {
                return this.lists.reverse()
            }
        }
}
</script>