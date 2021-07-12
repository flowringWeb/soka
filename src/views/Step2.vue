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
        <div class="container">
            <vue2-org-tree
                collapsable
                :data="treeData" 
                :horizontal="false"
                :label-class-name="labelClassName" 
                @on-expand="onExpand"
                @on-node-click="NodeClick"
                @on-node-mouseover="onMouseover"
                @on-node-mouseout="onMouseout"
            />
            <!-- 创建浮窗盒子 -->
            <div v-show="isBoxShow" class="infobox">
                <p>ID:{{ inforBox.id }}</p>
                <p>Name:{{ inforBox.label }}</p>
            </div>

        </div>

    </div>
</template>
<style lang="scss">

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