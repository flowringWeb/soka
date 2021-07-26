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
          icon2: "el-icon-delete"
        },
        {
          title: "step2",
          description: "組織異動",
          icon: "el-icon-upload",
          icon2: "el-icon-delete"
        },
        {
          title: "step3",
          description: "人員異動",
          icon: "el-icon-upload",
          icon2: "el-icon-delete"
        },
        {
          title: "step4",
          description: "內部審核",
          icon: "el-icon-upload",
          icon2: "el-icon-delete"
        },
        {
          title: "step5",
          description: "呈核報告書",
          icon: "el-icon-upload",
          icon2: "el-icon-delete"
        },
        {
          title: "step6",
          description: "報告書簽核",
          icon: "el-icon-edit",
          icon2: "el-icon-delete"
        },
        {
          title: "step7",
          description: "人事任命作業",
          icon: "el-icon-edit",
          icon2: "el-icon-delete"
        },
        {
          title: "step8",
          description: "人事任命簽核",
          icon: "el-icon-edit",
          icon2: "el-icon-delete"
        },
      ],
      hover: false,
    }
  },
  methods: {
    //回上一步
    stepChange(selectStep){
        // console.log(selectStep, this.currentStep);
        if(selectStep < this.currentStep){
            this.currentStep = selectStep;
        }
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
              v-for="(item, index) in stepList"
              :title="item.title"
              :description="item.description"
              :icon="item.icon"
              :key="index"
              @click.native="stepChange(index)"
              @mouseover.native="hover = true"
              @mouseleave.native="hover = false"
            >
            </el-step>  
      </el-steps>
      <el-button v-show="hover" type="primary" icon="el-icon-edit" plain round>回步驟</el-button>        
    </div>
</template>
<style lang="scss">

</style>