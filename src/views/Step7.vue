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
                labelPosition: "left",
                form: {
                    orgName: "青山地區重劃案",
                    date1: "2021/04",
                    codeName: "3334-0844",
                    date2: "2019/09",
                    time: "2021/03/01 08:00",
                    depart: "女子部",
                    unit: ""
                },
                district_options: [
                    {
                        value: "女子部",
                        label: "女子部",
                    },
                    {
                        value: "婦女部",
                        label: "婦女部",
                    },
                ],
                name_options: [
                    {
                        value: "王曉明",
                        label: "王曉明",
                    },
                    {
                        value: "林曉玉",
                        label: "林曉玉",
                    },
                ],
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
                    <el-form ref="form" :inline="true" label-width="auto" size="medium" :label-position="labelPosition">
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
                    <el-form ref="form" :inline="true" label-width="auto" size="medium" :label-position="labelPosition">
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
                    <el-form ref="form" :inline="true" label-width="auto" size="medium" :label-position="labelPosition">
                        <el-form-item label="開始時間:">
                            <el-input v-model="form.time" 
                                clearable
                                :disabled="true">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="部別:">
                            <el-col :span="11">
                                <el-date-picker
                                type="date"
                                placeholder="請選擇日期"
                                v-model="form.depart"
                                :disabled="true"
                                ></el-date-picker>
                            </el-col>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
        </section>
        <section>
            <el-row>
                <el-col :span="11">
                    <section class="archiTree">
                        <div class="sub-title mb-4">(一)組織圖(選擇節點)</div>
                        <div>
                            <el-form ref="form" :inline="true">
                                <el-form-item label="單位:">
                                    <el-select
                                        v-model="form.district"
                                        placeholder="請選擇"
                                    >
                                        <el-option
                                        v-for="item in district_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                        >
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="姓名:">
                                <el-select
                                    v-model="form.name"
                                    placeholder="請選擇"
                                >
                                    <el-option
                                    v-for="item in name_options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                    >
                                    </el-option>
                                </el-select>
                                </el-form-item>
                            </el-form>
                        </div>
                    </section>
                </el-col>
                <el-col :span="12">

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
.archiTree {
    &__tree {
        height: 50vh;
        overflow-y: auto;
        padding: 0.5rem 0;
        border: 1px solid #000;
    }
    &__option {
        display: flex;
        justify-content: center;
    }
}
</style>