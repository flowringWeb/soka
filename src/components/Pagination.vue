<script>
export default {
    data() {
        return {
            //pagination
            pageObj: {
                startPage: 0,
                endPage: 0,
                pageLength: 5,
                pageSize: 5,
                currentPage: 1,
            },
            tableData3Source: [
                {
                    check: "",
                    depart: "壯年部",
                    org: "汐止區/青山地區",
                    name: "周oo",
                    job: "地區綜合長",
                    id: 1,
                    type: "success",
                    icon: "el-icon-check",
                },
                {
                    check: "",
                    depart: "青年部",
                    org: "汐止區/青山地區",
                    name: "莫xx",
                    job: "地區部長",
                    id: 2,
                    type: "danger",
                    icon: "el-icon-delete",
                },
                {
                    check: "",
                    depart: "壯年部",
                    org: "汐止區/青山地區",
                    name: "周oo",
                    job: "地區綜合長",
                    id: 3,
                    type: "success",
                    icon: "el-icon-check",
                },
                {
                    check: "",
                    depart: "青年部",
                    org: "汐止區/青山地區",
                    name: "莫xx",
                    job: "地區部長",
                    id: 4,
                    type: "danger",
                    icon: "el-icon-delete",
                },
                {
                    check: "",
                    depart: "壯年部",
                    org: "汐止區/青山地區",
                    name: "周oo",
                    job: "地區綜合長",
                    id: 5,
                    type: "success",
                    icon: "el-icon-check",
                },
            ],
            tableData3: [],
        }
    },
    methods: {
        //pagination 分頁 size
        // handleSizeChange(val) {
        //   console.log(val);
        //   this.pageObj.pageSize = val;
        //   this.pageObj.currentPage = 1;
        //   this.bindingData();
        // },
        handleCurrentChange(val) {
            let totalLength = this.tableData3Source.length;
            let lastPage = parseInt(totalLength/this.pageObj.pageSize) + 1;
            let lastPageCount = Number(totalLength%this.pageObj.pageSize);
            if ( val == lastPage) {
                console.log('點選到最後一頁');
                this.pageObj.pageLength = lastPageCount;
            } else {
                this.pageObj.pageLength = this.pageObj.pageSize;
            }
            this.pageObj.currentPage = val;
            this.bindingData();
        },
        bindingData() {
            let startIndex = (this.pageObj.currentPage - 1) * this.pageObj.pageSize;
            this.tableData3 = this.tableData3Source.slice(
                startIndex,
                startIndex + this.pageObj.pageSize
            );
            let totalLength = this.tableData3Source.length;
            let lastPage = parseInt(totalLength/this.pageObj.pageSize) + 1;
            let lastPageCount = Number(totalLength%this.pageObj.pageSize);

            this.pageObj.startPage = startIndex + 1;
            if (this.pageObj.currentPage == lastPage ) {
                this.pageObj.endPage = startIndex + lastPageCount;
            } else {
                this.pageObj.endPage = startIndex + this.pageObj.pageSize;
            }
        },
    },
    mounted: function() {
        this.bindingData();
    }
}
</script>
<template lang="">
    <div class="pagination">
        <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="pageObj.currentPage"
            :page-size="pageObj.pageSize"
            layout="prev, pager, next"
            :total="tableData3Source.length"
        >
        </el-pagination>
        <div>{{ pageObj.pageSize }} 筆數 / 頁</div>
        <div>
            目前顯示第{{ pageObj.startPage }}~ {{ pageObj.endPage }}筆，共
            {{ pageObj.pageLength }} 筆
        </div>
    </div>
</template>
<style lang="scss">
    .pagination {
        padding: 0 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #ccc;
    }
</style>