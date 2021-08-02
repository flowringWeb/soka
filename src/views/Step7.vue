<script>
    import Steps from "@/components/Steps.vue";
    export default {
        components: {
            Steps,
        },
        data() {
            return {
                //steps
                active: 6,
                //from
                form: {
                    orgName: "青山地區重劃案",
                    date1: "2021/04",
                    codeName: "3334-0844",
                    date2: "2019/09"

                }
            }
        },
        methods: {

        }
        
    }
</script>
<template>
    <div>
        <Steps :active="active"></Steps>
        <div class="title">STEP 7: 組織劃分- 人事任命作業</div>
        <section class="py-5 px-3">
            <el-row>
                <el-col :span="8">
                    <el-form ref="form" :inline="true">
                        <el-form-item label="組織劃分案名:">
                            <el-input v-model="form.orgName" 
                                clearable
                                :disabled="true">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="建議生效月:">
                            <el-col :span="11">
                                <el-date-picker
                                type="date"
                                placeholder="請選擇日期"
                                v-model="form.date1"
                                :disabled="true"
                                ></el-date-picker>
                            </el-col>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="8">
                    <el-form ref="form" :inline="true">
                        <el-form-item label="組織劃分代號:">
                            <el-input v-model="form.codeName" 
                                clearable
                                :disabled="true">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="全區會:">
                            <el-col :span="11">
                                <el-date-picker
                                type="date"
                                placeholder="請選擇日期"
                                v-model="form.date2"
                                :disabled="true"
                                ></el-date-picker>
                            </el-col>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="8">

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