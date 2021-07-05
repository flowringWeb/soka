<script>
export default {
  data() {
    return {
      labelPosition:"left",
      form: {
        orgName: "",
        orgnNo:"",
        date1: "",
        dct: "",
        depart:"",
        orgPerson:"",
        date2: "",
        state:"",
        note:"",
      },
    };
  },
};
</script>

<template>
  <!-- ref= "form" 即使col不同也可以在同個 form 裡 -->
  <div>
    <div class="title">STEP 1: 組織劃分- 建立 Project</div>
    <div class="step1Form">
      <el-row :gutter="10" type="flex">
        <el-col :span="8">
          <el-form ref="form" :model="form" :inline="true" label-width="auto" size="large" :label-position="labelPosition">
            <el-form-item label="組織劃分案名">
              <el-input v-model="form.orgName"></el-input>
            </el-form-item>
            <el-form-item label="組織劃分案編號">
              <el-input v-model.number="form.orgnNo"></el-input>
            </el-form-item>
            <el-form-item label="劃分建議生效月">
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder="請選擇日期"
                  v-model="form.date1"
                ></el-date-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="全區會">
              <el-input v-model="form.dct"></el-input>
            </el-form-item>
            <el-form-item label="提報單位(凍結區域頂點)">
              <el-select v-model="form.depart" placeholder="">``
                <el-option label="Zone one" value="shanghai"></el-option>
                <el-option label="Zone two" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="劃分案負責人">
              <el-input v-model="form.orgPerson"></el-input>
            </el-form-item>
            <el-form-item label="立案時間">
              <el-col :span="11">
                <el-time-picker
                  placeholder="請選擇時間"
                  v-model="form.date2"
                ></el-time-picker>
              </el-col>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="8">
          <el-form ref="form" :model="form" :inline="true" label-width="auto">
            <el-form-item label="組織劃分案說明">
              <el-input type="textarea" v-model="form.state"></el-input>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="8">
          <el-form ref="form" :model="form" :inline="true" label-width="auto">
            <el-form-item label="備註">
              <el-input type="textarea" v-model="form.note"></el-input>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.title {
  text-align: center;
  color: #fff;
  background-color: #409af2;
  padding: 1rem;
}
.step1Form {
  padding: 3rem 1rem;
}
</style>




