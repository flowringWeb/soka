<script>
import Steps from "@/components/Steps.vue";
export default {
  components: {
      Steps
  },
  data() {
    return {
      //pagination
      pageObj: {
        startPage: 0,
        endPage: 0,
        pageLength: 5,
        pageSize: 5,
        currentPage: 1,
      },
      //switch
      value2: "不選定",
      //form 表單
      labelPosition: "left",
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
          type: "success",
          icon: "el-icon-check",
        },
        {
          local: "松山區",
          type: "danger",
          icon: "el-icon-delete",
        },
      ],
      tableData2: [
        {
          depart: "壯年部",
          local: "汐止區",
          name: "ooo",
          value: "不選定",
        },
        {
          depart: "婦女部",
          local: "大安區",
          name: "ooo",
          value: "選定",
        },
      ],
      tableData3Source: [
        {
          check: "",
          depart: "壯年部",
          org: "汐止區/青山地區",
          name: "周oo",
          job: "地區綜合長",
          id: 1,
          type: "success",
          icon: "el-icon-check",
        },
        {
          check: "",
          depart: "青年部",
          org: "汐止區/青山地區",
          name: "莫xx",
          job: "地區部長",
          id: 2,
          type: "danger",
          icon: "el-icon-delete",
        },
        {
          check: "",
          depart: "壯年部",
          org: "汐止區/青山地區",
          name: "周oo",
          job: "地區綜合長",
          id: 3,
          type: "success",
          icon: "el-icon-check",
        },
        {
          check: "",
          depart: "青年部",
          org: "汐止區/青山地區",
          name: "莫xx",
          job: "地區部長",
          id: 4,
          type: "danger",
          icon: "el-icon-delete",
        },
        {
          check: "",
          depart: "壯年部",
          org: "汐止區/青山地區",
          name: "周oo",
          job: "地區綜合長",
          id: 5,
          type: "success",
          icon: "el-icon-check",
        },
        {
          check: "",
          depart: "青年部",
          org: "汐止區/青山地區",
          name: "莫xx",
          job: "地區部長",
          id: 6,
          type: "danger",
          icon: "el-icon-delete",
        },
        {
          check: "",
          depart: "壯年部",
          org: "汐止區/青山地區",
          name: "周oo",
          job: "地區綜合長",
          id: 7,
          type: "success",
          icon: "el-icon-check",
        },
        {
          check: "",
          depart: "青年部",
          org: "汐止區/青山地區",
          name: "莫xx",
          job: "地區部長",
          id: 8,
          type: "danger",
          icon: "el-icon-delete",
        },
        {
          check: "",
          depart: "壯年部",
          org: "汐止區/青山地區",
          name: "周oo",
          job: "地區綜合長",
          id: 9,
          type: "success",
          icon: "el-icon-check",
        },
        {
          check: "",
          depart: "青年部",
          org: "汐止區/青山地區",
          name: "莫xx",
          job: "地區部長",
          id: 10,
          type: "danger",
          icon: "el-icon-delete",
        },
        {
          check: "",
          depart: "壯年部",
          org: "汐止區/青山地區",
          name: "周oo",
          job: "地區綜合長",
          id: 11,
          type: "success",
          icon: "el-icon-check",
        },
        {
          check: "",
          depart: "青年部",
          org: "汐止區/青山地區",
          name: "莫xx",
          job: "地區部長",
          id: 12,
          type: "danger",
          icon: "el-icon-delete",
        },
      ],
      tableData3: [],
      tableData4: [
        {
          check: "",
          depart: "壯年部",
          org: "汐止區/青山地區",
          name: "周oo",
          job: "地區綜合長",
          checked1: true,
          checked2: false,
          checked3: true,
          state: "25員撥到A組",
          type: "danger",
          icon: "el-icon-delete",
        },
        {
          check: "",
          depart: "壯年部",
          org: "汐止區/青山地區",
          name: "莫xx",
          job: "地區部長",
          checked1: false,
          checked2: false,
          checked3: true,
          state: "25員撥到B組",
          type: "danger",
          icon: "el-icon-delete",
        },
      ],
      //steps
      active: 0,
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
    };
  },
  methods: {
    //參數務必用{}解構
    tableRowStyle({ row, rowIndex }) {
      // console.log(row.local, rowIndex);
      let stylejson = {};
      if (rowIndex === 1) {
        stylejson.color = "brown";
        return stylejson;
      } else {
        return "";
      }
    },
    //switch change
    changeStatus($event, row, index) {
      console.log($event, row, index);
    },
    //steps
    before() {
      if (this.active-- < 0) {
        this.active = 0;
      }
    },
    next() {
      if (this.active++ > 7) {
        this.active = 0;
        // alert('恭喜完成')
      }
    },
    //表格裡的icon 切換 => tableData4
    toggle(row) {
      // console.log(row.id);
      if (row.type == "success") {
        row.type = "danger";
        row.icon = "el-icon-delete";
      } else {
        row.type = "success";
        row.icon = "el-icon-check";
      }
    },
    //pagination 分頁 size
    // handleSizeChange(val) {
    //   console.log(val);
    //   this.pageObj.pageSize = val;
    //   this.pageObj.currentPage = 1;
    //   this.bindingData();
    // },
    handleCurrentChange(val) {
      let totalLength = this.tableData3Source.length;
      let lastPage = parseInt(totalLength/this.pageObj.pageSize) + 1;
      let lastPageCount = Number(totalLength%this.pageObj.pageSize);
      if ( val == lastPage) {
        console.log('點選到最後一頁');
        this.pageObj.pageLength = lastPageCount;
      } else {
        this.pageObj.pageLength = this.pageObj.pageSize;
      }
      this.pageObj.currentPage = val;
      this.bindingData();
    },
    bindingData() {
      let startIndex = (this.pageObj.currentPage - 1) * this.pageObj.pageSize;
      this.tableData3 = this.tableData3Source.slice(
        startIndex,
        startIndex + this.pageObj.pageSize
      );
      let totalLength = this.tableData3Source.length;
      let lastPage = parseInt(totalLength/this.pageObj.pageSize) + 1;
      let lastPageCount = Number(totalLength%this.pageObj.pageSize);

      this.pageObj.startPage = startIndex + 1;
      if (this.pageObj.currentPage == lastPage ) {
        this.pageObj.endPage = startIndex + lastPageCount;
      } else {
        this.pageObj.endPage = startIndex + this.pageObj.pageSize;
      }
    },
  },
  mounted: function () {
    this.bindingData();
  },
};
</script>

<template>
  <!-- ref= "form" 即使col不同也可以在同個 form 裡 -->
  <div>
    <Steps :active="active"></Steps>

    <div class="title">STEP 1: 組織劃分- 建立 Project</div>
    <div class="stepForm">
      <el-row :gutter="10" type="flex">
        <el-col :span="8">
          <el-form
            ref="form"
            :model="form"
            :inline="true"
            label-width="auto"
            size="medium"
            :label-position="labelPosition"
          >
            <el-form-item label="組織劃分案名:">
              <el-input v-model="form.orgName"
                  type="text"
                  maxlength="20"
                  clearable>
              </el-input>
            </el-form-item>
            <el-form-item label="組織劃分案編號:">
              <el-input v-model.number="form.orgnNo" 
                clearable>
              </el-input>
            </el-form-item>
            <el-form-item label="劃分建議生效月:">
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder="請選擇日期"
                  v-model="form.date1"
                ></el-date-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="全區會:">
              <el-input v-model="form.dct" clearable></el-input>
            </el-form-item>
            <el-form-item label="提報單位(凍結區域頂點)">
              <el-select
                v-model="form.depart"
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
            <el-form-item label="劃分案負責人:">
              <el-input v-model="form.orgPerson" clearable></el-input>
            </el-form-item>
            <el-form-item label="立案時間:">
                <el-time-picker
                  placeholder="請選擇時間:"
                  v-model="form.date2"
                ></el-time-picker>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="8">
          <el-form ref="form" :model="form" :inline="true" label-width="auto">
            <el-form-item label="組織劃分案說明:">
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
            <el-form-item label="備註:">
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
      <el-row class="mb-4">
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
                  :type="scope.row.type"
                  :icon="scope.row.icon"
                  circle
                  size="small"
                ></el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
        <el-col :span="12">
          <h5 class="ml-2">劃分案成員 (由凍結頂點篩選出劃分案參與成員)</h5>
          <el-table :data="tableData2">
            <el-table-column prop="depart" label="部門" align="center">
            </el-table-column>
            <el-table-column prop="local" label="職稱" align="center">
            </el-table-column>
            <el-table-column prop="name" label="姓名" align="center">
            </el-table-column>
            <el-table-column label="劃分案負責人" align="center">
              <template slot-scope="scope">
                <el-tooltip :content="scope.row.value" placement="top">
                  <el-switch
                    v-model="scope.row.value"
                    active-color="#13ce66"
                    inactive-color="#ccc"
                    active-value="選定"
                    inactive-value="不選定"
                    @change="changeStatus($event, scope.row, scope.$index)"
                  >
                  </el-switch>
                </el-tooltip>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <h4 class="mb-3">指派協助人員</h4>
          <el-row :gutter="0" type="flex" justify="center" align="top">
            <el-col :span="8">
              <el-form
                ref="form"
                :model="form"
                :inline="true"
                label-width="auto"
                size="large"
                :label-position="labelPosition"
              >
                <el-form-item label="協助人部門">
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
                </el-form-item>
                <el-form-item label="協助人部別">
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
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="8">
              <el-form>
                <el-form-item label="協助人姓名">
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
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="8">
              <el-form>
                <el-form-item label="協助人會員編號">
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
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="20">
          <div class="mb-4">
            <h5 class="ml-2">人員搜尋清單</h5>
            <div>
              <el-table :data="tableData3" class="mb-3" :header-cell-style="{ background: '#eee' }">
                <el-table-column type="selection" label="選擇" align="center">
                </el-table-column>
                <el-table-column prop="depart" label="部別" align="center">
                </el-table-column>
                <el-table-column
                  prop="org"
                  label="組織 / 單位名稱"
                  show-overflow-tooltip
                  align="center"
                >
                </el-table-column>
                <el-table-column prop="name" label="姓名" align="center">
                </el-table-column>
                <el-table-column prop="job" label="擔任職務" align="center">
                </el-table-column>
                <el-table-column prop="id" label="會員編號" align="center">
                </el-table-column>
                <el-table-column label="單筆加入協助清單" align="center">
                  <template slot-scope="scope">
                    <el-button
                      :type="scope.row.type"
                      :icon="scope.row.icon"
                      circle
                      size="small"
                      @click="toggle(scope.row)"
                    ></el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="pagination">
                <el-pagination
                  @current-change="handleCurrentChange"
                  :current-page.sync="pageObj.currentPage"
                  :page-size="pageObj.pageSize"
                  layout="prev, pager, next"
                  :total="tableData3Source.length"
                >
                </el-pagination>
                <div>{{ pageObj.pageSize }} 筆數 / 頁</div>
                <div>
                  目前顯示第{{ pageObj.startPage }}~ {{ pageObj.endPage }}筆，共
                  {{ pageObj.pageLength }} 筆
                </div>
              </div>
            </div>

            <el-button type="primary">加入協助清單</el-button>
          </div>
        </el-col>
        <el-col :span="20">
          <h5 class="ml-2">協助人員清單</h5>
          <el-table :data="tableData4" class="mb-3">
            <el-table-column type="selection" label="選擇" align="center">
            </el-table-column>
            <el-table-column prop="depart" label="部別" align="center">
            </el-table-column>
            <el-table-column
              prop="org"
              label="組織 / 單位名稱"
              show-overflow-tooltip
              align="center"
            >
            </el-table-column>
            <el-table-column prop="name" label="姓名" align="center">
            </el-table-column>
            <el-table-column prop="job" label="擔任職務" align="center">
            </el-table-column>
            <el-table-column label="協作階段權限" align="center">
              <template slot-scope="scope">
                <el-checkbox v-model="scope.row.checked1"
                  >Step2 組織異動</el-checkbox
                >
                <el-checkbox v-model="scope.row.checked2"
                  >Step3 人員異動</el-checkbox
                >
                <el-checkbox v-model="scope.row.checked3"
                  >Step7 人事命令</el-checkbox
                >
              </template>
            </el-table-column>
            <el-table-column prop="state" label="協作說明" align="center">
            </el-table-column>
            <el-table-column label="刪除" align="center">
              <template slot-scope="scope">
                <el-button
                  :type="scope.row.type"
                  :icon="scope.row.icon"
                  circle
                  size="small"
                ></el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="pagination">
            <el-pagination
              class=""
              @current-change="handleCurrentChange"
              :current-page.sync="pageObj.currentPage"
              :page-size="pageObj.pageSize"
              layout="prev, pager, next"
              :total="tableData3Source.length"
            >
            </el-pagination>
            <div>{{ pageObj.pageSize }} 筆數 / 頁</div>
            <div>
              目前顯示第{{ pageObj.startPage }}~ {{ pageObj.endPage }}筆，共
              {{ pageObj.pageSize }} 筆
            </div>
          </div>
          <el-button type="primary">刪除</el-button>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-button type="primary">建立 Project</el-button>
      </el-row>
    </div>

    <!-- >>>>>>> 不一樣的 el-form layout -->

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
.stepForm {
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

.pagination {
  padding: 0 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ccc;
}

// .el-input {
//   /deep/ .el-input__inner {
//       width: 15vw;
//     }
//   }
</style>




