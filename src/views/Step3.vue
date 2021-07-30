<script>
    import Steps from "@/components/Steps.vue";
    import ExportExcel from "@/components/ExportExcel.vue";
    import Pagination from "@/components/Pagination.vue";
    export default {
        components: {
            Steps,
            ExportExcel,
            Pagination
        },
        data() {
            return {
                //steps
                active: 2,

                //form 表單
                labelPosition: "left",
                form3: {
                    orgName: "專案",
                    state: "",
                    codeName: "3334-0844",
                    date1: "",
                    depart: [],
                },
                options: [
                    {
                    value: "HTML",
                    label: "HTML",
                    },
                    {
                    value: "CSS",
                    label: "CSS",
                    },
                    {
                    value: "JavaScript",
                    label: "JavaScript",
                    },
                ],
                //開啟地圖附件
                dialogMapVisible: false,

                //人員遷移相關表格
                tableMoveSource: [
                    {
                    check: "",
                    id: 16666,
                    name: "周oo",
                    job: "地區綜合長",
                    org: "汐止區/青山地區",
                    old_org: "大安地區",
                    type: "success",
                    icon: "el-icon-check",
                    },
                    {
                    check: "",
                    id: 453534,
                    name: "莫xx",
                    job: "地區部長",
                    org: "汐止區/青山地區",
                    old_org: "大安地區",
                    type: "danger",
                    icon: "el-icon-delete",
                    },
                    {
                    check: "",
                    id: 5555555,
                    name: "周oo",
                    job: "地區綜合長",
                    org: "汐止區/青山地區",
                    old_org: "大安地區",
                    type: "success",
                    icon: "el-icon-check",
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
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                //單位人數統計表格
                tableCountEval: [
                    {
                        selectDepart: "金城地區A組",
                        selectDepartNum: 50,
                        emuDepart: "金城地區A組",
                        emuDepartNum: 50,
                    },
                    {
                        selectDepart: "金城地區A組",
                        selectDepartNum: 50,
                        emuDepart: "金城地區A組",
                        emuDepartNum: 50,
                    },
                ],
                // 統計區域清單表格
                evalList: [
                    {
                        district: "金城地區A組",
                        type: "success",
                        icon: "el-icon-check"
                    },
                    {
                        district: "金城地區A組",
                        type: "danger",
                        icon: "el-icon-delete"
                    },
                ],
                //四部進度回覆表格
                tableReply: [
                    {
                        depart: "壯",
                        name: "王oo",
                        progressReply: "作業完成",
                        replyContent: "測試",
                        time: "2021/07/11"
                    },
                    {
                        depart: "婦",
                        name: "王oo",
                        progressReply: "作業完成",
                        replyContent: "測試",
                        time: "2021/07/11"
                    },
                ]
            }
        },
        methods: {

        }
    }
</script>
<template>
    <div>
        <Steps :active="active"></Steps>
        <div class="title">STEP 3: 組織劃分- 人員異動</div>
        <div class="pt-2 pb-5">
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
                                    <!-- <el-button type="primary" round>瀏覽</el-button> -->
                                    <router-link target="_blank" to="/step3/download">
                                        <el-button type="primary">
                                            瀏覽
                                        </el-button>
                                    </router-link>
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
            <section>
                <el-row>
                    <el-col :span="18">
                        <section>
                            <div class="sub-title">(一)組織圖(選擇節點)</div>
                            <el-tree
                                class="archiTree__tree"
                                :data="data"
                                node-key="id"
                                default-expand-all
                                draggable
                            >
                            </el-tree>
                        </section>
                    </el-col>
                </el-row>
            </section>
            <section>
                <el-row>
                    <el-col :span="18">
                        <div>
                            <div class="sub-title">(二)人員遷移</div>
                            <h5 class="ml-2">組織單位人員</h5>
                            <div>
                                <el-table :data="tableMoveSource"
                                :header-cell-style="{ background: '#eee' }" 
                                class="mb-3">
                                    <el-table-column type="selection" label="選擇" align="center">
                                    </el-table-column>
                                    <el-table-column prop="id" label="會員編號" align="center">
                                    </el-table-column>
                                    <el-table-column
                                    prop="name"
                                    label="姓名"
                                    show-overflow-tooltip
                                    align="center"
                                    >
                                    </el-table-column>
                                    <el-table-column prop="job" label="職務名稱" align="center">
                                    </el-table-column>
                                    <el-table-column prop="org" label="單位" align="center">
                                    </el-table-column>
                                    <el-table-column prop="old_org" label="原單位" align="center">
                                    </el-table-column>
                                    <el-table-column label="退回原單位" align="center">
                                    <template slot-scope="scope">
                                        <el-button
                                        :type="scope.row.type"
                                        :icon="scope.row.icon"
                                        circle
                                        size="small"
                                        ></el-button>
                                    </template>
                                    </el-table-column>
                                </el-table>
                                <Pagination></Pagination>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <div class="block mb-2">
                            <div>批次遷移</div>
                            <el-form ref="form3" 
                                :inline="true"
                                label-width="auto"
                                size="medium">
                                <el-form-item label="組織單位:" class="mr-0 mb-0">
                                    <el-select
                                        v-model="form3.depart"
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
                            </el-form>
                            <div>
                                <el-button type="primary" round>批次遷移</el-button>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <div class="block mb-2">
                            <div>批次退回單位</div>
                            <el-button type="danger" round>批次遷移</el-button>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <h5 class="ml-2">單位人數統計</h5>
                        <el-table :data="tableCountEval" :header-cell-style="{ background: '#eee' }">
                            <el-table-column prop="selectDepart" label="選擇單位" align="center">
                            </el-table-column>
                            <el-table-column prop="selectDepartNum" label="人數" align="center">
                            </el-table-column>
                            <el-table-column prop="emuDepart" label="遷移單位" align="center">
                            </el-table-column>
                            <el-table-column prop="emuDepartNum" label="人數" align="center">
                            </el-table-column>
                        </el-table>
                    </el-col>
                    <el-col :span="18">
                        <h5 class="ml-2">統計區域清單(預設列出有異動的區域)</h5>
                        <el-table class="mb-2" :data="evalList" :header-cell-style="{ background: '#eee' }">
                            <el-table-column prop="district" label="區域" align="center">
                            </el-table-column>
                            <el-table-column prop="icon" label="刪除/ 新增" align="center">
                                <template slot-scope="scope">
                                    <el-button
                                    :type="scope.row.type"
                                    :icon="scope.row.icon"
                                    circle
                                    size="small"
                                    ></el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <p class="mb-2">本區域清單係用於 劃分前後人數統計表 及 Excel 輸出部分</p>
                        <div class="nextStep">
                            <el-button type="success" round>儲存&瀏覽劃分前後組織樹</el-button>
                            <el-button type="success" round>儲存&瀏覽劃分前後人數統計表</el-button>
                        </div>
                    </el-col>
                </el-row>
            </section>
        
            <div class="section">
                <el-row>
                    <el-col :span="18">
                        <div class="sub-title">(三)四部進度回覆</div>
                        <div class="block2">
                            <el-form ref="form3"
                                class="mr-3"
                                :inline="true"
                                label-width="auto"
                                size="medium">
                                <el-form-item label="意見:" class="mr-0 mb-0">
                                    <el-select
                                        v-model="form3.depart"
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
                            </el-form>
                            <div>
                                <el-button type="primary" round>提報作業完成</el-button>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="18">
                        <h5 class="ml-2">四部進度回覆</h5>
                        <el-table :data="tableReply" :header-cell-style="{ background: '#eee' }">
                                <el-table-column prop="depart" label="部別" align="center">
                                </el-table-column>
                                <el-table-column prop="name" label="姓名" align="center">
                                </el-table-column>
                                <el-table-column prop="progressReply" label="進度回覆" align="center">
                                </el-table-column>
                                <el-table-column prop="replyContent" label="回覆內容" align="center">
                                </el-table-column>
                                <el-table-column prop="time" label="時間" align="center">
                                </el-table-column>
                            </el-table>
                    </el-col>
                </el-row>
            </div>
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
    h5 {
        margin-bottom: 0.5rem;
        padding: 0.5rem 0.1rem;
        background-color: #ccc;
    }
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
    .block {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .block2 {
        display: flex;
        justify-content: center;
    }
    p {
        text-align: right;
    }
    .nextStep {
        display: flex;
        justify-content: center;
    }
</style>