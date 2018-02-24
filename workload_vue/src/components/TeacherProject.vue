<template>
    <div>
        <select v-model="selectState" id="state">
            <option disabled value="">项目状态</option>
            <option v-for="state in states">{{state.text}}</option>
        </select>
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
        ]
    }
  }
}
</script>