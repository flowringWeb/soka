<script>
    import Steps from "@/components/Steps.vue";
    import Pagination from "@/components/Pagination.vue";
    export default {
        components: {
            Steps,
            Pagination
        },
        data() {
            return {
                //steps
                active: 7,
                //form
                labelPosition: "left",
                report_person_form: {
                    type: "會員資料異動",
                    person: "小名",
                    title:　"會長",
                    date: "2011/03/18",
                    depart: "壯年部",
                    tel: "0912345678",
                    id: "523252525",
                    region: "汐止區",
                    email: "aa@gmail.com",
                },
                report_change_form: {
                    type: "提報/卸任",
                    name: "曉諭",
                    new_depart: "大同之部女子部",
                    date: "2011/04/15",
                    birth: "1989/08/08",
                    new_title: "副會長",
                    option: "意見欄"
                },
                job_status_table: [
                    {
                        job_status_title: "支部女子副部長",
                        job_status_level: "支部",
                        job_status_top: "汐止北本部",
                        job_status_now: "大同支部女子部",
                        job_status_start_date: "2019/09/09",
                        job_status_end_date: "2019/09/09",
                        job_status_status: "提報卸任",
                        job_status_audit: "待審"
                    },
                    {
                        job_status_title: "支部女子副部長",
                        job_status_level: "本部",
                        job_status_top: "汐止北本部",
                        job_status_now: "大同支部女子部",
                        job_status_start_date: "2019/09/09",
                        job_status_end_date: "2019/09/09",
                        job_status_status: "提報卸任",
                        job_status_audit: "待審"
                    },
                ],
                report_table: [
                    {
                        report_table_confidence: "已婚",
                        report_table_challenge: "準備考試",
                        report_table_reason: "原因"
                    },
                    {
                        report_table_confidence: "未婚",
                        report_table_challenge: "準備考試",
                        report_table_reason: "原因"
                    },
                ],
                sign_history_table: [
                    {
                        sign_history_table_person: "xxx",
                        sign_history_table_title: "部長",
                        sign_history_table_time: "2011/04/14",
                        sign_history_table_challenge: "xxx",
                        sign_history_table_option: "ooo",
                        sign_history_table_reason: "ooo"
                    },
                    {
                        sign_history_table_person: "111",
                        sign_history_table_title: "部長",
                        sign_history_table_time: "2011/04/14",
                        sign_history_table_challenge: "xxx",
                        sign_history_table_option: "ooo",
                        sign_history_table_reason: "ooo"
                    },
                ]
            }
        },
        
    }
</script>
<template>
    <div>
        <Steps :active="active"></Steps>
        <div class="title">STEP 8: 組織劃分- 人事任命簽核(FLOW)</div>
        <section class="py-5 px-3">
            <div class="sub-title mb-4">(一)報告人資訊</div>
            <el-row>
                <el-col :span="8">
                    <el-form ref="report_person_form" :inline="true" label-width="auto" size="medium" :label-position="labelPosition">
                        <el-form-item label="報告書類型:">
                            <el-input v-model="report_person_form.type" 
                                clearable
                                :disabled="true">
                            </el-input>
                        </el-form-item>
                            <el-form-item label="報告人:">
                                <el-input v-model="report_person_form.person" 
                                    clearable
                                    :disabled="true">
                                </el-input>
                        </el-form-item>
                            <el-form-item label="職稱:">
                                <el-input v-model="report_person_form.title" 
                                    clearable
                                    :disabled="true">
                                </el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="8">
                    <el-form ref="form" :inline="true" label-width="auto" size="medium" :label-position="labelPosition">
                        <el-form-item label="報告日期:">
                            <el-col :span="11">
                                <el-date-picker
                                    type="date"
                                    placeholder="2021-07-06"
                                    v-model="report_person_form.date"
                                    :disabled="true"
                                ></el-date-picker>
                            </el-col>
                        </el-form-item>
                            <el-form-item label="部別:">
                                <el-input v-model="report_person_form.depart" 
                                    clearable
                                    :disabled="true">
                                </el-input>
                        </el-form-item>
                            <el-form-item label="電話:">
                                <el-input v-model="report_person_form.tel" 
                                    clearable
                                    :disabled="true">
                                </el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="8">
                    <el-form ref="form" :inline="true" label-width="auto" size="medium" :label-position="labelPosition">
                        <el-form-item label="單號:">
                            <el-input v-model="report_person_form.id" 
                                clearable
                                :disabled="true">
                            </el-input>
                        </el-form-item>
                            <el-form-item label="地區:">
                                <el-input v-model="report_person_form.region" 
                                    clearable
                                    :disabled="true">
                                </el-input>
                        </el-form-item>
                            <el-form-item label="Email:">
                                <el-input v-model="report_person_form.email" 
                                    clearable
                                    :disabled="true">
                                </el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
            <div class="sub-title mb-4">(二)提報對象 & 職務異動</div>
            <el-row>
                <el-col :span="8">
                    <el-form ref="report_change_form" :inline="true" label-width="auto" size="medium" :label-position="labelPosition">
                        <el-form-item label="異動類型:">
                            <el-input v-model="report_change_form.type" 
                                clearable
                                :disabled="true">
                            </el-input>
                        </el-form-item>
                            <el-form-item label="姓名:">
                                <el-input v-model="report_change_form.name" 
                                    clearable
                                    :disabled="true">
                                </el-input>
                        </el-form-item>
                        <el-form-item label="新任職單位:">
                                <el-input v-model="report_change_form.new_depart" 
                                    clearable
                                    :disabled="true">
                                </el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="8">
                    <el-form ref="report_change_form" :inline="true" label-width="auto" size="medium" :label-position="labelPosition">
                        <el-form-item label="生效日期:">
                            <el-col :span="11">
                                <el-date-picker
                                    type="date"
                                    placeholder="2021-07-06"
                                    v-model="report_change_form.date"
                                    :disabled="true"
                                ></el-date-picker>
                            </el-col>
                        </el-form-item>
                            <el-form-item label="生日:">
                                <el-col :span="11">
                                    <el-date-picker
                                        type="date"
                                        placeholder="2021-07-06"
                                        v-model="report_change_form.birth"
                                        :disabled="true"
                                    ></el-date-picker>
                                </el-col>
                        </el-form-item>
                        <el-form-item label="新任職稱:">
                                <el-input v-model="report_change_form.new_title" 
                                    clearable
                                    :disabled="true">
                                </el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="8">
                    <el-form>
                        <el-form-item></el-form-item>
                    </el-form>
                    <p>* 提報或卸任的異動,要視登入權限來顯示</p>
                    <p>* 現有的職務則都看的到</p>
                </el-col>
                <el-col :span="24">
                    <div class="d-flex">
                        <div>職務現況(新增)：</div>
                        <el-table :data="job_status_table">
                            <el-table-column prop="job_status_title" label="職務名稱" align="center">
                            </el-table-column>
                            <el-table-column prop="job_status_level" label="層級" align="center">
                            </el-table-column>
                            <el-table-column prop="job_status_top" label="上層單位" align="center">
                            </el-table-column>
                            <el-table-column prop="job_status_now" label="所屬單位" align="center">
                            </el-table-column>
                            <el-table-column prop="job_status_start_date" label="開始日期" align="center">
                            </el-table-column>
                            <el-table-column prop="job_status_end_date" label="結束日期" align="center">
                            </el-table-column>
                            <el-table-column prop="job_status_status" label="職務狀態" align="center">
                            </el-table-column>
                            <el-table-column prop="job_status_audit" label="審核狀態" align="center">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="d-flex">
                        <div>報告：</div>
                            <el-table :data="report_table">
                                <el-table-column prop="report_table_confidence" label="信心狀況" align="center">
                                </el-table-column>
                                <el-table-column prop="report_table_challenge" label="目前挑戰" align="center">
                                </el-table-column>
                                <el-table-column prop="report_table_reason" label="提報原因" align="center">
                                </el-table-column>
                        </el-table>
                    </div>
                    <el-form ref="report_change_form" label-width="auto" size="medium" :label-position="labelPosition">
                        <el-form-item label="簽核人員意見:">
                            <el-input
                                type="textarea"
                                v-model="report_change_form.option"
                                clearable
                                maxlength="150"
                                show-word-limit
                                :autosize="{ minRows: 5, maxRows: 8 }"
                            >
                            </el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="24">
                    <div class="sub-title mb-4">(三)簽核歷程</div>
                    <el-table :data="sign_history_table">
                            <el-table-column prop="sign_history_table_person" label="填寫人" align="center">
                            </el-table-column>
                            <el-table-column prop="sign_history_table_title" label="單位職稱" align="center">
                            </el-table-column>
                            <el-table-column prop="sign_history_table_time" label="簽核時間" align="center">
                            </el-table-column>
                            <el-table-column prop="sign_history_table_challenge" label="流程關卡" align="center">
                            </el-table-column>
                            <el-table-column prop="sign_history_table_option" label="流程選項" align="center">
                            </el-table-column>
                            <el-table-column prop="sign_history_table_reason" label="原因或說明" align="center">
                            </el-table-column>
                        </el-table>
                    <Pagination></Pagination>
                    <div class="d-flex justify-content-center mt-5">
                        <el-button type="primary">同意</el-button>
                        <el-button type="primary">不同意</el-button>
                    </div>
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
.sub-title {
    padding: 0.5rem 0;
    color: #FFF;
    background-color: #000;
}
</style>