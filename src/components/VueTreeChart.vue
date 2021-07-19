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
            }
        }
    }
</script>
<template>
    <div>
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
    </div>
</template>
<style lang="scss">
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>