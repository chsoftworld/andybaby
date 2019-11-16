<template>
  <div id="app">
    <el-container class="el-container">
      <el-aside width="200px">
        <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
          点我打开
        </el-button>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
        <el-drawer :visible.sync="drawer"></el-drawer>
      </el-container>
    </el-container>
  </div>
</template>

<script>

    export default {
        name:'app',
        data() {
            return {
                drawer: false,
                direction: 'rtl',
            };
        }
    }
</script>

<style>
  html,body{
    margin: 0;
    padding: 0;
    height: 100%;
  }

  #app,.el-container{
    height: 100%;
  }

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    height: 15%;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    height: 100%;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    height: 70%;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>

