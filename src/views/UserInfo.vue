<template>
  <div>
    <SearchPanel ref="getSearchData" v-on:search-down="tiggerSearch"></SearchPanel>
    <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe style="width: 100%">
      <el-table-column prop="name" label="姓名">
      </el-table-column>
      <el-table-column prop="gender" label="性别">
      </el-table-column>
      <el-table-column prop="ctfId" label="身份证号">
      </el-table-column>
      <el-table-column prop="mobile" label="手机">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
      <el-table-column prop="birthday" label="生日">
      </el-table-column>
      <el-table-column prop="district2" label="国籍">
      </el-table-column>
      <el-table-column prop="email" label="邮箱">
      </el-table-column>
      <el-table-column prop="district2" label="国籍">
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</template>

<script>
  import SearchPanel from '@/components/SearchPanel.vue'
  export default {
    components: {
      SearchPanel
    },
    mounted() {
      this.loadData();
    },
    data() {
      return {
        currentPage: 1, //初始页
        pagesize: 10, //    每页的数据
        tableData: []
      }
    },
    methods: {
      loadData() {
        const _this = this;
        //在then的内部不能使用Vue的实例化的this, 因为在内部 this 没有被绑定
        this.$http.get('/andybaby/queryUserInfo?searchParam=').then(function(result) {
          console.log(result.data)
          _this.tableData = result.data;
        })
      },
      tiggerSearch() {
        console.log("trigger search-down...")
        const _this = this;
        let searchParam = this.$refs.getSearchData.input;
        //在then的内部不能使用Vue的实例化的this, 因为在内部 this 没有被绑定
        this.$http.get('/andybaby/queryUserInfo?searchParam=' + searchParam).then(function(result) {
          console.log(result.data)
          _this.tableData = result.data;
        })
      },
      handleSizeChange(val){
           this.pagesize = val;
      },
      handleCurrentChange(val){
           this.currentPage = val;
      }
    }
  }
</script>
