<template>
  <div>
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
    <div id="nandingGel" :style="{width: '300px', height: '300px'}"></div>
  </div>

</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'));
        let nandingGel = this.$echarts.init(document.getElementById('nandingGel'));
        // 绘制图表
        myChart.setOption({
          title: {
            text: '在Vue中使用echarts'
          },
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
        nandingGel.setOption({
          series: [{
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data: [{
                value: 235,
                name: '视频广告'
              },
              {
                value: 274,
                name: '联盟广告'
              },
              {
                value: 310,
                name: '邮件营销'
              },
              {
                value: 335,
                name: '直接访问'
              },
              {
                value: 400,
                name: '搜索引擎'
              }
            ]
          }]
        })
      }
    }
  }
</script>

<style>
</style>
