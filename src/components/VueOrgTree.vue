<script>
export default {
    data() {
        return {
            //vue-org-tree
            isBoxShow: false,
            inforBox:{
                id: null,
                label: null
            },
            labelClassName: "bg-color-orange",
            treeData: {
                id: 0,
                label: "桃園東區女子部長",
                content: "許xx 34",
                children: [
                    {
                        id: 1,
                        label: "八德區",
                        content: "許xx 34",
                        children: [
                            {
                                id: 4,
                                label: "A地區",
                                content: "許xx 34",
                                children: [
                                    {
                                        id: 10,
                                        label: "忠勇",
                                        content: "許xx 34",
                                    },
                                    {
                                        id: 11,
                                        label: "桃德",
                                        content: "許xx 34",
                                    },
                                    {
                                        id: 12,
                                        label: "大楠",
                                        content: "許xx 34",
                                    },
                                    {
                                        id: 13,
                                        label: "永豐",
                                        content: "許xx 34",
                                    },
                                ]
                            },
                            {
                                id: 5,
                                label: "B地區",
                                content: "許xx 34",
                                children: [
                                    {
                                        id: 10,
                                        label: "忠勇",
                                        content: "許xx 34",
                                    },
                                    {
                                        id: 11,
                                        label: "桃德",
                                        content: "許xx 34",
                                    },
                                    {
                                        id: 12,
                                        label: "大楠",
                                        content: "許xx 34",
                                    },
                                    {
                                        id: 13,
                                        label: "永豐",
                                        content: "許xx 34",
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        id: 2,
                        label: "平鎮區",
                        content: "許xx 34",
                        children: [
                            {
                                id: 7,
                                label: "D地區",
                                content: "許xx 34",
                                children: [
                                    {
                                        id: 10,
                                        label: "忠勇",
                                        content: "許xx 34",
                                    },
                                    {
                                        id: 11,
                                        label: "桃德",
                                        content: "許xx 34",
                                    },
                                    {
                                        id: 12,
                                        label: "大楠",
                                        content: "許xx 34",
                                    },
                                    {
                                        id: 13,
                                        label: "永豐",
                                        content: "許xx 34",
                                    },
                                ]
                            },
                            {
                                id: 8,
                                label: "E地區",
                                content: "許xx 34",
                                children: [
                                    {
                                        id: 10,
                                        label: "忠勇",
                                        content: "許xx 34",
                                    },
                                    {
                                        id: 11,
                                        label: "桃德",
                                        content: "許xx 34",
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        id: 3,
                        label: "大溪區",
                        content: "許xx 34",
                        children: [
                            {
                                id: 9,
                                label: "F地區",
                                content: "許xx 34",
                                children: [
                                    {
                                        id: 10,
                                        label: "忠勇",
                                        content: "許xx 34",
                                    },
                                    {
                                        id: 11,
                                        label: "桃德",
                                        content: "許xx 34",
                                    },
                                ]
                            },
                            {
                                id: 10,
                                label: "G地區",
                                content: "許xx 34",
                                children: [
                                    {
                                        id: 10,
                                        label: "忠勇",
                                        content: "許xx 34",
                                    },
                                    {
                                        id: 11,
                                        label: "桃德",
                                        content: "許xx 34",
                                    },
                                    {
                                        id: 12,
                                        label: "大楠",
                                        content: "許xx 34",
                                    },
                                    {
                                        id: 13,
                                        label: "永豐",
                                        content: "許xx 34",
                                    },
                                ]
                            }
                        ]
                    },
                ]
            },
        }
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
            this.isBoxShow = false;
        },
        onMouseover(e, data) {
            // console.log(e);
            let distance = 50;
            this.inforBox = data;
            this.isBoxShow = true;
            let infobox = document.querySelector('.infobox');
            infobox.style.left = (e.clientX - distance ) +'px';
            infobox.style.top = (e.clientY - distance ) +'px';
            // console.log(infobox.style.left);
            // console.log(infobox.style.top)
        },
        renderContent(h, node) {
            // console.log('=>',node);
            return (
                <div class={'diy-wrapper', node.isCurrent ? 'current-select' : ''} >
                    <div class="diy-con-name">{node.label}</div>
                    <div class="diy-con-content">{node.content}</div>
                </div>
            )
        }
    },
    mounted() {
        this.toggleExpand(this.treeData, true);
    },
}
</script>
<template>
    <div>
        <el-row class="mb-3">
            <el-col :span="24">
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
                        :renderContent="renderContent"
                    />
                    <div v-show="isBoxShow" class="infobox">
                        <p>ID:{{ inforBox.id }}</p>
                        <p>Name:{{ inforBox.label }}</p>
                    </div>
                </section>
            </el-col>
        </el-row>

        
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
            border: 1px solid #000;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
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
        height: 50px;
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