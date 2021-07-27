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
                form5: {

                }
            }
        }
    }
</script>
<template>
    <div>
        <Steps :active="active"></Steps>
        <div class="title">STEP 5: 組織劃分- 呈核報告書(進 FLOW前)</div>
        <section>
            <div>報告人資訊</div>
            <el-row>
                <el-col :span="8"> 
                    <el-form ref="form5">
                        <el-form-item label="報告書類型:">

                        </el-form-item>
                        <el-form-item label="報告人:">

                        </el-form-item>
                        <el-form-item label="職稱:">

                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="8"> 
                    <el-form ref="form5">
                        <el-form-item label="報告日期:">

                        </el-form-item>
                        <el-form-item label="部別:">

                        </el-form-item>
                        <el-form-item label="電話:">

                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="8"> 
                    <el-form ref="form5">
                        <el-form-item label="單號:">

                        </el-form-item>
                        <el-form-item label="地區:">

                        </el-form-item>
                        <el-form-item label="Email:">

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
</style>