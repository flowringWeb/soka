<script>
    import Steps from "@/components/Steps.vue";
    export default {
        components: {
            Steps,
        },
        data() {
            return {
                //steps
                active: 4,
                //form
                labelPosition: "left",
                form5: {
                    type: "",
                    person: "王xx",
                    job: "分區部長",
                    date1: "",
                    depart: "婦女部",
                    tel: "2211-1111",
                    no: 1212,
                    district: "汐止區",
                    email: "xxx@gmail.com",
                    case_name: "青山地區重劃案",
                    codeName: 1212,
                    date2: "2021-10-12",
                    note: "xxxxxxx",
                    state: "說明"
                },
                options: [
                    {
                        value: "組織劃分",
                        label: "組織劃分",
                    },
                    {
                        value: "組織分佈",
                        label: "組織分佈",
                    },
                ],
            }
        }
    }
</script>
<template>
    <div>
        <Steps :active="active"></Steps>
        <div class="title">STEP 5: 組織劃分- 呈核報告書(進 FLOW前)</div>
        <section class="py-5 px-3">
            <div>報告人資訊</div>
            <el-row :gutter="10" type="flex">
                <el-col :span="8"> 
                    <el-form ref="form5" :inline="true" label-width="auto" size="medium" :label-position="labelPosition">
                        <el-form-item label="報告書類型:">
                            <el-select
                                v-model="form5.type"
                                placeholder="請選擇"
                            >
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="報告人:">
                        <el-input v-model="form5.person" 
                                clearable
                                :disabled="true">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="職稱:">
                            <el-input v-model="form5.job" 
                                clearable
                                :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="8"> 
                    <el-form ref="form5" :inline="true" label-width="auto" size="medium" :label-position="labelPosition">
                        <el-form-item label="報告日期:">
                            <el-col :span="11">
                                <el-date-picker
                                    type="date"
                                    placeholder="2021-07-06"
                                    v-model="form5.date1"
                                    :disabled="true"
                                ></el-date-picker>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="部別:">
                            <el-input v-model="form5.depart" 
                                clearable
                                :disabled="true">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="電話:">
                            <el-input v-model="form5.tel" 
                                clearable
                                :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="8"> 
                    <el-form ref="form5" :inline="true" label-width="auto" size="medium" :label-position="labelPosition">
                        <el-form-item label="單號:">
                            <el-input v-model="form5.no" 
                                clearable
                                :disabled="true">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="地區:">
                            <el-input v-model="form5.district" 
                                clearable
                                :disabled="true">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="Email:">
                            <el-input v-model="form5.email" 
                                clearable
                                :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
            <div>提報內容</div>
            <el-row :gutter="10" type="flex">
                <el-col :span="8">
                    <el-form ref="form5" :inline="true" label-width="auto" size="medium" :label-position="labelPosition">
                        <el-form-item label="組織劃分案名:">
                            <el-input v-model="form5.case_name" 
                                clearable
                                :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="8">
                    <el-form ref="form5" :inline="true" label-width="auto" size="medium" :label-position="labelPosition">
                        <el-form-item label="組織劃分代號:">
                            <el-input v-model="form5.codeName" 
                                clearable
                                :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="8">
                    <el-form ref="form5" :inline="true" label-width="auto" size="medium" :label-position="labelPosition">
                        <el-form-item label="建議生肖月:">
                            <el-input v-model="form5.date2" 
                                clearable
                                :disabled="true">
                            </el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="18">
                    <el-form ref="form5" label-width="auto" size="medium" :label-position="labelPosition">
                        <el-form-item label="備註:">
                            <el-input
                                type="textarea"
                                v-model="form5.note"
                                clearable
                                maxlength="150"
                                show-word-limit
                                :autosize="{ minRows: 6, maxRows: 12 }"
                            ></el-input>
                        </el-form-item>
                    </el-form>
                    <el-form label-width="auto" size="medium" :label-position="labelPosition">
                        <el-form-item label="組織劃分案說明:">
                            <el-input
                                type="textarea"
                                v-model="form5.state"
                                clearable
                                maxlength="150"
                                show-word-limit
                                :autosize="{ minRows: 6, maxRows: 12 }"
                            ></el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="18">

                </el-col>
            </el-row>
        </section>
    </div>
</template>
<style lang="scss" scoped>
.title {
    text-align: center;
    color: #fff;
    background-color: #409af2;
    padding: 1rem;
}
</style>