<script>
    import Steps from "@/components/Steps.vue";
    import ExportExcel from "@/components/ExportExcel.vue";
    export default {
        components: {
            Steps,
            ExportExcel
        },
        data() {
            return {
                //steps
                currentStep: 2,

                //form 表單
                labelPosition: "left",
                form3: {
                    orgName: "專案",
                    orgnNo: 123,
                    date1: "",
                    dct: "",
                    depart: [],
                    orgPerson: "",
                    date2: "",
                    state: "",
                    note: "",
                    editCount: "",
                    codeName: "3334-0844",
                    editingPerson: "Andy",
                    preLevel: "青山地區",
                    progress: "",
                    version: 3
                },
                //開啟地圖附件
                dialogMapVisible: false
            }
        },
        methods: {

        }
    }
</script>
<template>
    <div>
        <Steps :currentStep="currentStep"></Steps>
        <div class="title">STEP 3: 組織劃分- 人員異動</div>

        <div class="stepForm">
            <el-row :gutter="10" type="flex">
                <el-col :span="8">
                    <el-form
                        ref="form3"
                        :model="form3"
                        :inline="true"
                        label-width="auto"
                        size="medium"
                        :label-position="labelPosition"
                    >
                        <el-form-item label="組織劃分案名:">
                            <el-input v-model="form3.orgName"
                                type="text"
                                maxlength="20"
                                clearable
                                :disabled="true"
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="組織劃分案說明:">
                            <el-input
                                type="textarea"
                                v-model="form3.state"
                                clearable
                                maxlength="150"
                                show-word-limit
                                :autosize="{ minRows: 5, maxRows: 8 }"
                            >
                            </el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="8">
                    <el-form ref="form3" :model="form3" :inline="true" label-width="auto">
                        <el-form-item label="組織劃分代號:">
                            <el-input type="text" v-model="form3.codeName" :disabled="true">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="備註:">
                            <el-input
                                type="textarea"
                                v-model="form3.note"
                                clearable
                                maxlength="150"
                                show-word-limit
                                :autosize="{ minRows: 5, maxRows: 8 }"
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="劃分前後地圖附件:">
                            <div class="attachItem">
                                <img @click="dialogMapVisible = true" class="mr-4" src="https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500" width="100" alt="劃分前後地圖附件">
                                <div class="attachItem__dnpdf mr-4"> 2. PDF 下載</div>
                                <el-button type="primary" round>瀏覽</el-button>
                            </div>
                        </el-form-item>
                </el-form>
                </el-col>
                <el-col :span="8">
                    <el-form ref="form3" :model="form3" :inline="true" label-width="auto">
                        <el-form-item label="劃分建議生效月:">
                        <el-col :span="11">
                            <el-date-picker
                                type="date"
                                placeholder="2021-07-06"
                                v-model="form3.date1"
                                :disabled="true"
                            ></el-date-picker>
                        </el-col>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
        </div>

        <!-- 地圖 dialog -->
        <el-dialog
            :visible.sync="dialogMapVisible"
            width="40%"
            >
            <div slot="">
                <img src="https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500" width="100%" alt="劃分前後地圖附件">
            </div>
        </el-dialog>
        <!-- <ExportExcel></ExportExcel> -->
    </div>
</template>
<style lang="scss" scoped>
    .title {
        text-align: center;
        color: #fff;
        background-color: #409af2;
        padding: 1rem;
    }
    .stepForm {
        padding: 3rem 1rem;
    }
    .attachItem {
        display: inline-flex;
        align-items: center;
        img {
            cursor: pointer;
        }
        &__dnpdf {
            cursor: pointer;
        }
    }
</style>