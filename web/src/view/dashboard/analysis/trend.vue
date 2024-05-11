<template>
    <div class="chart-trend">
      {{ term }}
      <span v-if="isPer">{{ percentage }}%</span>
      <span v-if="!isPer">{{ value }}{{ pValue }}</span>
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
      isPer: {
        type: Boolean,
        default: true,
        required: true
      },
      percentage: {
        type: Number,
        default: 0
      },
      value: {
        type: Number,
        default: 0
      },
      pValue: {
        type: String,
        default: '元'
      }
    },
    data () {
      var f = ''
      if (this.isPer){
        f = this.percentage >= 0 ? 'up' : 'down'
      }
      else {
        f = this.value >= 0 ? 'up' : 'down'
      }
      return {
        trend: f == 'up' ? "Top" : "Bottom",
        flag: f
      }
    },
    created () {
      var f = ''
      if (this.isPer){
        f = this.percentage >= 0 ? 'up' : 'down'
      }
      else {
        f = this.value >= 0 ? 'up' : 'down'
      }
      return {
        trend: f == 'up' ? "Top" : "Bottom",
        flag: f
      }
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
  