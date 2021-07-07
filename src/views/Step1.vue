<script>
export default {
  data() {
    return {
      labelPosition: "left",
      currentRow: null,
      form: {
        orgName: "",
        orgnNo: "",
        date1: "",
        dct: "",
        depart: [],
        orgPerson: "",
        date2: "",
        state: "",
        note: "",
      },
      options: [
        {
          value: "HTML",
          label: "HTML",
        },
        {
          value: "CSS",
          label: "CSS",
        },
        {
          value: "JavaScript",
          label: "JavaScript",
        },
      ],
      tableData: [
        {
          local: "汐止區",
          icon: "",
        },
        {
          local: "松山區",
          icon: "",
        },
      ],
    };
  },
  methods: {
    //參數務必要{}解構
    tableRowStyle({row, rowIndex} ) {
      // console.log(row.local, rowIndex);
      let stylejson = {};
      if (rowIndex === 1) {
        stylejson.color = "brown";
        return stylejson;
      } else {
        return "";
      }
    },
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
          <el-form
            ref="form"
            :model="form"
            :inline="true"
            label-width="auto"
            size="large"
            :label-position="labelPosition"
          >
            <el-form-item label="組織劃分案名">
              <el-input v-model="form.orgName" clearable></el-input>
            </el-form-item>
            <el-form-item label="組織劃分案編號">
              <el-input v-model.number="form.orgnNo" clearable></el-input>
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
              <el-input v-model="form.dct" clearable></el-input>
            </el-form-item>
            <el-form-item label="提報單位(凍結區域頂點)">
              <el-select
                v-model="form.depart"
                filterable
                allow-create
                placeholder="請選擇"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="劃分案負責人">
              <el-input v-model="form.orgPerson" clearable></el-input>
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
              <el-input
                type="textarea"
                v-model="form.state"
                clearable
                maxlength="150"
                show-word-limit
                :autosize="{ minRows: 5, maxRows: 8 }"
              >
              </el-input>
            </el-form-item>
          </el-form>
          
        </el-col>
        <el-col :span="8">
          <el-form ref="form" :model="form" :inline="true" label-width="auto">
            <el-form-item label="備註">
              <el-input
                type="textarea"
                v-model="form.note"
                clearable
                maxlength="150"
                show-word-limit
                :autosize="{ minRows: 5, maxRows: 8 }"
              ></el-input>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div>
            <h5>劃分範圍 (人事異動範圍) (凍結區域)</h5>
            <el-select
              class="select"
              v-model="form.depart"
              filterable
              allow-create
              placeholder="請選擇"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <el-button
              type="success"
              icon="el-icon-check"
              circle
              size="small"
            ></el-button>
          </div>
          <el-table :data="tableData" :row-style="tableRowStyle">
            <el-table-column prop="local" label="區域" align="center">
            </el-table-column>
            <el-table-column prop="icon" label="刪除 / 新增" align="center">
              <template slot-scope="scope">
                <el-button
                  type="danger"
                  icon="el-icon-delete"
                  circle
                  size="small"
                ></el-button>
                {{ scope.row.icon }}
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </div>

    <!-- >>>>>>> 不一樣的 layout -->

    <!-- <div class="step1Form">
      <el-row :gutter="10" type="flex">
        <el-form
          ref="form"
          :model="form"
          :inline="true"
          label-width="auto"
          size="large"
          :label-position="labelPosition"
        >
          <el-col :span="8">
            <el-form-item label="組織劃分案名">
              <el-input v-model="form.orgName" clearable></el-input>
            </el-form-item>
            <el-form-item label="組織劃分案編號">
              <el-input v-model.number="form.orgnNo" clearable></el-input>
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
              <el-input v-model="form.dct" clearable></el-input>
            </el-form-item>
            <el-form-item label="提報單位(凍結區域頂點)">
              <el-select
                v-model="form.depart"
                filterable
                allow-create
                placeholder="請選擇"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="劃分案負責人">
              <el-input v-model="form.orgPerson" clearable></el-input>
            </el-form-item>
            <el-form-item label="立案時間">
              <el-col :span="11">
                <el-time-picker
                  placeholder="請選擇時間"
                  v-model="form.date2"
                ></el-time-picker>
              </el-col>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="組織劃分案說明">
              <el-input
                type="textarea"
                v-model="form.state"
                clearable
                maxlength="150"
                show-word-limit
                :autosize="{ minRows: 5, maxRows: 8 }"
              >
              </el-input>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="備註">
              <el-input
                type="textarea"
                v-model="form.note"
                clearable
                maxlength="150"
                show-word-limit
                :autosize="{ minRows: 5, maxRows: 8 }"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-form>
      </el-row>
    </div> -->
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

.select {
  margin-right: 1rem;
}

h5 {
  margin-bottom: 0.5rem;
  padding: 0.5rem 0.1rem;
  background-color: #ccc;
}

// .el-input {
//   /deep/ .el-input__inner {
//       width: 15vw;
//     }
//   }
</style>




