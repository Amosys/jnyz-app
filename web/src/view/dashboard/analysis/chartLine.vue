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
import elementResizeDetectorMaker from 'element-resize-detector' // 尺寸监听组件

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

    useWindowResize(() => {
      if (!chart) {
        return
      }
      chart.resize()
    })

    const numberToDate = (dt) =>{
      var str = dt.toString()
      return str.slice(0, 4) + '/' + str.slice(4, 6) + '/' + str.slice(6, 8);
    }
    const initChart = () => {
      if (chart) {
        chart = null
      }
      var ct = document.getElementById('echart')
      chart = echarts.init(ct)
      
      let erd  = elementResizeDetectorMaker({
        strategy: "scroll",
        callOnAdd: true,
      })
      erd.listenTo(ct, function(element){
        chart.resize()
      })
    }
    const setOptions = () => {
      var dataAxis = []
      var series = []
      var legend = []
      let detail = props.detail.detail
      console.log(detail)
      for (var ser = 0; ser < detail.seriesCount; ser++){
        var data = []
        data = detail.data[ser].map(dt => (dt.val))
        series.push({
          name: detail.lable[ser],
          type: 'bar',
          barWidth: '15%',
          barGap: '60%',
          itemStyle: {
            borderRadius: [1, 1, 0, 0],
            color: detail.color[ser],
          },
          emphasis: {
            itemStyle: {
              color: detail.color[ser],
            },
          },
          data: data,
        })
      }
      dataAxis = detail.data[0].map(dt => (numberToDate(dt.date)))

      chart.setOption({
        grid: {
          left: '1%',
          right: '20',
          top: '40',
          bottom: '20',
          containLabel: true,
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
            width:'60'
          },
          scale: true,
          name: `金额(${detail.unit})`
        },
        dataZoom: [
          {
            type: 'inside',
          },
        ],
        legend: {
        },
        tooltip: {
          trigger: 'item',
          axisPointer: {
              type: 'shadow'
          },
          formatter: `{a}<br/>{b}：{c}${detail.unit}`,
        },
        series: series
      }, true)
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
