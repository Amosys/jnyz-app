<template>
  <div class="dashboard-line-box">
    <div
      id="echart"
      class="dashboard-line"
    ></div>
  </div>
</template>
<script >
import * as echarts from 'echarts'
import { nextTick, onMounted, onUnmounted, ref, watchEffect, watch} from 'vue'
import { useWindowResize } from '@/hooks/use-windows-resize'

export default{
  name: 'ChartLine',
  props: {
    mode: {
      type: Number,
      default: 0
    },
    detail: {
      type: Object,
      default: {
        dayCount: 30,
        seriesCount: 3,
        lable: ['对公存款', '储蓄存款', '活期存款'],
        color: ['#188df0', '#52c41a', '#f5222d'],
        data: [
        ]
      }
    }
  },
  setup(props) {
    let chart = null
    const echart = ref(null)
    
    watch(props, ()=>{
      
      setOptions()
    })
    onMounted(async() => {
      await nextTick()
      initChart()
    })

    onUnmounted(async() => {
      if (!chart) {
        return
      }
      chart.dispose()
      chart = null
    })

    const numberToDate = (dt) =>{
      var str = dt.toString()
      return str.slice(0, 4) + '/' + str.slice(4, 6) + '/' + str.slice(6, 8);
    }
    const initChart = () => {
      if (chart) {
        chart = null
      }
      chart = echarts.init(document.getElementById('echart'))
      
    }
    const setOptions = () => {
      var dataAxis = []
      var series = []
      console.log(props.detail)
      console.log(chart)
      for (var ser = 0; ser < props.detail.seriesCount; ser++){
        var data = []
        for (var day = 0; day < props.detail.data[ser].length; day++){
          data.push(props.detail.data[ser][day].val)
        }
        series.push({
          type: 'bar',
          barWidth: '40%',
          itemStyle: {
            borderRadius: [1, 1, 0, 0],
            color: props.detail.color[ser],
          },
          emphasis: {
            itemStyle: {
              color: props.detail.color[ser],
            },
          },
          data: data,
          stack: 'x',
        })
      }
      for (var day = 0; day < props.detail.data[0].length; day++){
        dataAxis.push(numberToDate(props.detail.data[0][day].date))
      }

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
          z: 10
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
          }
        },
        dataZoom: [
          {
            type: 'inside',
          },
        ],
        series: series
      })
    }
  },
}
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
