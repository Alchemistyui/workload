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
                    <button @click="changeRole = !changeRole">切换角色</button>
                  <ul v-if="changeRole" id="role">
                    <li>教务管理</li>
                    <li>学院教师</li>
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
        lis: [
            {text: '计算规则管理', methods: 'jumpToAdd()'},
            {text: '教师项目管理', methods: 'reset()'},
            {text: '工作当量统计', methods: 'itemSummary()'}
        ]
    }
  }
}
</script>