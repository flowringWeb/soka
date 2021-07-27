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
                }
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
                        <el-button type="success" round>瀏覽劃分前後組織樹</el-button>
                    </div>
                    <div class="mb-3">
                        <el-button type="success" round>瀏覽劃分前後人數統計表</el-button>
                    </div>
                    <div class="mb-3">
                        <el-button type="success" round>瀏覽劃分前後地圖</el-button>
                    </div>
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