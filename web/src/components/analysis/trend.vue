<template>
    <div class="chart-trend">
      {{ term }}
      <span>{{ rate }}%</span>
      <span :class="['trend-icon', flag]">
        <el-icon>
            <component :is="'caret' + trend" />
        </el-icon>
      </span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Trend',
    props: {
      term: {
        type: String,
        default: '',
        required: true
      },
      percentage: {
        type: String,
        default: ''
      },
      flag: {
        type: String,
        default: null
      },
    },
    data () {
      return {
        trend: this.flag == 'up' ? 'Top' : 'Bottom',
        rate: this.percentage
      }
    },
    created () {

      this.trend = this.flag == 'up' ? 'Top' : 'Bottom',
      this.rate = this.percentage
    }
  }
  </script>
  
  <style lang="less" scoped>
    .chart-trend {
      display: inline-block;
      font-size: 14px;
      line-height: 22px;
  
      .trend-icon {
        font-size: 12px;
  
        &.up, &.down {
          margin-left: 4px;
          position: relative;
          top: 1px;
  
          i {
            font-size: 12px;
            transform: scale(.83);
          }
        }
  
        &.up {
          color: #f5222d;
        }
        &.down {
          color: #52c41a;
          top: -1px;
        }
      }
    }
  </style>
  