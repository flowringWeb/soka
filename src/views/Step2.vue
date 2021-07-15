<script>
import Steps from "@/components/Steps.vue";
export default {
    components: {
        Steps
    },
    data() {
        return {
            //steps
            currentStep: 1,
            // vue-tree-chart
            richMediaData: {
                name: "創價本部",
                value: 800,
                children: [
                    {
                    name: "勝利支部",
                    value: 400,
                    children: [
                            {
                                name: "A地區",
                                value: 100,
                            },
                            {
                                name: "B地區",
                                value: 300,
                            },
                            {
                                name: "C地區",
                                value: 200,
                            },
                        ],
                    },
                    {
                    name: "榮光支部",
                    value: 200,
                    children: [
                            {
                                name: "D地區",
                                value: 230,
                            },
                        ],
                    },
                    {
                        name: "和平支部",
                        value: 300,
                    },
                ],
            },
            treeConfig: { 
                nodeWidth: 120, nodeHeight: 100, levelHeight: 200 
            },
            //vue-org-tree
            isBoxShow: false,
            inforBox:{
                id: null,
                label: null
            },
            labelClassName: "bg-color-orange",
            treeData: {
                id: 0,
                label: "創價本部",
                children: [
                    {
                        id: 1,
                        label: "勝利支部",
                        children: [
                            {
                                id: 4,
                                label: "A地區"
                            },
                            {
                                id: 5,
                                label: "B地區"
                            },
                            {
                                id: 6,
                                label: "C地區"
                            },
                        ]
                    },
                    {
                        id: 2,
                        label: "榮光支部",
                        children: [
                            {
                                id: 7,
                                label: "D地區"
                            },
                            {
                                id: 8,
                                label: "E地區"
                            }
                        ]
                    },
                    {
                        id: 3,
                        label: "和平支部",
                        children: [
                            {
                                id: 9,
                                label: "F地區",
                            },
                            {
                                id: 10,
                                label: "G地區",
                            }
                        ]
                    },
                ]
            },
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
                preLevel: "青山地區"
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
            ]
        };
    },
    methods: {
        //收合時觸發
        collapse(list) {
            var vm = this;
            list.forEach(function(child) {
                // if (child.expand) {
                //     child.expand = false;
                // }
                // child.children && vm.collapse(child.children);
            });
        },
        // 展開組織樹時觸發
        onExpand(e,data) {
            if ("expand" in data) {
                data.expand = !data.expand;
                if (!data.expand && data.children) {
                    this.collapse(data.children);
                }
            } else {
                // 在 treeData 新增expand 屬性，只要有展開過，未來就不會經過這行
                this.$set(data, "expand", true);
            }
        },
        //預設展開組織樹
        toggleExpand(data,val) {
            // console.log('=>',data); //data 以1層層來看
            var vm = this;
            if (Array.isArray(data)) {
                data.forEach(function(item) {
                    vm.$set(item, "expand", val);
                    if (item.children) {
                        vm.toggleExpand(item.children, val);
                    }
                });
            } else {
                this.$set(data, "expand", val);
                if (data.children) {
                    vm.toggleExpand(data.children, val);
                }
            }
        },
        NodeClick(e,data){
            // console.log(e, data);
        },
        onMouseout(e, data) {
            this.isBoxShow = false
        },
        onMouseover(e, data) {
            this.inforBox = data;
            // console.log('inforBox',this.inforBox);
            this.isBoxShow = true;
            let infobox = document.querySelector('.infobox');
            infobox.style.left = e.clientX +'px';
            infobox.style.top = e.clientY+'px';
        },
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

        }
    },
    mounted() {
        this.toggleExpand(this.treeData, true);
    },
};
</script>
<template>
    <!-- <div class="container">
        <vue-tree
            class="treeWrapper"
            :dataset="richMediaData"
            :config="treeConfig"
        >
            <template v-slot:node="{ node, collapsed }">
            <div
                class="rich-media-node"
                :style="{ border: collapsed ? '2px solid grey' : '' }"
            >
                <span style="padding: 4px 0; font-weight: bold"
                >{{ node.name }}</span
                >
            </div>
            </template>
        </vue-tree>
    </div> -->

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
        </div>
        <el-row>
            <el-col :span="18">
                <section class="tree">
                    <div class="tree__title">劃分前後組織樹</div>
                    <vue2-org-tree
                        class="tree__self"
                        collapsable
                        :data="treeData" 
                        :horizontal="false"
                        :label-class-name="labelClassName" 
                        @on-expand="onExpand"
                        @on-node-click="NodeClick"
                        @on-node-mouseover="onMouseover"
                        @on-node-mouseout="onMouseout"
                    />
                    <div v-show="isBoxShow" class="infobox">
                        <p>ID:{{ inforBox.id }}</p>
                        <p>Name:{{ inforBox.label }}</p>
                    </div>
                </section>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="18">
                <section class="archiTree">
                    <h5 class="sub-title">(一)組織圖(選擇節點)</h5>
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
                    <div>
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

                    </div>
                </section>
            </el-col>
        </el-row>

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
    </div>
</template>
<style lang="scss">
    h5 {
        margin-bottom: 0.5rem;
        padding: 0.5rem 0.1rem;
        background-color: #ccc;
    }
    .tree {
        &__title {
            width: 100%;
            color: #FFF;
            background-color: #000;
            padding: 0.5rem 0;
        }
        &__self {
            border: 1px solid #000;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
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
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .treeWrapper {
        width: 100vw;
        height: 600px;
    }
    .rich-media-node {
        width: 80px;
        padding: 8px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        color: white;
        background-color: #f7c616;
        border-radius: 4px;
        text-align: center;
    }
    //scoped 拿掉，vue-org-tree 背景色會無法使用
    .bg-color-orange{
        color: #fff;
        border: 2px solid #409EFF;
        background-color: #88c2fc;
    }
    .infobox{
        color: #fff;
        font-size: 0.5rem;
        background: rgba(0, 0, 0, 0.7);
        width: 100px;
        height: 80px;
        border-radius: 15px;
        position: absolute;
        left:0;
        top: 0;
        padding: 10px 0 0 10px;
        text-align: left;
        z-index: 999;
        transition: all 0.3s;
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