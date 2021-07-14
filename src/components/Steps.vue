<script>
export default {
  props: {
    currentStep: {
      type: Number,
    },
  },
  data() {
    return {
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
    }
  },
};
</script>
<template lang="">
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
            >
            </el-step>
      </el-steps>
    </div>
</template>
<style lang="">
</style>