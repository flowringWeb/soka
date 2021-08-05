<script>
    import Steps from "@/components/Steps.vue";
    export default {
        components: {
            Steps,
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
                    new_title: "副會長"
                }
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