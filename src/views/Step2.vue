<script>
export default {
    data() {
        return {
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
            }
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
        // 展開時觸發
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
        //預設展開
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
        //3 (包含3&3的內層)不能drag
        // allowDrag(draggingNode) {
        //     return draggingNode.label.indexOf('3') === -1;
        // }
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
        <div class="title">STEP 1: 組織劃分- 組織單位異動</div>
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

        <el-tree
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
    .tree {
        &__title {
            width: 100%;
            color: #FFF;
            background-color: #000;
            padding: 0.5rem 0;
        }
        &__self {
            width: 100%;
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

</style>