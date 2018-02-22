<!-- 表格分页组件 -->
<template>
    <nav class="boot-nav">
        <ul class="pagination boot-page">
            <li>
                <a href="javascript:void(0)" aria-label="Previous" @click="onFirstClick()">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li>
                <a href="javascript:void(0)" aria-label="Next" @click="onPrevClick()">
                    <span aria-hidden="true">‹</span>
                </a>
            </li>
            <li v-for="page in pages" :class="activeNum === $index ? 'active' : ''">
                <a href="javascript:void(0)" v-text="page" @click="onPageClick($index)"></a>
            </li>
            <li>
                <a href="javascript:void(0)" aria-label="Next" @click="onNextClick()">
                    <span aria-hidden="true">›</span>
                </a>
            </li>
            <li>
                <a href="javascript:void(0)" aria-label="Next" @click="onLastClick()">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
        <div class="page-total">
            共 <span v-text="pageTotal"></span> 页
        </div>
    </nav>
    <select class="form-control boot-select" v-model="len">
        <option v-for="arr in lens" :value="arr" v-text="arr" :selected="$index === 0 ? true : false"></option>
    </select>
</template>

<script>
export default {
    props: {
<<<<<<< HEAD
=======

>>>>>>> origin/master
        // 页码
        pages: {
            type: Array,
            default: function () {
                return [1]
            }
        },
<<<<<<< HEAD
=======

>>>>>>> origin/master
        // 是否请求服务器端数据
        async: {
            type: Boolean,
            default: false
        },
<<<<<<< HEAD
=======

>>>>>>> origin/master
        // 每页显示个数
        len: {
            type: Number,
            default: 10
        },
<<<<<<< HEAD
=======

>>>>>>> origin/master
        // 显示个数数组
        lens: {
            type: Array,
            default: function () {
                return [10, 50, 100]
            }
        },
<<<<<<< HEAD
=======

>>>>>>> origin/master
        // 表格数据（数组）
        data: {
            type: Array,
            default: function () {
                return []
            }
        },
<<<<<<< HEAD
=======

>>>>>>> origin/master
        // AJAX地址
        url: {
            type: String,
            default: ''
        },
<<<<<<< HEAD
=======

>>>>>>> origin/master
        // 显示页数
        pageLen: {
            type: Number,
            default: 5
        },
<<<<<<< HEAD
=======

>>>>>>> origin/master
        // 总页数 
        pageTotal: {
            type: Number,
            default: 1
        },
<<<<<<< HEAD
=======

>>>>>>> origin/master
        // 参数内容
        param: {
            type: Object,
            default: function () {
                return {}
            }
        }
    },
    data () {
        return {
            activeNum: 0
        }
    },
    methods: {
<<<<<<< HEAD
=======

>>>>>>> origin/master
        // 点击页码刷新数据
        onPageClick (index) {
            this.activeNum = index
        },
<<<<<<< HEAD
        // 上一页
        onPrevClick () {
=======

        // 上一页
        onPrevClick () {

>>>>>>> origin/master
            // 当前页是否为当前最小页码
            if (this.activeNum > 0) {
                this.activeNum = this.activeNum - 1
            } else {
                if (this.pages[0] !== 1) {
                    let newPages = []
<<<<<<< HEAD
                    for (let i = 0; i < this.pages.length; i++) {
                        newPages[i] = this.pages[i] - 1
                    }
=======

                    for (let i = 0; i < this.pages.length; i++) {
                        newPages[i] = this.pages[i] - 1
                    }

>>>>>>> origin/master
                    this.pages = newPages
                    this.getData()
                }
            }
        },
<<<<<<< HEAD
        // 下一页
        onNextClick () {
=======

        // 下一页
        onNextClick () {

>>>>>>> origin/master
            // 当前页是否为当前最大页码
            if (this.activeNum < this.pages.length - 1) {
                this.activeNum = this.activeNum + 1
            } else {
                if (this.pages[this.pages.length - 1] < this.pageTotal) {
                    let newPages = []
<<<<<<< HEAD
                    for (let i = 0; i < this.pages.length; i++) {
                        newPages[i] = this.pages[i] + 1
                    }
                    this.pages = newPages
=======

                    for (let i = 0; i < this.pages.length; i++) {
                        newPages[i] = this.pages[i] + 1
                    }

                    this.pages = newPages

>>>>>>> origin/master
                    this.getData()
                }
            }
        },
<<<<<<< HEAD
=======

>>>>>>> origin/master
        // 第一页
        onFirstClick () {
            if (this.pages[0] === 1) {
                this.activeNum = 0
            } else {
                let originPage = []
<<<<<<< HEAD
                for (let i = 1; i <= this.pageLen; i++) {
                    originPage.push(i)
                }
=======

                for (let i = 1; i <= this.pageLen; i++) {
                    originPage.push(i)
                }

>>>>>>> origin/master
                this.pages = originPage
                this.activeNum === 0 ? this.getData() : this.activeNum = 0
            }
        },
<<<<<<< HEAD
=======

>>>>>>> origin/master
        // 最后一页
        onLastClick () {
            if (this.pageTotal <= this.pageLen) {
                this.activeNum = this.pages.length - 1
            } else {
                let lastPage = []
<<<<<<< HEAD
                for (let i = this.pageLen - 1; i >= 0; i--) {
                    lastPage.push(this.pageTotal - i)
                }
=======

                for (let i = this.pageLen - 1; i >= 0; i--) {
                    lastPage.push(this.pageTotal - i)
                }

>>>>>>> origin/master
                this.pages = lastPage
                this.activeNum === this.pages.length - 1 ? this.getData() : this.activeNum = this.pages.length - 1
            }
        },
<<<<<<< HEAD
        // 获取页码
        getPages () {
            this.pages = []
            if (!this.async) {
                this.pageTotal = Math.ceil(this.data.length / this.len)
            }
=======

        // 获取页码
        getPages () {
            this.pages = []

            if (!this.async) {
                this.pageTotal = Math.ceil(this.data.length / this.len)
            }

>>>>>>> origin/master
            // 比较总页码和显示页数
            if (this.pageTotal <= this.pageLen) {
                for (let i = 1; i <= this.pageTotal; i++) {
                    this.pages.push(i)
                }
            } else {
                for (let i = 1; i <= this.pageLen; i++) {
                    this.pages.push(i)
                }
            }
        },
<<<<<<< HEAD
=======

>>>>>>> origin/master
        // 页码变化获取数据
        getData () {
            if (!this.async) {
                let len = this.len,
<<<<<<< HEAD
                    pageNum = this.pages[this.activeNum] - 1,
                    newData = [];
=======
                pageNum = this.pages[this.activeNum] - 1,
                newData = [];

>>>>>>> origin/master
                for (let i = pageNum * len; i < (pageNum * len + len); i++) {
                    this.data[i] !== undefined ? newData.push(this.data[i]) : ''
                }
                
                this.$dispatch('data', newData)
            } else {
                this.param.active = this.pages[this.activeNum]
                this.param.len = this.len
<<<<<<< HEAD
=======

>>>>>>> origin/master
                this.$http({
                    url: this.url, 
                    method: 'POST',
                    data: this.param
                })
                .then(function (response) {
                    this.pageTotal = response.data.page_num
<<<<<<< HEAD
                    if (this.pages.length !== this.pageLen || this.pageTotal < this.pageLen) {
                        this.getPages()
                    }
                    if (!response.data.data.length) {
                        this.activeNum = this.pageTotal - 1
                    }
=======

                    if (this.pages.length !== this.pageLen || this.pageTotal < this.pageLen) {
                        this.getPages()
                    }

                    if (!response.data.data.length) {
                        this.activeNum = this.pageTotal - 1
                    }

>>>>>>> origin/master
                    this.$dispatch('data', response.data.data)
                })
            }
        },
<<<<<<< HEAD
=======

>>>>>>> origin/master
        // 刷新表格
        refresh () {
            this.getData()
        },
<<<<<<< HEAD
        // 重置并刷新表格
        refresh2 () {
            this.pages = [1]
                        
=======

        // 重置并刷新表格
        refresh2 () {
            this.pages = [1]
            
>>>>>>> origin/master
            this.activeNum === 0 ? this.getData() : this.activeNum = 0
        }
    },
    ready () {
        if (!this.async) {
            this.getPages()
        } 
<<<<<<< HEAD
        this.getData()
    },
    watch: {
=======

        this.getData()
    },
    watch: {

>>>>>>> origin/master
        // 监听显示数量
        'len' (newVal, oldVal) {
            if (!this.async) {
                this.getPages()
<<<<<<< HEAD
                if (this.activeNum + 1 > this.pages.length) {
                    this.activeNum = this.pages.length - 1
                }
=======

                if (this.activeNum + 1 > this.pages.length) {
                    this.activeNum = this.pages.length - 1
                }

>>>>>>> origin/master
                this.getData()
            } else {
                this.refresh2()
            }
        },
<<<<<<< HEAD
=======

>>>>>>> origin/master
        // 监测当前页变化
        'activeNum' (newVal, oldVal) {
            this.getData()
        }
    },
    events: {
        'refresh::page' () {
            this.refresh()
        }
    }
}
</script>

<style scoped>
.boot-select {
    float: right;
    width: 80px;
}
<<<<<<< HEAD
.boot-nav {
    float: right;
}
=======

.boot-nav {
    float: right;
}

>>>>>>> origin/master
.boot-page {
    display: inline-block;
    margin: 2px 10px 0 20px;
    vertical-align: middle;
}
<<<<<<< HEAD
=======

>>>>>>> origin/master
.page-total {
    display: inline-block;
    vertical-align: middle;
}
</style>