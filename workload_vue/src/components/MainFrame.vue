<template>
    <div id="MainFrame">

        <div id="LeftSidebar"> 
            <!-- sidebar header -->
            <div class="sidebar_header" style="border: 0;">
                <img src="<%=request.getContextPath()%>/css/images/img.png" alt="..." class="profile_img">           
                <div v-if="!sideHidden" class="profile_info" style="padding-top: 17px;">
                   <span style="font-size: 14px;">欢迎,</span>
                   <span class="userTeacher" style="font-size: 14px;">{{manager+"老师"}}</span>
                </div>
            </div>

           <!-- sidebar menu -->
           <div id="sidebar-menu" class="main_menu_side hidden-print" style="margin-top: 50px;">
                <ul v-if="!sideHidden" class="side-menu-show" style="margin-top: 0px;">
                    <li class="active firstToggleLi" ><a id="clickToggle1"><i class="fa fa-home"></i> 教务管理 <span class="fa fa-chevron-down"></span></a>
                        <ul class="nav child_menu "id='child_one_menu' style="display: block;">
                             <li v-for="li in lis"><a :onclick="li.methods">{{li.text}}</a></li> 
                        </ul>
                        </li>

                </ul>
                <ul v-else class="side-menu-hidden">
                    <li class="active firstToggleLi" ><a id="clickToggle1"><i class="fa fa-home"></i> 教务管理 </a></li>
                </ul>
            </div>

            <!-- /sidebar footer -->
            <div class="sidebar-footer hidden-small">
                    <img src="<%=request.getContextPath()%>/css/images/workloadlogo.png" alt="..." class="left_span bottomImg">
            </div>
        </div>
        
        <div>
            
        </div id="NavBar">
            <nav>
                <div id="nav_left" style="float: left;">
                    <button id="sidehid_btn" @click="sideHidden = !sideHidden"><i class="fa fa-bars"></i></button>
                    <h4>教学工作当量计算系统</h4>
                </div>
                
                <div id="nav_right">
                    <button @click="changeRole = !changeRole">切换角色<span class="caret"></span></button>
                    <ul v-if="changeRole" id="role">
                      <li><a href="#">教务管理</a></li>
                      <li><a href="#">学院教师</a></li>
                    </ul>

                    <div id="changeSemester">
                    <select v-model="selectYear" id="Year">
                        <option disabled value="">2017-2018</option>
                        <option v-for="year in years">{{year.text}}</option>
                    </select>


                    <select v-model="selectSemester" id="Semester">
                     <!-- class="form-control"> -->
                        <option>1</option>
                        <option>2</option>
                    </select>
                    <button>学期切换</button>
                    </div>


                    <button @click="showMenu = !showMenu">{{manager}}<span class="caret"></span></button>
                    <ul v-if="showMenu" id="menu">
                      <li><a href="#">个人信息</a></li>
                      <li><a href="#">查看帮助</a></li>
                      <li><a href="#">退出系统</a></li>
                    </ul>

                </div>
                  
            </nav>
        </div>
</template>



<script type="text/javascript">
export default {
  data () {
    return {
        manager: '李美蓉',
        sideHidden: false,
        changeRole: false,
        showMenu: false,
        selectYear: '',
        selectSemester: '1',
        lis: [
            {text: '计算规则管理', methods: 'jumpToAdd()'},
            {text: '教师项目管理', methods: 'reset()'},
            {text: '工作当量统计', methods: 'itemSummary()'}
        ],
        years: [
            {text: '2015-2016'},
            {text: '2016-2017'},
            {text: '2017-2018'},
            {text: '2018-2019'},
            {text: '2019-2020'}
        ]
    }
  }
}
</script>