<script>
import Steps from "@/components/Steps.vue";
import Pagination from "@/components/Pagination.vue";
import GoTree from "@/components/GoTree.vue";
import VueOrgTree from "@/components/VueOrgTree.vue";
import VueTreeChart from "@/components/VueTreeChart.vue";
export default {
    components: {
        Steps,
        Pagination,
        GoTree,
        VueOrgTree,
        VueTreeChart
    },
    data() {
        return {
            //steps
            currentStep: 1,
            //tabs
            editableTabsValue: '2',
            tabIndex: 2,
            editableTabs: [
                {
                    title: 'Tab 1',
                    name: '1',
                    content: 'Tab 1 content'
                }, 
                {
                    title: 'Tab 2',
                    name: '2',
                    content: 'Tab 2 content'
                }
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
            //form 表單
            labelPosition: "left",
            form2: {
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
                lastEditPerson: "Scott",
                editingPerson: "Andy",
                preLevel: "青山地區",
                progress: "",
                version: 3,
                district: []
            },
            options: [
                {
                    value: "修訂中",
                    label: "修訂中",
                },
                {
                    value: "閒置",
                    label: "閒置",
                },
            ],
            tableData1: [
                {
                    org: "勝利組",
                    col1: "",
                    lastLevel: "青山地區",
                    place: "地區綜合長",
                    pcode: 231,
                },
                {
                    org: "吉祥組",
                    col1: "",
                    lastLevel: "汐止地區",
                    place: "地區綜合長",
                    pcode: 222,
                },
            ],
            selectOptions: [
                {
                    map: "綜合地區",
                    value: "綜合地區"
                },
                {
                    map: "汐止地區",
                    value: "汐止地區"
                }
            ],
            tableData2: [
                {
                    org: "勝利組",
                    lastLevel: "青山地區",
                    add: "",
                    trans: "",
                    stop: "",
                    btn: ""
                },
                {
                    org: "吉祥組",
                    lastLevel: "汐止地區",
                    add: "",
                    trans: "",
                    stop: "",
                    btn: ""
                },
            ],
            tableData3: [
                {
                    dapart: "壯",
                    name: "AAA",
                    reply: "再調整",
                    content: "反饋內容",
                    version: 2,
                },
                {
                    dapart: "壯",
                    name: "BBB",
                    reply: "再調整",
                    content: "反饋內容",
                    version: 2,
                },

            ],
            radio: '2',
            //劃分後表格
            nextLevel: [
                {
                    name: "和平支部",
                    childs: {
                        peaces: 50,
                        lights: 33,
                        wins: 18
                    }
                },
                {
                    name: "榮光支部",
                    childs: {
                        peaces: 50,
                        lights: 33,
                        wins: 18
                    }
                },
                {
                    name: "勝利支部",
                    childs: {
                        peaces: 5,
                        lights: 3,
                        wins: 8
                    }
                }
            ],
            tableData4: [
                {
                    type: '壯',
                    num: 30,
                    depart: 20,
                    apple: 10,
                    future: 14,
                    junior: 40,
                    senior: 10,
                    college: 60,
                    child: {
                        peace: 50,
                        light: 33,
                        win: 18
                    }
                }, 
                {
                    type: '婦',
                    num: 88,
                    depart: 20,
                    apple: 10,
                    future: 14,
                    junior: 40,
                    senior: 10,
                    college: 60,
                    child: {
                        peace: 50,
                        light: 4,
                        win: 18
                    }
                }, 
                {
                    type: '男',
                    num: 30,
                    depart: 20,
                    apple: 10,
                    future: 14,
                    junior: 40,
                    senior: 10,
                    college: 60,
                    child: {
                        peace: 50,
                        light: 3,
                        win: 18
                    }
                }, 
                {
                    type: '女',
                    num: 30,
                    depart: 20,
                    apple: 10,
                    future: 14,
                    junior: 40,
                    senior: 10,
                    college: 60,
                    child: {
                        peace: 20,
                        light: 33,
                        win: 88
                    }
                }, 
            ]   
        };
    },
    computed: {
        showLabel() {
            return this.nextLevel;
        }
    },
    methods: {
        //element UI tab 測試
        addTab(targetName) {
            let newTabName = ++this.tabIndex + '';
            this.editableTabs.push({
                title: 'New Tab',
                name: newTabName,
                content: 'New Tab content'
            });
            this.editableTabsValue = newTabName;
        },
        removeTab(targetName) {
            let tabs = this.editableTabs;
            let activeName = this.editableTabsValue;
            
            //藍色active狀態的與選定的是同一個才會進到 if 狀態判斷
            if (activeName === targetName) {
                tabs.forEach((tab, index) => {
                    if (tab.name === targetName) {
                        let nextTab = tabs[index + 1] || tabs[index - 1];
                        if (nextTab) {
                            activeName = nextTab.name;
                        }
                    }
                });
            }
            this.editableTabsValue = activeName;
            this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        },
        //element UI tree
        handleDragStart(node, ev) {
            // console.log('start', node);
        },
        // = handleDragOver(中間有過度流程)
        handleDragEnter(draggingNode, dropNode, ev) {
            // console.log('enter: ', draggingNode, dropNode.label);
        },
        //離開的最後一個節點 (中間有過度流程)
        handleDragLeave(draggingNode, dropNode, ev) {
            // console.log('leave: ', draggingNode, dropNode.label);
        },
        // = handleDragEnter = mouseover (中間有過度流程)
        handleDragOver(draggingNode, dropNode, ev) {
            // console.log('over: ', draggingNode,  dropNode.label);
        },
        //最後放入的最終點 = handleDrop
        handleDragEnd(draggingNode, dropNode, dropType, ev) {
            // console.log('end: ', dropNode.label, dropType);
        },
        // = handleDragEnd
        handleDrop(draggingNode, dropNode, dropType, ev) {
            // console.log('drop: ', dropNode.label, dropType);
        },
        //可否移動放置的判斷
        allowDrop(draggingNode, dropNode, type) {
            //同一level & 同一parentNode.id，才可以 prev || next 的放置
            if (draggingNode.level === dropNode.level) {
                if (draggingNode.parent.id === dropNode.parent.id) {
                    return type === "prev" || type === "next";
                }
            } else {
                return false;
            }
        },
        //(包含3&3的內層)不能drag
        // allowDrag(draggingNode) {
        //     return draggingNode.label.indexOf('3') === -1;
        // }
        //table header
        tableHeaderColor({row, column, rowIndex, columnIndex}) {
            if (rowIndex === 0) {
                return 'background-color: #eee;'
            }
        },
        onSubmit() {
            console.log('submit!');
        },
        //改變表格中資料
        changeData() {
            let anotherChild = {
                peace: 99,
                light: 99,
                win: 99
            }
            this.tableData4.forEach((item, index, arr) => {
                console.log(arr[index].child);
                item.child = anotherChild;
            })
        }
    },
};
</script>
<template>
    <div>
        <Steps :currentStep="currentStep"></Steps>

        <div class="title">STEP 2: 組織劃分- 組織單位異動</div>
        <div class="stepForm">
            <el-row :gutter="10" type="flex">
                <el-col :span="8">
                    <el-form
                        ref="form2"
                        :model="form2"
                        :inline="true"
                        label-width="auto"
                        size="medium"
                        :label-position="labelPosition"
                    >
                        <el-form-item label="組織劃分案名:">
                            <el-input v-model="form2.orgName"
                                type="text"
                                maxlength="20"
                                clearable
                                :disabled="true"
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="組織劃分案編號:">
                            <el-input v-model.number="form2.orgnNo" 
                                clearable
                                :disabled="true">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="劃分建議生效月:">
                        <el-col :span="11">
                            <el-date-picker
                                type="date"
                                placeholder="2021-07-06"
                                v-model="form2.date1"
                                :disabled="true"
                            ></el-date-picker>
                        </el-col>
                        </el-form-item>
                        <el-form-item label="修改次數:">
                            <el-input v-model.number="form2.editCount" clearable></el-input>
                        </el-form-item>
                        <el-form-item label="編輯狀態:">
                            <el-select
                                v-model="form2.state"
                                placeholder="請選擇"
                            >
                                <template slot="prefix">
                                    <i class="el-icon-lock"></i>
                                </template>
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
                </el-col>
                <el-col :span="8">
                    <el-form ref="form2" :model="form2" :inline="true" label-width="auto">
                        <el-form-item label="組織劃分案說明:">
                            <el-input
                                type="textarea"
                                v-model="form2.state"
                                clearable
                                maxlength="150"
                                show-word-limit
                                :autosize="{ minRows: 5, maxRows: 8 }"
                            >
                            </el-input>
                        </el-form-item>
                        <el-form-item label="最後編輯人:">
                            <el-input type="text" v-model="form2.lastEditPerson" :disabled="true">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="編輯中人員:">
                            <el-input type="text" v-model="form2.editingPerson" :disabled="true">
                            </el-input>
                        </el-form-item>
                </el-form>
                </el-col>
                <el-col :span="8">
                    <el-form ref="form2" :model="form2" :inline="true" label-width="auto">
                        <el-form-item label="備註:">
                            <el-input
                                type="textarea"
                                v-model="form2.note"
                                clearable
                                maxlength="150"
                                show-word-limit
                                :autosize="{ minRows: 5, maxRows: 8 }"
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="最後編輯時間:">
                            <el-time-picker
                                placeholder="16:10:44"
                                v-model="form2.date2"
                                :disabled="true"
                            ></el-time-picker>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="18">
                    <section class="archiTree">
                        <h5 class="sub-title">(一)組織圖(選擇節點)</h5>
                        <div class="archiTree__select">
                            <el-form :inline="true">
                                <el-form-item label="區域名稱搜尋:">
                                <el-select
                                    v-model="form2.district"
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
                        </div>
                        <el-tree
                            class="archiTree__tree"
                            :data="data"
                            node-key="id"
                            default-expand-all
                            @node-drag-start="handleDragStart"
                            @node-drag-enter="handleDragEnter"
                            @node-drag-leave="handleDragLeave"
                            @node-drag-over="handleDragOver"
                            @node-drag-end="handleDragEnd"
                            @node-drop="handleDrop"
                            draggable
                            :allow-drop="allowDrop"
                        >
                        </el-tree>
                        <div class="archiTree__option">
                            <el-form :inline="true" label-width="auto">
                                <div>
                                    <el-form-item label="修改次數:">
                                        <el-input v-model.number="form2.editCount" placeholder="10" :disabled="true"></el-input>
                                    </el-form-item>
                                    <el-form-item label="最後編輯人:">
                                        <el-input type="text" v-model="form2.lastEditPerson" :disabled="true">
                                        </el-input>
                                    </el-form-item>
                                </div>
                                <div>
                                    <el-form-item label="編輯狀態:">
                                        <el-select
                                            v-model="form2.state"
                                            placeholder="請選擇"
                                        >
                                            <template slot="prefix">
                                                <i class="el-icon-lock"></i>
                                            </template>
                                            <el-option
                                                v-for="item in options"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value"
                                            >
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="編輯中人員:">
                                        <el-input type="text" v-model="form2.editingPerson" :disabled="true">
                                        </el-input>
                                    </el-form-item>
                                </div>
                            </el-form>
                        </div>
                        <el-row type="flex" justify="center">
                            <el-button type="primary">編輯模式</el-button>
                            <el-button type="primary">唯讀模式</el-button>
                        </el-row>
                    </section>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="18">
                    <section>
                        <div class="sub-title">(二)組織異動(新增/終止/移動)</div>
                        <el-form ref="form2" :model="form2" :inline="true" label-width="auto">
                            <el-form-item label="上層組織:" class="my-2">
                                <el-input type="text" v-model="form2.preLevel" :disabled="true">
                                </el-input>
                            </el-form-item>
                        </el-form>
                        <div class="mb-3">
                            <h5>組織清單</h5>
                            <el-table :data="tableData1" class="mb-3" :header-cell-style="tableHeaderColor">
                                <el-table-column prop="org" label="組織名稱" align="center">
                                </el-table-column>
                                <el-table-column
                                    prop="col1"
                                    label="狀態說明"
                                    align="center"
                                >
                                    <template slot-scope="scope">
                                        <el-input v-model="scope.row.col1"></el-input>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="lastLevel" label="上層組織(原)" align="center">
                                </el-table-column>
                                <el-table-column prop="place" label="移動至組織" align="center">
                                    <template slot-scope="scope">
                                        <el-select
                                            v-model="scope.row.place"
                                            placeholder="請選擇"
                                        >
                                            <el-option
                                                v-for="item in selectOptions"
                                                :key="item.value"
                                                :label="item.map"
                                                :value="item.value"
                                            >
                                            </el-option>
                                        </el-select>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="pcode" label="郵遞區號" align="center">
                                    <template slot-scope="scope">
                                        <el-input v-model="scope.row.pcode"></el-input>
                                    </template>
                                </el-table-column>
                                <el-table-column label="新增/中止" align="center">
                                    <template slot-scope="scope">
                                        <el-button
                                            size="mini"
                                            type="success"
                                            @click="handleEdit(scope.$index, scope.row)">儲存
                                        </el-button>
                                        <el-button
                                            size="mini"
                                            type="danger"
                                            @click="handleDelete(scope.$index, scope.row)">中止
                                        </el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <Pagination></Pagination>
                        </div>
                        <div>
                            <h5>組織異動歷程</h5>
                            <el-table :data="tableData2" class="mb-3" :header-cell-style="tableHeaderColor">
                                <el-table-column prop="org" label="組織名稱(原)" align="center">
                                </el-table-column>
                                <el-table-column prop="lastLevel" label="上層組織(原)" align="center">
                                </el-table-column>
                                <el-table-column prop="add" label="新增" align="center">
                                </el-table-column>
                                <el-table-column prop="trans" label="移動" align="center">
                                </el-table-column>
                                <el-table-column prop="stop" label="中止" align="center">
                                </el-table-column>
                                <el-table-column prop="btn" label="" align="center">
                                    <template slot-scope="scope">
                                        <el-button
                                            size="mini"
                                            type="danger"
                                            @click="handleEdit(scope.$index, scope.row)">取消
                                        </el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <Pagination></Pagination>
                        </div>
                        <el-row type="flex" justify="center" class="mb-3">
                            <el-button type="success" round>儲存&瀏覽劃分前後組織樹</el-button>
                        </el-row>
                        <div class="sub-title">(三)四部協同作業(意見)</div>
                        <div>
                            <el-row>
                                <el-form :inline="true" :model="form2" ref="form2">
                                    <el-col :span="7">
                                        <el-form-item label="進度回覆:">
                                            <el-radio v-model="radio" label="1">同意</el-radio>
                                            <el-radio v-model="radio" label="2">再調整 </el-radio>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="10" align="middle">
                                        <el-form-item>
                                            <el-input type="textarea"
                                            v-model="form2.progress"
                                            :autosize="{ minRows: 2, maxRows: 4 }" placeholder="請輸入意見內容..."></el-input>
                                        </el-form-item>
                                        <el-form-item>
                                            <el-button type="primary" @click="onSubmit">意見提報</el-button>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="7">
                                        <el-form-item label="目前版次:">
                                            <el-input v-model="form2.version" :disabled="true"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-form>
                            </el-row>
                        </div>
                        <div>
                            <h5>四部意見彙整</h5>
                            <el-table :data="tableData3" class="mb-3" :header-cell-style="tableHeaderColor">
                                <el-table-column prop="dapart" label="部別" align="center">
                                </el-table-column>
                                <el-table-column prop="name" label="姓名" align="center">
                                </el-table-column>
                                <el-table-column prop="reply" label="進度回覆" align="center">
                                </el-table-column>
                                <el-table-column prop="content" label="意見內容" align="center">
                                </el-table-column>
                                <el-table-column prop="version" label="版次" align="center">
                                </el-table-column>
                            </el-table>
                            <el-form ref="form2" :model="form2" :inline="true">
                                <el-row type="flex" justify="center">
                                    <el-form-item label="最後編輯時間:">
                                        <el-time-picker
                                            placeholder="16:10:44"
                                            v-model="form2.date2"
                                            :disabled="true"
                                        ></el-time-picker>
                                    </el-form-item>
                                </el-row>
                            </el-form>
                        </div>
                    </section>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="18">
                    <div>
                        <el-button @click="changeData">更換</el-button>
                    </div>
                    <el-table
                        :data="tableData4"
                        show-summary
                        style="width: 100%">
                        <el-table-column
                        prop="type"
                        label=""
                        width="auto">
                        </el-table-column>
                        <el-table-column label="組織數據">
                            <el-table-column
                            prop="num"
                            label="人數"
                            width="auto">
                            </el-table-column>
                            <el-table-column
                            prop="depart"
                            label="幹部數"
                            width="auto">
                            </el-table-column>
                            <el-table-column
                            prop="apple"
                            label="紅蘋果"
                            width="auto">
                            </el-table-column>
                        </el-table-column>
                        <el-table-column label="學生人數">
                            <el-table-column
                            prop="future"
                            label="未來部"
                            width="auto">
                            </el-table-column>
                            <el-table-column
                            prop="junior"
                            label="國中部"
                            width="auto">
                            </el-table-column>
                            <el-table-column
                            prop="senior"
                            label="高中部"
                            width="auto">
                            </el-table-column>
                            <el-table-column
                            prop="college"
                            label="大學部"
                            width="auto">
                            </el-table-column>
                        </el-table-column>

                        <el-table-column label="下一層組織樹">
                            <el-table-column 
                            width="auto" 
                            v-for="(item) in showLabel" 
                            :key="item.name"
                            :label="item.name"
                            
                            >
                            </el-table-column>
                        </el-table-column>

                        <el-table-column label="下一層組織樹">
                            <el-table-column
                            prop="child.peace"
                            :label="nextLevel[0].name"
                            width="auto">
                            </el-table-column>
                            <el-table-column
                            prop="child.light"
                            :label="nextLevel[1].name"
                            width="auto">
                            </el-table-column>
                            <el-table-column
                            prop="child.win"
                            :label="nextLevel[2].name"
                            width="auto">
                            </el-table-column>
                        </el-table-column>
                    </el-table>
                </el-col>
            </el-row>
        </div>
        <!-- <div style="margin-bottom: 20px;">
            <el-button
                size="small"
                @click="addTab(editableTabsValue)"
            >
                add tab
            </el-button>
        </div>
        <el-tabs v-model="editableTabsValue" type="card" 
            closable @tab-remove="removeTab">
            <el-tab-pane
                v-for="(item) in editableTabs"
                :key="item.name"
                :label="item.title"
                :name="item.name"
            >
                {{item.content}}
            </el-tab-pane>
        </el-tabs> -->
        
        <!-- 直向組織樹圖 -->
        <!-- <GoTree></GoTree> -->
        <!-- <VueOrgTree></VueOrgTree> -->
        <VueTreeChart></VueTreeChart> 
    </div>
</template>
<style lang="scss">
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
    .sub-title {
        padding: 0.5rem 0;
        color: #FFF;
        background-color: #000;
    }
    .stepForm {
        padding: 3rem 1rem;
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
        &__select {
            display: flex;
            justify-content: flex-end;
        }
    }

</style>