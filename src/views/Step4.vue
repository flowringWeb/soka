<script>
    import Steps from "@/components/Steps.vue";
    export default {
        components: {
            Steps,
        },
        data() {
            return {
                //steps
                active: 3,

                //form 表單
                labelPosition: "left",
                form4: {
                    resource: '',
                    note: ''
                },
                tableData: [
                    {
                        id: 1111,
                        name: "許XX",
                        job: "正長",
                        depart_class: "壯年部",
                        sign_date: "2016-19-10",
                        sign_time: "16:40:30",
                        sign_detail: "1天00時00分00秒",
                        audit_result: "同意",
                        audit_option: "未填寫",
                        type: "primary"
                    },
                    {
                        id: 2222,
                        name: "許XX",
                        job: "正長",
                        depart_class: "婦女部",
                        sign_date: "2016-19-10",
                        sign_time: "16:40:30",
                        sign_detail: "1天00時00分00秒",
                        audit_result: "同意",
                        audit_option: "未填寫",
                        type: "primary"
                    },
                ]

            }
        }
    }
</script>
<template>
    <div>
        <Steps :active="active"></Steps>
        <div class="title">STEP 4: 組織劃分- 組織&人員異動 進行內部審核</div>
        <div class="wrapper">
            <div>組織架構確認</div>
            <el-row type="flex" justify="space-around" align="middle">
                <el-col :span="18">
                    <el-form ref="form4" :inline="true" label-width="auto" :label-position="labelPosition">
                        <el-form-item label="四部內部審核:">
                                <el-radio-group v-model="form4.resource">
                                    <div>
                                        <el-radio label="同意"></el-radio>
                                    </div>
                                    <div class="my-3">
                                        <el-radio label="不同意"></el-radio>
                                    </div>
                                    <div class="my-3">
                                        <el-radio label="沒有意見"></el-radio>
                                    </div>
                                </el-radio-group>
                        </el-form-item>
                        <el-form-item label="">
                            <el-input
                                type="textarea"
                                v-model="form4.note"
                                clearable
                                maxlength="150"
                                show-word-limit
                                :autosize="{ minRows: 5, maxRows: 8 }"
                            ></el-input>
                        </el-form-item>
                        <el-button type="primary">送出</el-button>
                    </el-form>
                </el-col>
                <el-col :span="6">
                    <div class="mb-3">
                        <el-button type="success">瀏覽劃分前後組織樹</el-button>
                    </div>
                    <div class="mb-3">
                        <el-button type="success">瀏覽劃分前後人數統計表</el-button>
                    </div>
                    <div class="mb-3">
                        <el-button type="success">瀏覽劃分前後地圖</el-button>
                    </div>
                </el-col>
            </el-row>
            <el-row class="mb-3">
                <el-col :span="18">
                    <el-table :data="tableData"  :header-cell-style="{ background: '#eee' }">
                        <el-table-column prop="id" label="編號" align="center">
                        </el-table-column>
                        <el-table-column prop="name" label="姓名" align="center">
                        </el-table-column>
                        <el-table-column prop="job" label="職務" align="center">
                        </el-table-column>
                        <el-table-column prop="depart_class" label="部別" align="center">
                        </el-table-column>
                        <el-table-column prop="sign_date" label="簽核時間/處理時間" align="center" width="150">
                            <template slot-scope="scope">
                                <div>{{ scope.row.sign_date}}</div>
                                <div>{{ scope.row.sign_time}}</div>
                                <div>{{ scope.row.sign_detail}}</div>
                            </template>
                        </el-table-column>
                        <el-table-column prop="audit_result" label="內部審核結果" align="center">
                        </el-table-column>
                        <el-table-column prop="audit_option" label="內部審核意見" align="center">
                        </el-table-column>
                        <el-table-column prop="revise_btn" label="修改" align="center">
                            <template slot-scope="scope">
                                <el-button
                                :type="scope.row.type"
                                size="small"
                                >修改</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-row type="flex" justify="center">
                        <el-button type="primary">送審</el-button>
                    </el-row>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .wrapper {
        padding: 3rem 1rem;
    }
    .title {
        text-align: center;
        color: #fff;
        background-color: #409af2;
        padding: 1rem;
    }
    .el-radio-group {
        vertical-align: text-top;
    }
</style>