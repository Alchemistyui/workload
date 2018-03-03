<template>
    <div>
        <select v-model="searchState" id="state">
            <option disabled value="">项目状态</option>
            <option v-for="state in states">{{state.text}}</option>
        </select>


        <div>
            <input type="text" placeholder="教师姓名" @blur="showTeTable = false" @click="showTeacher" v-model="searchTeacher">
            <table v-if="showTeTable"> 
             <tr v-for="item in filterTeachers">{{item}}</tr>
         </table>
     </div>


     <div>
        <input type="text" placeholder="规则名称" @blur="showRuTable = false" @click="showRule" v-model="searchRule">
        <table v-if="showRuTable">
         <tr v-for="item in filterRules">{{item}}</tr>
     </table>
 </div>

 <button @click="search">搜索</button>



 <p>每页
    <select v-model="limit" @change="changeLimit" id="state">
        <option>1</option>
        <option>3</option>
        <option>5</option>
    </select>
条</p>




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
    <tr v-for="(item, index) in paginate">
        <td>{{index + 1}}</td>
        <td>{{item.ruleName}}</td>
        <td>{{item.type}}</td>
        <td>{{item.projectName}}</td>
        <td>{{item.form}}</td>
        <td>{{item.workload}}</td>
        <td>{{item.teacher}}</td>
        <td>{{item.projectState}}</td>
        <td><button @click = "backToInput($event)">退回导入</button><button>退回复核</button><button>查看详情</button></td>
    </tr>
</table>

<p>共{{filteredArray.length}}条当前工作目录</p>

<p class="pagination">
    <a class="button" @click="changePage(-1)">上一页</a>
    当前第<input v-model="page" type="text" class="page">页 共{{ total }}页
    <a class="button" @click="changePage(1)">下一页</a>
</p>

</div>
</template>



<script>
export default {
  data () {
    return {
        searchState: '',
        searchTeacher: '',
        searchRule: '',
        showTeTable: false,
        showRuTable: false,
        filteredArray: [
            {ruleName: '1.1', type:'导入复核类', projectName: 'werfas', form: '个人申报', workload: 2, teacher: '1李美蓉', projectState: '待审核/待复核'},
            {ruleName: '1.1', type:'导入复核类', projectName: 'werfas', form: '个人申报', workload: 2, teacher: '1张翔', projectState: '待审核/待复核'},
            {ruleName: '1.2', type:'导入复核类', projectName: 'werfas', form: '个人申报', workload: 2, teacher: '2李美蓉', projectState: '待审核/待复核'},
            {ruleName: '1.2', type:'导入复核类', projectName: 'werfas', form: '个人申报', workload: 2, teacher: '2张翔', projectState: '待审核/待复核'},
            {ruleName: '1.2', type:'导入复核类', projectName: 'werfas', form: '个人申报', workload: 2, teacher: '3张翔', projectState: '待审核/待复核'}
        ],
        teachers: [],
        rules: [],
        total: 0,
        limit: 3,
        page: 1,
        states: [
        {text: '待审核/待复核'},
        {text: '审核/复核已通过'},
        {text: '尚存疑'},
        {text: '已解决'},
        {text: '已拒绝'}
        ],
        lists: [
            {ruleName: '1.1', type:'导入复核类', projectName: 'werfas', form: '个人申报', workload: 2, teacher: '1李美蓉', projectState: '待审核/待复核'},
            {ruleName: '1.1', type:'导入复核类', projectName: 'werfas', form: '个人申报', workload: 2, teacher: '1张翔', projectState: '待审核/待复核'},
            {ruleName: '1.2', type:'导入复核类', projectName: 'werfas', form: '个人申报', workload: 2, teacher: '2李美蓉', projectState: '待审核/待复核'},
            {ruleName: '1.2', type:'导入复核类', projectName: 'werfas', form: '个人申报', workload: 2, teacher: '2张翔', projectState: '待审核/待复核'},
            {ruleName: '1.2', type:'导入复核类', projectName: 'werfas', form: '个人申报', workload: 2, teacher: '3张翔', projectState: '待审核/待复核'}
        ]
    }
},
computed: {
    reverseItems: function () {
        // this.paginate = 
        return this.lists.reverse()
    },
    filterTeachers: function () {
        var searchTeacher = this.searchTeacher;
        var teachers = this.teachers;
        return teachers.filter(function (item) {
            return item.indexOf(searchTeacher) !== -1
        })


            // var self = this
            // self.teachers.filter(function (teacher) {
            //   var searchRegex = new RegExp(self.searchQuery, 'i')
            //   return searchRegex.test(teacher)
            // })
        },
        filterRules: function () {
            var searchRule = this.searchRule;
            var rules = this.rules;
            return rules.filter(function (item) {
                return item.indexOf(searchRule) !== -1
            })
        },
        paginate : {
            get: function () {
                var arr = [];
                // console.log('paginate')
                // var searchRule = this.searchRule;
                // var searchTeacher = this.searchTeacher;
                // var searchType = this.searchType;
                // var reverseItems = this.reverseItems;
                // arr = reverseItems.filter(function (item) {
                //     return item.indexOf(searchTeacher) !== -1 && item.indexOf(searchRule) !== -1 && item.indexOf(searchType) !== -1
                // },
                this.total = Math.ceil(this.filteredArray.length / this.limit)
                let page = parseInt(this.page - 1)
                if (page < 0) {
                    page = 0
                }

                
                // alert(arr.push)
                arr = this.filteredArray.slice(this.limit * page, this.limit * (page + 1))
                return arr   
                }
            // set: function (newValue) {
            //     return this.lists.reverse()
            // }
        }
        }, 

            // teacher: function () {

                // var result = [], hash = {};
                // for (var i = 0, elem; (elem = this.lists[i].teacher) != null; i++) {
                //     if (!hash[elem]) {
                //         result.push(elem);
                //         hash[elem] = true;
                //     }
                // }
                // return result;
            // //     var arr = [];
            // //     for(var i=0;i<this.lists.length;i++){
            // //         if(arr.indexOf(this.lists[i]) < 0){
            // //             arr.push(this.lists[i].teacher);
            // //         }
            // //     }
            // //     return arr
            // }
        methods: {
            // 搜索
            // search(e) {

                // var v = e.target.value,
                //     self = this;
                // self.searchlist = [];
                // if (v) {
                //     var ss = [];

                //     // 过滤需要的数据
                //     this.lists.forEach(function (item) {
                //         // 检测用户名
                //         if (item.teacher.indexOf(v) > -1) {
                //             if (self.searchlist.indexOf(item.teacher) == -1) {
                //                 self.searchlist.push(item.teacher);
                //             }
                //             ss.push(item);
                //         }
                //     });
                //     this.teacher = ss; // 将过滤后的数据给了slist
                // } else {
                //     // 没有搜索内容，则展示全部数据
                //     this.teacher = ss;
                // }
            // },
            showTeacher() {
                var hash = {};
                // var len = this.lists.length;
                // alert(len)
                // alert(this.lists[0].teacher)
                           // alert(this.filterTeachers)
                           var arr = [];
                           for (var i = 0, elem; i < this.lists.length; i++) {
                            elem = this.lists[i].teacher;
                    // alert(elem + i)
                    if (!hash[elem]) {
                        arr.push(elem);
                        hash[elem] = true;
                    }
                // alert(arr);
            };
                // alert(arr);
                this.teachers = arr;
                this.showTeTable = true
            },
            showRule() {
                var hash = {};
                var arr = [];
                           // alert(this.filterTeachers)
                           for (var i = 0, elem; i < this.lists.length; i++) {
                            elem = this.lists[i].ruleName;
                    // alert(elem + i)
                    if (!hash[elem]) {
                        arr.push(elem);
                        hash[elem] = true;
                    }
                };
                this.rules = arr;
                this.showRuTable = true
            },
            changePage (num) {
              if (num === 1) {
                if (this.page < this.total) {
                  this.page++
              } else {
                  window.alert('已是最后一页')
                }
              } else {
                    if (this.page > 1) {
                      this.page--
                  } else {
                      window.alert('已是第一页')
                  }
              }
              // alert(this.page)
            },
            search() {
                var arr = ['1'];
                var searchRule = this.searchRule;
                var searchTeacher = this.searchTeacher;
                var searchState = this.searchState;
                var reverseItems = this.reverseItems;
                // alert(searchType);
                // alert(reverseItems[0].type);
                // alert(reverseItems[0].teacher);
                arr = reverseItems.filter(function (item) {
                    return item.teacher.indexOf(searchTeacher) !== -1 && item.ruleName.indexOf(searchRule) !== -1 && item.projectState.indexOf(searchState) !== -1
                }),
                this.filteredArray = arr
                // alert(this.filteredArray)
            },
            changeLimit() {
                // alert('emm'),
                this.page = 1
            },
            backToInput(e) {
                alert(e.target.parentNode.parentNode.childNodes[6].innerHTML),
                alert(e.target.parentNode.parentNode.childNodes[12].innerHTML)

            }


}
}

</script>