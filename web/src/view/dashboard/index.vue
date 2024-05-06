<template>
  <div class="page">
    <el-row :gutter="24">
      <el-col v-for="card in toolCards" :sm="24" :md="8" :xl="8"  :style="{ marginTop: '12px'}">
        <ChartCard :title=card.title :total=card.total>
          <div>
            <trend :isPer=false style="margin-right: 16px;" term="较昨日" :value=card.c2d>
            </trend>
            <trend :isPer=false style="margin-right: 16px;" term="较年初" :value=card.c2by>
            </trend>
          </div>
          <template slot="footer">较年初
            <span>￥ 234.56</span></template>
        </ChartCard>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :xs="24" :sm="24" :xl="24">
        <div class="gva-card-box">
          <div class="gva-card">
            <el-tabs v-model="activeName" type="card">
              <span v-for="detail in detailData" >
                <el-tab-pane :label=detail.label :name=detail.name>
                  {{ detail.label }}
                  <ChartLine :detail=detail.detail />
                </el-tab-pane>
              </span>
            </el-tabs>  
            <div class="date-picker">
              <el-date-picker
                v-model="selDate"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :append-to-body=false
                :editable=false
                :disabled-date=disabledDate
                @change="datePickerChange"
                value-format="YYYYMMDD">
              </el-date-picker>
            </div>
            <div class="institution-selecter">
              <el-select v-model="curInstitution" filterable placeholder="请选择">
                <el-option
                  v-for="item in institutionOption"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import ChartCard from '@/view/dashboard/analysis/chartCard.vue'
import Trend from '@/view/dashboard/analysis/trend.vue'
import ChartLine from '@/view/dashboard/analysis/chartLine.vue'
import { formatTimeToStr } from '@/utils/date'
import { useUserStore } from '@/pinia/modules/user'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  createDALData,
  findDALData,
  getDALDataList,
} from '@/api/dataDAL'
import {
  getInstitutionList
} from '@/api/institution'

const userStore = useUserStore()
const toolCards = ref([])
const detailData = ref([
  {
    label: '存款',
    name: 'deposit',
    detail: {
      dayCount: 0,
      seriesCount: 0,
      lable: [],
      color: [],
      data: []
    }
  },
  {
    label: '贷款',
    name: 'loan',
    detail: {
      dayCount: 0,
      seriesCount: 0,
      lable: [],
      color: [],
      data: []
    }
  }
])
const activeName = ref('存款')
const dalData = ref({})
const selDate = ref([formatTimeToStr(new Date(Date.now() - 8 * 8.64e7), "yyyyMMdd"),
   formatTimeToStr(new Date(Date.now() - 8.64e7), "yyyyMMdd")])
const disabledDate =  (time) => {
  return time.getTime() >= Date.now() - 8.64e7
}

const institutionInfo = ref([])
const institutionOption = ref([])
const curInstitution = ref()

const datePickerChange = (date) =>{
  console.log(date)
  getDetailData(Number(date[0]), Number(date[1]))
}

// 查询
const getData = async() => {
  //各项存款
  var res = await findDALData("depositSub", {branch: userStore.userInfo.institutionId})
  if (res.code == 0){
    const deposit = res.data.reDepositSub
    toolCards.value.push({
      title: "各项存款",
      total: deposit.DBAL,
      c2d: deposit.DBAL_C2D,
      c2by: deposit.DBAL_C2BY,
      c2byp: deposit.DBAL_INCP_C2BY,
    })
  }
  //获取各项贷款款数据
  res = await findDALData("loanSub", {branch: userStore.userInfo.institutionId})
  if (res.code == 0){
    const loan = res.data.reLoanSub
    toolCards.value.push({
      title: "各项贷款",
      total: loan.LBAL,
      c2d: loan.LBAL_C2D,
      c2by: loan.LBAL_C2BY,
      c2byp: loan.LBAL_INCP_C2BY,
    })
  }
}
const getDetailData = async(startDate, endDate) => {
  const depositList = [
    {type: 'depositDetailCorp', lable: '对公存款'},
    {type: 'depositDetailSave', lable: '储蓄存款'},
    {type: 'depositDetailCur', lable: '活期存款'}
  ]
  const loanList = [
    {type: 'loanDetailCorp', lable: '对公贷款'},
    {type: 'loanDetailPers', lable: '个人贷款'},
  ]
  const color = ['#188df0', '#52c41a', '#f5222d']

  //存款
  detailData.value[0].detail.seriesCount = 0
  detailData.value[0].detail.lable = []
  detailData.value[0].detail.color = []
  detailData.value[0].detail.data = []
  for (var dep in depositList){
    var res = await getDALDataList(depositList[dep].type, 
      {startDate: startDate, endDate: endDate, branch: userStore.userInfo.institutionId, page: 1, pageSize: 999})
    if (res.code == 0 && res.data.total > 0){
      detailData.value[0].detail.dayCount = res.data.total
      detailData.value[0].detail.seriesCount += 1
      detailData.value[0].detail.lable.push(depositList[dep].lable)
      detailData.value[0].detail.color.push(color[dep])

      var val = []
      for (var l in res.data.list){
        val.push({
          date: res.data.list[l].DT,
          val: res.data.list[l].DBAL
        })
      }
      detailData.value[0].detail.data.push(val)
    }
  }
  //贷款
  detailData.value[1].detail.seriesCount = 0
  detailData.value[1].detail.lable = []
  detailData.value[1].detail.color = []
  detailData.value[1].detail.data = []
  for (var loan in loanList){
    var res = await getDALDataList(loanList[loan].type, 
      {startDate: startDate, endDate: endDate, branch: userStore.userInfo.institutionId, page: 1, pageSize: 999})
    if (res.code == 0 && res.data.total > 0){
      detailData.value[1].detail.dayCount = res.data.total
      detailData.value[1].detail.seriesCount += 1
      detailData.value[1].detail.lable.push(loanList[loan].lable)
      detailData.value[1].detail.color.push(color[loan])

      var val = []
      for (var l in res.data.list){
        val.push({
          date: res.data.list[l].DT,
          val: res.data.list[l].LBAL
        })
      }
      detailData.value[1].detail.data.push(val)
    }
  }

  console.log(detailData.value)
}
const getInstitution = async() =>{
  var res = await getInstitutionList({page: 1, pageSize: 999})
  setInstitutionOptions(res.data.list, institutionOption.value, false)
}
const setInstitutionOptions = (InstitutionData, optionsData) => {
  InstitutionData &&
        InstitutionData.forEach(item => {
          if (item.children && item.children.length) {
            const option = {
              institutionId: item.institutionId,
              institutionName: item.institutionName,
              children: []
            }
            setInstitutionOptions(
              item.children,
              optionsData,
            )
          } else {
            if (userStore.userInfo.institutionId == item.institutionId){
              institutionInfo.value = item
              const option = {
                value: item.institutionId,
                label: item.institutionName,
              }
              optionsData.push(option)
              curInstitution.value = item.institutionId
            }
            else {
              if (5 == item.institutionLevel){
                const option = {
                  value: item.institutionId,
                  label: item.institutionName,
                }
                optionsData.push(option)
              }
            }
          }
        })
}
getData()
getDetailData(Number(selDate.value[0]), Number(selDate.value[1]))
getInstitution()
const router = useRouter()
const toTarget = (name) => {
  router.push({ name })
}

</script>

<style lang="scss" scoped>
.page {
    @apply p-0;
    .gva-card-box{
      @apply p-1;
      &+.gva-card-box{
        @apply pt-0;
      }
    }
    .gva-card {
      @apply box-border bg-white rounded h-auto px-6 py-8 overflow-hidden shadow-sm ;
      .gva-card-title{
        @apply pb-5 border-t-0 border-l-0 border-r-0 border-b border-solid border-gray-100;
      }
      .date-picker{
        position: absolute;
        right:150px;
        top:40px;
        height: 40px;
      }
      .institution-selecter{
        position: absolute;
        right:38px;
        top:40px;
        height: 40px;
        width: 100px;
      }
    }
    .gva-top-card {
        @apply h-72 flex items-center justify-between text-gray-500;
        &-left {
          @apply h-full flex flex-col w-auto;
            &-title {
              @apply text-3xl text-gray-600;
            }
            &-dot {
              @apply mt-4 text-gray-600 text-lg;
            }
            &-item{
              +.gva-top-card-left-item{
                margin-top: 24px;
              }
              margin-top: 14px;
            }
        }
        &-right {
            height: 600px;
            width: 600px;
            margin-top: 28px;
        }
    }
     ::v-deep(.el-card__header){
          @apply p-0  border-gray-200;
        }
        .card-header{
          @apply pb-5 border-b border-solid border-gray-200 border-t-0 border-l-0 border-r-0;
        }
    .quick-entrance-items {
      @apply flex items-center justify-center text-center text-gray-800;
        .quick-entrance-item {
          @apply px-8 py-6 flex items-center flex-col transition-all duration-100 ease-in-out rounded-lg cursor-pointer;
          &:hover{
            @apply shadow-lg;
          }
            &-icon {
              @apply flex items-center h-16 w-16 rounded-lg justify-center mx-0 my-auto text-2xl;
            }
            p {
                @apply mt-2.5;
            }
        }
    }
}
.dashboard-icon {
  @apply flex items-center text-xl mr-2 text-blue-400;
}

</style>
