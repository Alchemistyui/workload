<template>
    <div>
        <div id="boxTop">
            <span>规则信息</span>
            <span id='close'>关闭</span>
        </div>

        <div>
            <p><label for="name">规则名称* </label><input id="name" v-model="name"></p>
            <p><label for="intro">规则简介* </label><input id="intro" v-model="name"></p>
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
            <button>取消</button>
            <button>保存</button>
        </div>
    </div>
</template>


<script>
export default {
    data () {
        return {
            name: '',
            intro: '',
            selected: '无特殊类别',
            fatherRule: ''
        }
    }
}
</script>