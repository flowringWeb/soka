<script>
export default {
  props: {
    active: {
      type: Number,
    },
  },
  data() {
    return {
      currentStep: this.active,
      stepList: [
        {
          title: "step1",
          description: "建立 Project",
          icon: "el-icon-edit",
        },
        {
          title: "step2",
          description: "組織異動",
          icon: "el-icon-upload",
        },
        {
          title: "step3",
          description: "人員異動",
          icon: "el-icon-upload",
        },
        {
          title: "step4",
          description: "內部審核",
          icon: "el-icon-upload",
        },
        {
          title: "step5",
          description: "呈核報告書",
          icon: "el-icon-upload",
        },
        {
          title: "step6",
          description: "報告書簽核",
          icon: "el-icon-edit",
        },
        {
          title: "step7",
          description: "人事任命作業",
          icon: "el-icon-edit",
        },
        {
          title: "step8",
          description: "人事任命簽核",
          icon: "el-icon-edit",
        },
      ],
      hover: false,
      hoverData: {}
    }
  },
  methods: {
    //回上一步
    stepChange(selectStep){
        // console.log(selectStep, this.currentStep);
        if(selectStep < this.currentStep){
            this.currentStep = selectStep;
        }
    },
    //符合當個 step ，顯現回步驟
    mouseOver(selectStep) {
      // console.log(selectStep, this.currentStep);
      if (selectStep === this.currentStep) {
        if (this.currentStep === 0) {
          this.hover = false;
        }else {
          this.hover = true;
        }
      } else {
        this.hover = false;
      }
    },
    mouseLeave(selectStep) {
      this.hover = false;
    }
  }
};
</script>
<template>
    <div>
        <el-steps
            class="mb-md-5"
            :active="currentStep"
            align-center
            finish-status="success"
          >

            <el-step
              v-for="(item, key) in stepList" :key="key" :icon="item.icon"
              @click.native="stepChange(key)"
            >
              <template slot="description">
                <div :id="key" @mouseover="mouseOver(key)" @mouseleave="mouseLeave(key)">
                    <div class="stepNoBtn">
                        <div class="step-title-font">{{ item.title }}</div>
                        <div>{{item.description}}</div>
                        <div class="btnPosition">
                            <el-button size="mini" round plain type="primary" icon="el-icon-edit"
                            v-if="hover === true && currentStep === key">回步驟</el-button>
                        </div>
                    </div>
                </div>
              </template>
            </el-step>
        </el-steps>
    </div>
</template>
<style lang="scss">
  .el-step__description {
    margin: .5rem 0 0 0;
  }

</style>