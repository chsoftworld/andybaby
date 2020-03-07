<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <el-menu router :default-active="$route.path" default-active="2" class="el-menu-vertical-demo" @open="handleOpen"
          @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" style="border-right-width: 0px">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>You查</span>
            </template>
            <el-menu-item index="/queryUser">游客查询</el-menu-item>
            <el-menu-item index="/userHotMap">VIP查询</el-menu-item>
            <el-menu-item index="/vonic">Vonic组件</el-menu-item>
            <el-menu-item index="/cros">CROS</el-menu-item>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">大数据</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <h2>You查用户信息系统</h2>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  html,
  body,
  #app,
  .el-container {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 30px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }

  body>.el-container {
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
