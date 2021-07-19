<script>
import {VueOkrTree} from 'vue-okr-tree';
export default {
    components: {
        VueOkrTree,
    },
    data () {
      return {
        orgData: [{
          id: 1,
          label: '桃園東區女子部長',
          content: '許xx 34',
          children: [{
            id: 2,
            label: '桃園東區女子部長',
            content: '許xx 34',
            children: [{
              id: 3,
              label: '研发-前端',
              content: '許xx 34',
            }, {
              id: 4,
              label: '研发-后端',
              content: '許xx 34',
            }, {
              id: 5,
              label: 'UI 设计',
              content: '許xx 34',
            }]
          }, {
            id: 6,
            label: '销售部',
            content: '許xx 34',
            children: [{
                id: 7,
                label: '销售一部',
                content: '許xx 34',
              },{
                id: 8,
                label: '销售二部',
                content: '許xx 34',
              }
            ]
          },{
            id: 9,
            label: '财务部',
            content: '許xx 34',
          }]
        }],
        testLeftData: [{
          id: 1,
          label: 'xxx科技有有限公司',
          content: '許xx 34',
          children: [{
            id: 12,
            label: '(左)产品研发部',
            content: '許xx 34',
            children: [{
              id: 13,
              label: '(左)研发-前端',
              content: '許xx 34',
            }, {
              id: 14,
              label: '(左)研发-后端',
              content: '許xx 34',
            }, {
              id: 15,
              label: '(左)UI 设计',
              content: '許xx 34',
            }]
          }, {
            id: 16,
            label: '(左)销售部',
            children: [{
                id: 17,
                label: '(左)销售一部',
                content: '許xx 34',
              },{
                id: 18,
                label: '(左)销售二部',
                content: '許xx 34',
              }
            ]
          },{
            id: 19,
            label: '(左)财务部',
            content: '这是一个有活力的财务部',
          }]
        }],
      }
    },
    methods: {
        renderContent(h, node) {
            return (
                <div class={'diy-wrapper', node.isCurrent ? 'current-select' : ''} >
                    <div class="diy-con-name">{node.data.label}</div>
                    <div class="diy-con-content">{node.data.content}</div>
                </div>
            )
        }
    }
}
</script>
<template>
    <div class="wrapper">
        <vue-okr-tree
        :data="orgData"
        show-collapsable
        default-expand-all
        :render-content="renderContent"
        
        >

        </vue-okr-tree>
    </div>
</template>
<style lang="scss">
    .wrapper {
        width: 90vw;
        margin-left: auto;
        margin-right: auto;
        // overflow-y: auto;
    }
</style>