<template>
    <div id="LeftSidebar"> 
        <!-- sidebar header -->
        <div class="sidebar_header" style="border: 0;">
            <img src="<%=request.getContextPath()%>/css/images/img.png" alt="..." class="profile_img">           
            <div class="profile_info" style="padding-top: 17px;">
               <span style="font-size: 14px;">欢迎,</span>
               <span class="userTeacher" style="font-size: 14px;"></span>
            </div>
        </div>

       <!-- sidebar menu -->
       <div id="sidebar-menu" class="main_menu_side hidden-print" style="margin-top: 50px;">
            <ul class="nav side-menu" style="margin-top: 0px;">
                <li class="active firstToggleLi" ><a id="clickToggle1"><i class="fa fa-home"></i> 教务管理 <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu "id='child_one_menu' style="display: block;">
                         <li v-for="li in lis"><a>{{li.text}}</a></li> 
                    </ul>
                    </li>

                </ul>
        </div>

        <!-- /sidebar footer -->
        <div class="sidebar-footer hidden-small">
                <img src="<%=request.getContextPath()%>/css/images/workloadlogo.png" alt="..." class="left_span bottomImg">
        </div>
    </div>
</template>


<script type="text/javascript">
export default {
  data () {
    return {
        lis: [
            {text: '计算规则管理', methods: 'jumpToAdd()'},
            {text: '教师项目管理', methods: 'reset()'},
            {text: '工作当量统计', methods: 'itemSummary()'}
        ]
    }
  }
}
</script>


<style type="text/css">
/*.navbar {
    margin-bottom: 0
}
.nav_title {
    width: 230px;
    float: left;
    background: #2A3F54;
    border-radius: 0;
    height: 57px
}
.profile_pic {
    width: 35%;
    float: left
}
.img-circle.profile_img {
    width: 35px;
    background: #fff;
    margin-left: 45%;
    z-index: 1000;
    position: inherit;
    margin-top: 15px;
    border: 1px solid rgba(52, 73, 94, 0.44);
    padding: 4px
}
.profile_info {
    padding: 9.5px;
    width: 65%;
    float: left
}
.profile_info span {
    font-size: 13px;
    line-height: 30px;
    color: #BAB8B8
}
.profile_info h2 {
    font-size: 14px;
    color: #ECF0F1;
    margin: 0;
    font-weight: 300
}
.main_menu_side {
    padding: 0
}
@media print {
  .hidden-print {
    display: none !important;
  }
}
.menu_section {
    margin-bottom: 35px
}
.menu_section h3 {
    padding-left: 15px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: .5px;
    font-weight: bold;
    font-size: 11px;
    margin-bottom: 0;
    margin-top: 0;
    text-shadow: 1px 1px #000
}
.menu_section>ul {
    margin-top: 10px
}
.main_menu_side {
    padding: 0
}.nav.child_menu li li:hover,
.nav.child_menu li li.active {
    background: none
}
.nav.child_menu li li a:hover,
.nav.child_menu li li a.active {
    color: #fff
}
.nav>li>a {
    position: relative;
    display: block;
    padding: 13px 15px 12px
}
.nav.side-menu>li.current-page,
.nav.side-menu>li.active {
    border-right: 5px solid #1ABB9C
}
.main_menu .fa {
    width: 26px;
    opacity: .99;
    display: inline-block;
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}
.fa-home:before {
  content: "\f015";
}
.fa-chevron-down:before {
  content: "\f078";
}
.nav.child_menu {
    display: none
}
.nav.child_menu li:hover,
.nav.child_menu li.active {
    background-color: rgba(255, 255, 255, 0.06)
}
.nav.child_menu li {
    padding-left: 36px
}
.nav-md ul.nav.child_menu li:before {
    background: #425668;
    bottom: auto;
    content: "";
    height: 8px;
    left: 23px;
    margin-top: 15px;
    position: absolute;
    right: auto;
    width: 8px;
    z-index: 1;
    border-radius: 50%
}
.nav-md ul.nav.child_menu li:after {
    border-left: 1px solid #425668;
    bottom: 0;
    content: "";
    left: 27px;
    position: absolute;
    top: 0
}



.sidebar-footer {
    bottom: 0px;
    clear: both;
    display: block;
    padding: 5px 0 0 0;
    position: fixed;
    width: 230px;
    background: #2A3F54;
    z-index:999;
}
.sidebar-footer a {
    padding: 7px 0 3px;
    text-align: center;
    width: 25%;
    font-size: 17px;
    display: block;
    float: left;
    background: #172D44;
    cursor: pointer;
}
.sidebar-footer a:hover {
    background: #425567
}
.bottomImg{
    max-width: 80%;
    opacity: 0.6;
    margin-left: 12px;
    margin-bottom: 20px;
    max-height: 80%;
}*/
</style>