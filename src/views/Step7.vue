<script>
    import Steps from "@/components/Steps.vue";
    import Pagination from "@/components/Pagination.vue";
    export default {
        components: {
            Steps,
            Pagination,
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
                    unit: "",
                    name: "",
                    order: "組織單位 + 職務名稱"
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
                //element UI tree
                data: [
                    {
                    label: '汐止區女子部',
                    children: [
                        {
                            label: '區女子部長',
                            children: [{
                                label: 'aa'
                                }]
                        },
                        {
                            label: '汐止北本部女子部',
                            children: [
                                {
                                    label: '本部女子部長',
                                    children: [{
                                        label: 'bb'
                                    }]
                                },
                                {
                                    label: '大同支部女子部',
                                    children: [{
                                        label: '支部女子部長'
                                    }]
                                },
                                {
                                    label: '新台支部女子部',
                                    children: [
                                        {
                                            label: '支部女子部長'
                                        },
                                        {
                                            label: '白雲地區女子部'
                                        },
                                        {
                                            label: '青山地區女子部',
                                            children: [
                                                {
                                                    label: '地區女子部長',
                                                },
                                                {
                                                    label: '勝利組',
                                                    children: [
                                                        {
                                                            label: '組長',
                                                        },
                                                        {
                                                            label: '組員'
                                                        }
                                                    ]
                                                },
                                                {
                                                    label: '吉祥組',
                                                    children: [
                                                        {
                                                            label: '組長',
                                                        },
                                                        {
                                                            label: '組員'
                                                        }
                                                    ]
                                                },
                                            ]
                                        },
                                    ]
                                }
                            ]
                        }]
                    }, 
                ],
                tableData_report: [
                    {
                        report_unit: "大同支部女子部",
                        report_title: "支部女子部長",
                        report_member: "王曉明",
                        report_startDate: "2014/04/13",
                        report_endDate: "2014/04/13",
                        step_down_reason: "出國",
                        confidence_state: "很有信心",
                        challenge_now: "挑戰成功"
                    },
                    {
                        report_unit: "大同支部女子部",
                        report_title: "支部女子部長",
                        report_member: "林曉諭",
                        report_startDate: "2014/04/13",
                        report_endDate: "2014/04/13",
                        step_down_reason: "不適任",
                        confidence_state: "很有信心",
                        challenge_now: "挑戰成功"
                    },
                ],
                checkList: ["自己提的"],
                checkList2: ["總和", "圈", "區"],
                multipleSelection: [],
                affair_data: [
                    {
                        affair_mem_id: 12414,
                        affair_mem_name: "王曉明",
                        affair_job_title: "副本部長",
                        affair_level: "支部",
                        affair_depart: "大同支部女子部",
                        affair_job_status: "卸任",
                        affair_set_person: "汐止區長",
                        affair_maintain_person: "基北圈圈長"
                    },
                    {
                        affair_mem_id: 3525,
                        affair_mem_name: "林曉諭",
                        affair_job_title: "副本部長",
                        affair_level: "支部",
                        affair_depart: "大同支部男子部",
                        affair_job_status: "卸任",
                        affair_set_person: "汐止區長",
                        affair_maintain_person: "基北圈圈長"
                    }
                ],
            }
        },
        methods: {
            //嘗試改 expand 外觀
            // getRowKeys(row) {
            //     console.log(row.children);
            // }
            //人事輸入清單
            handleSelectionChange(val) {
                this.multipleSelection = val;
            }
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
            <el-row type="flex" justify="space-around">
                <el-col :span="10">
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
                            <el-tree
                                class="archiTree__tree"
                                :data="data"
                                node-key="id"
                                default-expand-all
                                draggable
                            >
                            </el-tree>
                        </div>
                    </section>
                </el-col>
                <el-col :span="13">
                    <section>
                        <div class="sub-title mb-4">(二)職務提報&解除</div>
                        <div class="d-flex">
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
                            </el-form>
                            <div>
                                <el-button type="primary">單位查職務</el-button>
                            </div>
                        </div>
                        <div class="mb-4">
                            <div class="d-flex justify-content-between px-3">
                                <div>單位職務清單</div>
                                <div>組織單位: 大同支部女子部</div>
                            </div>
                            <el-table :data="tableData_report"  :header-cell-style="{ background: '#eee' }">
                                <el-table-column prop="report_unit" label="單位" align="center">
                                </el-table-column>
                                <el-table-column prop="report_title" label="職務名稱" align="center">
                                </el-table-column>
                                <el-table-column prop="report_member" label="會員名稱" align="center">
                                </el-table-column>
                                <el-table-column prop="report_startDate" label="開始日期" align="center">
                                </el-table-column>
                                <el-table-column prop="report_endDate" label="結束日期" align="center">
                                </el-table-column>
                                <el-table-column label="原因" align="center" type="expand">
                                    <template slot-scope="scope">
                                        <el-tabs type="border-card">
                                            <el-tab-pane label="卸任原因">{{scope.row.step_down_reason}}</el-tab-pane>
                                            <el-tab-pane label="信心狀況">{{scope.row.confidence_state}}</el-tab-pane>
                                            <el-tab-pane label="目前挑戰">{{scope.row.challenge_now}}</el-tab-pane>
                                        </el-tabs>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="report_changeIcon" label="異動" align="center">
                                    <template slot-scope="scope">
                                        <el-button
                                            size="mini"
                                            type="primary"
                                            @click="handleEdit(scope.$index, scope.row)">異動
                                        </el-button>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="report_changeIcon" label="儲存" align="center">
                                    <template slot-scope="scope">
                                        <el-button
                                            size="mini"
                                            type="primary"
                                            @click="handleEdit(scope.$index, scope.row)">儲存
                                        </el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <Pagination></Pagination>
                        </div>
                        <div class="mb-4">
                            <div>
                                <el-form ref="form">
                                    <el-form-item label="姓名">
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
                                <el-button type="primary"> 姓名查職務</el-button>
                            </div>
                            <div class="d-flex justify-content-between px-3">
                                <div>人員職務清單 (組織 + 人才)</div>
                                <div>會員</div>
                            </div>
                            <el-table :data="tableData_report"  :header-cell-style="{ background: '#eee' }">
                                <el-table-column prop="report_unit" label="單位" align="center">
                                </el-table-column>
                                <el-table-column prop="report_title" label="職務名稱" align="center">
                                </el-table-column>
                                <el-table-column prop="report_member" label="會員名稱" align="center">
                                </el-table-column>
                                <el-table-column prop="report_startDate" label="開始日期" align="center">
                                </el-table-column>
                                <el-table-column prop="report_endDate" label="結束日期" align="center">
                                </el-table-column>
                                <el-table-column label="原因" align="center" type="expand">
                                    <template slot-scope="scope">
                                        <el-tabs type="border-card">
                                            <el-tab-pane label="卸任原因">{{scope.row.step_down_reason}}</el-tab-pane>
                                            <el-tab-pane label="信心狀況">{{scope.row.confidence_state}}</el-tab-pane>
                                            <el-tab-pane label="目前挑戰">{{scope.row.challenge_now}}</el-tab-pane>
                                        </el-tabs>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="report_changeIcon" label="異動" align="center">
                                    <template slot-scope="scope">
                                        <el-button
                                            size="mini"
                                            type="primary"
                                            @click="handleEdit(scope.$index, scope.row)">異動
                                        </el-button>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="report_changeIcon" label="儲存" align="center">
                                    <template slot-scope="scope">
                                        <el-button
                                            size="mini"
                                            type="primary"
                                            @click="handleEdit(scope.$index, scope.row)">儲存
                                        </el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <Pagination></Pagination>
                        </div>
                    </section>
                </el-col>
            </el-row>
        </section>
        <section>
            <el-row>
                <el-col :span="20" class="px-3">
                    <div class="sub-title mb-4">(三)人事異動轉簽呈</div>
                    <div class="d-flex">
                        <div>資料篩選:</div>
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox label="自己提的"></el-checkbox>
                            <el-checkbox label="關卡中有自己"></el-checkbox>
                            <el-checkbox label="和我無關的"></el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="d-flex align-items-center">
                        <div>被提報職務的層級:</div>
                        <el-checkbox-group v-model="checkList2">
                            <el-checkbox label="總和"></el-checkbox>
                            <el-checkbox label="圈"></el-checkbox>
                            <el-checkbox label="區"></el-checkbox>
                            <el-checkbox label="本部"></el-checkbox>
                            <el-checkbox label="支部"></el-checkbox>
                            <el-checkbox label="地區"></el-checkbox>
                            <el-checkbox label="組"></el-checkbox>
                        </el-checkbox-group>
                        <el-button type="primary" size="small">查詢</el-button>
                    </div>
                    <div class="d-flex align-items-center">
                        <el-form ref="form" :inline="true">
                            <el-form-item label="預設排序順位:" class="mb-0">
                                <el-input v-model="form.order" 
                                    clearable
                                    placeholder="組織單位 + 職務名稱"
                                    :disabled="true">
                                </el-input>
                            </el-form-item>
                        </el-form>
                        <el-button type="primary" size="small">排序</el-button>
                    </div>
                    <div>
                        <div>人事輸入清單</div>
                        <el-table :data="affair_data" class="mb-3" :header-cell-style="{ background: '#eee' }"
                        @selection-change="handleSelectionChange">
                            <el-table-column type="selection" align="center">
                            </el-table-column>
                            <el-table-column prop="affair_mem_id" label="會員編號" align="center">
                            </el-table-column>
                            <el-table-column prop="affair_mem_name" label="會員姓名" align="center">
                            </el-table-column>
                            <el-table-column
                                prop="affair_job_title"
                                label="職務名稱"
                                show-overflow-tooltip
                                align="center"
                                >
                            </el-table-column>
                            <el-table-column prop="affair_level" label="層級" align="center">
                            </el-table-column>
                            <el-table-column prop="affair_depart" label="所屬單位" align="center">
                            </el-table-column>
                            <el-table-column prop="affair_job_status" label="職務狀態" align="center">
                            </el-table-column>
                            <el-table-column prop="affair_set_person" label="建立人員" align="center">
                            </el-table-column>
                            <el-table-column prop="affair_maintain_person" label="維護人員" align="center">
                            </el-table-column>
                            <el-table-column align="center" width="180">
                                <template slot-scope="scope">
                                    <el-button
                                        size="mini"
                                        type="primary"
                                        @click="handleEdit(scope.$index, scope.row)">刪除
                                    </el-button>
                                    <el-button
                                        size="mini"
                                        type="primary"
                                        @click="handleDelete(scope.$index, scope.row)">編輯
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <Pagination></Pagination>
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
.el-checkbox {
    margin-right: 15px;
}

// \e6d9 +
// \e6d8 -

</style>