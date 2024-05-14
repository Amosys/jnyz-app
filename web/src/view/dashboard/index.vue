<template>
  <div class="page">
    <el-row :gutter="12">
      <el-col v-for="card in toolCards" :sm="24" :md="6" :xl="6"  :style="{ margin: '12px 0px'}">
        <ChartCard :title=card.title :total=card.total :pValue=card.totalP>
          <div>
            <trend :isPer=false style="margin-right: 16px;" term="较昨日" :value=card.c2d :pValue=card.c2dP>
            </trend>
            <trend :isPer=false style="margin-right: 16px;" term="较年初" :value=card.c2by :pValue=card.c2byP>
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
            <el-tabs @tab-click="tabChange" v-model="activeName" type="card">
              <span v-for="detail in detailData" >
                <el-tab-pane :label=detail.label :name=detail.name>
                </el-tab-pane>
              </span>
              <el-row>
                <el-col  :xs="24" :sm="16" :xl="16">
                  <ChartLine :detail=curDetail />
                </el-col>
                <el-col :xs="24" :sm="8" :xl="8">
                  <ChartTable />
                </el-col>
              </el-row>
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
            <div class="institution-selecter" v-if="institutionSelShow">
              <el-select @change="institutionChange" v-model="curInstitution" filterable placeholder="请选择">
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
import ChartTable from '@/view/dashboard/analysis/chartTable.vue'
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
const curTabIndex = ref(0)
const curDetail = ref({})

const selDate = ref([formatTimeToStr(new Date(Date.now() - 8 * 8.64e7), "yyyyMMdd"),
   formatTimeToStr(new Date(Date.now() - 8.64e7), "yyyyMMdd")])
const disabledDate =  (time) => {
  return time.getTime() >= Date.now() - 8.64e7
}

const institutionList = ref([])
const institutionInfo = ref({})
const institutionOption = ref([])
const curInstitution = ref()
const curInstitutionInfo = ref({})
const institutionSelShow = ref(false)

const datePickerChange = (date) =>{
  console.log(date)
  getDetailData(Number(date[0]), Number(date[1]))
}

// 查询

const getInstitution = async() =>{
  var res = await getInstitutionList({page: 1, pageSize: 999})
  setInstitutionOptions(res.data.list, institutionOption.value)
  getCardData()
  getDetailData(Number(selDate.value[0]), Number(selDate.value[1]))
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
            institutionList.value.push(item)
            if (userStore.userInfo.institutionId == item.institutionId){
              institutionInfo.value = item
              var option = {}
              if (1 == item.institutionLevel){
                option = {
                  value: item.institutionId,
                  label: '全行',
                }
                institutionSelShow.value = true
              }
              else{
                option = {
                  value: item.institutionId,
                  label: item.institutionName,
                }
                institutionSelShow.value = false
              }
              optionsData.unshift(option)
              curInstitution.value = item.institutionId
              curInstitutionInfo.value = item
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
const getCardData = async() => {
  if (1 == institutionInfo.value.institutionLevel){
    var res = await findDALData("depositBank", {})
    if (res.code == 0){
      const deposit = res.data.reDepositBank
      toolCards.value.push({
        title: "各项存款",
        total: deposit.DBAL,
        totalP: '亿元',
        c2d: deposit.DBAL_C2D,
        c2dP: '万元',
        c2by: deposit.DBAL_C2BY,
        c2byP: '亿元',
      })
      toolCards.value.push({
        title: "储蓄存款",
        total: deposit.SDBAL,
        totalP: '亿元',
        c2d: deposit.SDBAL_C2D,
        c2dP: '万元',
        c2by: deposit.SDBAL_C2BY,
        c2byP: '亿元',
      })
      toolCards.value.push({
        title: "对公存款",
        total: deposit.CDBAL,
        totalP: '亿元',
        c2d: deposit.CDBAL_C2D,
        c2dP: '万元',
        c2by: deposit.CDBAL_C2BY,
        c2byP: '亿元',
      })
    }
    res = await findDALData("loanBank", {})
    if (res.code == 0){
      const deposit = res.data.reLoanBank
      toolCards.value.push({
        title: "各项贷款",
        total: deposit.LBAL,
        totalP: '亿元',
        c2d: deposit.LBAL_C2D,
        c2dP: '亿元',
        c2by: deposit.LBAL_C2BY,
        c2byP: '亿元',
      })
    }
    console.log(toolCards.value)
  }
  else{
    //各项存款
    var res = await findDALData("depositSub", {branch: userStore.userInfo.institutionId})
    if (res.code == 0){
      const deposit = res.data.reDepositSub
      toolCards.value.push({
        title: "各项存款",
        total: deposit.DBAL,
        totalP: '亿元',
        c2d: deposit.DBAL_C2D,
        c2dP: '万元',
        c2by: deposit.DBAL_C2BY,
        c2byP: '万元',
        c2byp: deposit.DBAL_INCP_C2BY,
      })
    }
    //储蓄存款
    res = await findDALData("depositDetailSave", {branch: userStore.userInfo.institutionId})
    if (res.code == 0){
      const deposit = res.data.reDepositDetailSave
      toolCards.value.push({
        title: "储蓄存款",
        total: deposit.DBAL,
        totalP: '亿元',
        c2d: deposit.DBAL_C2D,
        c2dP: '万元',
        c2by: deposit.DBAL_C2BY,
        c2byP: '万元',
        c2byp: deposit.DBAL_INCP_C2BY,
      })
    }
    //对公存款
    res = await findDALData("depositDetailCorp", {branch: userStore.userInfo.institutionId})
    if (res.code == 0){
      const deposit = res.data.reDepositDetailCorp
      toolCards.value.push({
        title: "对公存款",
        total: deposit.DBAL,
        totalP: '亿元',
        c2d: deposit.DBAL_C2D,
        c2dP: '万元',
        c2by: deposit.DBAL_C2BY,
        c2byP: '万元',
        c2byp: deposit.DBAL_INCP_C2BY,
      })
    }
    //各项贷款
    res = await findDALData("loanSub", {branch: userStore.userInfo.institutionId})
    if (res.code == 0){
      const loan = res.data.reLoanSub
      toolCards.value.push({
        title: "各项贷款",
        total: loan.LBAL,
        totalP: '万元',
        c2d: loan.LBAL_C2D,
        c2dP: '万元',
        c2by: loan.LBAL_C2BY,
        c2byP: '万元',
        c2byp: loan.LBAL_INCP_C2BY,
      })
    }
  }
}
const getDetailData = async(startDate, endDate) => {
  const color = ['#188df0', '#52c41a', '#f5222d']
  var detailList = []
  console.log(curInstitutionInfo.value, curInstitution)
  console.log(detailList)
  if (1 == curInstitutionInfo.value.institutionLevel){
    var res = await getDALDataList("depositBank", 
      {startDate: startDate, endDate: endDate, page: 1, pageSize: 999})
    if (res.code == 0 && res.data.total > 0){
      var det = {
          label: '存款',
          name: 'deposit',
          detail: {
            dayCount: 0,
            seriesCount: 0,
            lable: [],
            color: [],
            data: []
          }
        }
      det.detail.dayCount = res.data.total
      det.detail.seriesCount = 2
      det.detail.lable = ['储蓄存款', '对公存款']
      det.detail.color = color

      var val = [[], []]
      for (var l in res.data.list){
        val[0].push({
          date: res.data.list[l].DT,
          val: res.data.list[l].SDBAL
        })
        val[1].push({
          date: res.data.list[l].DT,
          val: res.data.list[l].CDBAL
        })
      }
      det.detail.data.push(val[0])
      det.detail.data.push(val[1])
      detailList.push(det)
    }
    res = await getDALDataList("loanBank", 
      {startDate: startDate, endDate: endDate, page: 1, pageSize: 999})
    if (res.code == 0 && res.data.total > 0){
      var det = {
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
      det.detail.dayCount = res.data.total
      det.detail.seriesCount = 2
      det.detail.lable = ['对公贷款', '个人贷款']
      det.detail.color = color

      var val = [[], []]
      for (var l in res.data.list){
        val[0].push({
          date: res.data.list[l].DT,
          val: res.data.list[l].LBAL_CORP
        })
        val[1].push({
          date: res.data.list[l].DT,
          val: res.data.list[l].LBAL_PERS
        })
      }
      det.detail.data.push(val[0])
      det.detail.data.push(val[1])
      detailList.push(det)
    }
  }
  else{
    const depositList = [
      {type: 'depositDetailCorp', lable: '对公存款'},
      {type: 'depositDetailSave', lable: '储蓄存款'},
      {type: 'depositDetailCur', lable: '活期存款'}
    ]
    const loanList = [
      {type: 'loanDetailCorp', lable: '对公贷款'},
      {type: 'loanDetailPers', lable: '个人贷款'},
    ]

    //存款
    var det = {
      label: '存款',
      name: 'deposit',
      detail: {
        dayCount: 0,
        seriesCount: 0,
        lable: [],
        color: [],
        data: []
      }
    }
    for (var dep in depositList){
      var res = await getDALDataList(depositList[dep].type, 
        {startDate: startDate, endDate: endDate, branch: curInstitution.value, page: 1, pageSize: 999})
      if (res.code == 0 && res.data.total > 0){
        det.detail.dayCount = res.data.total
        det.detail.seriesCount += 1
        det.detail.lable.push(depositList[dep].lable)
        det.detail.color.push(color[dep])

        var val = []
        for (var l in res.data.list){
          val.push({
            date: res.data.list[l].DT,
            val: res.data.list[l].DBAL
          })
        }
        det.detail.data.push(val)
      }
    }
    detailList.push(det)
    //贷款
    det = {
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
    for (var loan in loanList){
      var res = await getDALDataList(loanList[loan].type, 
        {startDate: startDate, endDate: endDate, branch: curInstitution.value, page: 1, pageSize: 999})
      if (res.code == 0 && res.data.total > 0){
        det.detail.dayCount = res.data.total
        det.detail.seriesCount += 1
        det.detail.lable.push(loanList[loan].lable)
        det.detail.color.push(color[loan])

        var val = []
        for (var l in res.data.list){
          val.push({
            date: res.data.list[l].DT,
            val: res.data.list[l].LBAL
          })
        }
        det.detail.data.push(val)
      }
    }
    detailList.push(det)
  }
  detailData.value = detailList
  activeName.value = detailData.value[curTabIndex.value].name
  curDetail.value = detailData.value[curTabIndex.value].detail
  console.log(detailData.value)
}

const tabChange = (tab) => {
  curTabIndex.value = tab.index
  activeName.value = detailData.value[tab.index].name
  curDetail.value = detailData.value[tab.index].detail
  console.log(curDetail.value)
}
const institutionChange = async(i) => {
  console.log(i)
  for (var ins in institutionList.value){
    if (i == institutionList.value[ins].institutionId){
      curInstitutionInfo.value = institutionList.value[ins]
    }
  }
  getDetailData(Number(selDate.value[0]), Number(selDate.value[1]))
}
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
