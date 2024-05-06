<template>
    <div class="dashboard-line-box">
      <div class="dashboard-line-title">
        访问趋势
      </div>
      <div
        ref="echart"
        class="dashboard-line"
      />
    </div>
</template>
<script setup>
  import * as echarts from 'echarts'
  import { nextTick, onMounted, onUnmounted, ref } from 'vue'
  import { useWindowResize } from '@/hooks/use-windows-resize'
  let chart = null
  const echart = ref(null)
  var dataAxis = []

  var data1 = [[13, 12, 15, 16, 17, 18, 20, 13, 12, 19, 20, 15, 16, 17, 18, 20, 13, 12, 15, 16, 17, 18, 20, 13, 12, 15, 16, 17, 18, 20], 
               [13, 12, 15, 17, 18, 20, 13, 12, 19, 20, 15, 16, 17, 18, 21, 13, 12, 15, 16, 17, 18, 20, 13, 12, 15, 16, 14, 18,], 
               [15, 16, 17, 18, 20, 13, 12, 19, 20, 15, 16, 17, 18, 20, 13, 12, 15, 16, 17, 18, 20, 13, 12, 15, 16, 17, 18, 20, 25, 26], 
               [12, 15, 16, 17, 18, 20, 13, 12, 14, 20, 15, 16, 17, 18, 20, 13, 12, 15, 16, 17, 18, 20, 13, 12, 15, 16, 17, 18, 20], 
               [13, 12, 15, 16, 17, 18, 20, 13, 12, 19, 20, 15, 16, 17, 18, 20, 13, 12, 15, 16, 17, 18, 20, 13, 12, 15, 16, 17, 18, 20]]

  var data2 = []
  var data3 = []

  for (var i = 0; i < data1.length; i++){
    var temp1 = []
    var temp2 = []
    var temp3 = []
    for (var j = 0; j < data1[i].length; j++){
        temp1.push(data1[i][j] - 5)
        temp2.push(data1[i][j] - 10)
    }
    data2.push(temp1)
    data3.push(temp2)
  }

  useWindowResize(() => {
    if (!chart) {
      return
    }
    chart.resize()
  })
  
  const initChart = () => {
    if (chart) {
      chart = null
    }
    chart = echarts.init(echart.value)
    setOptions()
  }
  const setOptions = () => {
    chart.setOption({
      grid: {
        left: '40',
        right: '20',
        top: '40',
        bottom: '20',
      },
      xAxis: {
        data: dataAxis,
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        z: 10,
      },
      yAxis: {
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          textStyle: {
            color: '#999',
          },
        },
      },
      dataZoom: [
        {
          type: 'inside',
        },
      ],
      series: [
        {
          type: 'bar',
          barWidth: '40%',
          itemStyle: {
            borderRadius: [5, 5, 0, 0],
            color: '#188df0',
          },
          emphasis: {
            itemStyle: {
              color: '#188df0',
            },
          },
          data: data1,
        },
        {
          type: 'bar',
          barWidth: '40%',
          itemStyle: {
            borderRadius: [5, 5, 0, 0],
            color: '#ff0000',
          },
          emphasis: {
            itemStyle: {
              color: '#ff0000',
            },
          },
          data: data2,
        },
        {
          type: 'bar',
          barWidth: '40%',
          itemStyle: {
            borderRadius: [5, 5, 0, 0],
            color: '#00ff00',
          },
          emphasis: {
            itemStyle: {
              color: '#00ff00',
            },
          },
          data: data3,
        },
      ],
    })
  }
  
  onMounted(async() => {
    await nextTick()
    initChart()
  })
  
  onUnmounted(() => {
    if (!chart) {
      return
    }
    chart.dispose()
    chart = null
  })
</script>

  <style lang="scss" scoped>
  .dashboard-line-box {
    .dashboard-line {
      background-color: #fff;
      height: 360px;
      width: 100%;
    }
    .dashboard-line-title {
      font-weight: 600;
      margin-bottom: 12px;
    }
  }
  </style>
  