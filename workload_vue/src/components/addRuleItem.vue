<template>
    <div id="pop">
        <div id="box">
         <div id="boxTop">
            <span>规则信息</span>
            <button id='close' @click="closeBox">关闭</button>
        </div>

        <div>
            <p><label for="name">规则名称* </label><input id="name" v-model="name"></p>
            <p><label for="intro">规则简介* </label><input id="intro" v-model="intro"></p>
            <p>规则类别* 
            <select v-model="selected">
                <option>无特殊类别</option>
                <option>导入复核类</option>
                <option>申报审核类</option>
            </select>
            </p>
            <p><label for="fatherRule">父级规则* </label><input id="name" v-model="fatherRule"></p>
        </div>

        <div>
            <button @click="closeBox">取消</button>
            <button @click="saveItem">保存</button>
        </div> 
    </div>
    </div>
    
</template>


<script>
export default {
    name: 'addRuleItem',
    data () {
        return {
            name: '',
            intro: '',
            selected: '无特殊类别',
            fatherRule: ''
            // screenWidth: document.body.clientWidth
        }
    },
    // watch: {
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
    //         }
    //     },
    methods: {
        closeBox: function () {
            this.$emit('closeBox')
        },
        saveItem: function () {
            var data = {name: this.name, intro: this.intro, selected: this.selected, fatherRule: this.fatherRule};
            // alert(data.name),
            this.$emit('saveItem', data)
        }
        
    // },
    // mounted () {
    //     const that = this
    //     window.onresize = () => {
    //         return (() => {
    //             window.screenWidth = document.body.clientWidth
    //             this.screenWidth = window.screenWidth
    //         })()
    //     }
    // }
  
}
}
</script>

<style type="text/css">
#box{ 
    position:fixed;
    z-index:1001;
}
</style>