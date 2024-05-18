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
                <el-col  :xs="24" :sm="activeName === 'deposit' ? 16 : 24" :xl="activeName === 'deposit' ? 16 : 24">
                  <ChartLine :detail=curDetail />
                </el-col>
                <el-col v-if="activeName === 'deposit'" :xs="24" :sm="8" :xl="8">
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
              <el-select @change="institutionChange" v-model="selInstitutionId" filterable placeholder="请选择">
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
import { createDALData, findDALData, getDALDataList } from '@/api/dataDAL'
import { getInstitutionList } from '@/api/institution'

const userStore = useUserStore()
const toolCards = ref([])
const detailData = ref([])
const activeName = ref('deposit')
const curTabIndex = ref(0)
const curDetail = ref({})

const selDate = ref([formatTimeToStr(new Date(Date.now() - 8 * 8.64e7), "yyyyMMdd"),
   formatTimeToStr(new Date(Date.now() - 8.64e7), "yyyyMMdd")])
const disabledDate =  (time) => {
  return time.getTime() >= Date.now() - 8.64e7
}

const institutionList = ref([])
const institutionOption = ref([])
const selInstitutionId = ref(userStore.institutionInfo.institutionId)
const selInstitution = ref(userStore.institutionInfo)
const institutionSelShow = ref(false)

const datePickerChange = (date) =>{
  console.log(date)
  getDetailData(Number(date[0]), Number(date[1]))
}

// 查询

const getInstitution = async() =>{
  var res = await getInstitutionList({page: 1, pageSize: 999})
  let option = {}
  if (userStore.institutionInfo.institutionLevel === 1) {
    option = { value: userStore.institutionInfo.institutionId, label: '全行' };
    institutionSelShow.value = true;
  } else {
    option = { value: userStore.institutionInfo, label: userStore.institutionInfo.institutionName };
    institutionSelShow.value = false;
  }
  institutionOption.value.push(option)

  setInstitutionOptions(res.data.list, institutionOption.value)
  getCardData()
  getDetailData(Number(selDate.value[0]), Number(selDate.value[1]))
}
const setInstitutionOptions = (InstitutionData, optionsData) => {
  InstitutionData.forEach(item => {
    if (item.children && item.children.length) {
      setInstitutionOptions(item.children, optionsData);
    } else {
      institutionList.value.push(item);
      if (userStore.userInfo.institutionId != item.institutionId && item.institutionLevel === 5) {
        optionsData.push({ value: item.institutionId, label: item.institutionName });
      }
    }
  });
};

const getCardData = async() => {
  if (1 == userStore.institutionInfo.value.institutionLevel){
    let deposit = await fetchDepositDataBank()
    if (deposit){
      toolCards.value.push({title: '各项存款', total: `${deposit.all.total}亿元`, c2d: `${deposit.all.c2d}万元`, c2by: `${deposit.all.c2by}亿元`})
      toolCards.value.push({title: '储蓄存款', total: `${deposit.save.total}亿元`, c2d: `${deposit.save.c2d}万元`, c2by: `${deposit.save.c2by}亿元`})
      toolCards.value.push({title: '对公存款', total: `${deposit.corp.total}亿元`, c2d: `${deposit.corp.c2d}万元`, c2by: `${deposit.corp.c2by}亿元`})
    }
    let loan = await fetchLoanDataBank()
    if (loan){
      toolCards.value.push({title: '各项贷款', total: `${loan.all.total}亿元`, c2d: `${loan.all.c2d}亿元`, c2by: `${loan.all.c2by}亿元`})
    }
    console.log(toolCards.value)
  }
  else{
    let deposit = fetchDepositDataByBranch('Sub', userStore.userInfo.institutionId)
    if (deposit){
      toolCards.value.push({title: '各项存款', total: `${deposit.total}亿元`, c2d: `${deposit.c2d}万元`, c2by: `${deposit.c2by}万元`})
    }
    deposit = fetchDepositDataByBranch('DetailSave', userStore.userInfo.institutionId)
    if (deposit){
      toolCards.value.push({title: '储蓄存款', total: `${deposit.total}亿元`, c2d: `${deposit.c2d}万元`, c2by: `${deposit.c2by}万元`})
    }
    deposit = fetchDepositDataByBranch('DetailCorp', userStore.userInfo.institutionId)
    if (deposit){
      toolCards.value.push({title: '对公存款', total: `${deposit.total}亿元`, c2d: `${deposit.c2d}万元`, c2by: `${deposit.c2by}万元`})
    }
    let loan = fetchLoanDataByBranch('Sub', userStore.userInfo.institutionId)
    toolCards.value.push({title: '各项贷款', total: `${loan.total}万元`, c2d: `${loan.c2d}万元`, c2by: `${loan.c2by}万元`})
  }
}

const getDetailData = async(startDate, endDate) => {
  const color = ['#188df0', '#52c41a', '#f5222d']
  var detailList = []
  console.log(curInstitutionInfo.value, curInstitution)
  console.log(detailList)
  if (1 == selInstitution.value.institutionLevel){
    var res = await getDALDataList("depositBank", 
      {startDate: startDate, endDate: endDate, page: 1, pageSize: 999})
    if (res.code == 0 && res.data.total > 0){
      var det = {
          label: '存款',
          name: 'deposit',
          detail: {
            dayCount: res.data.total,
            seriesCount: 2,
            lable: ['储蓄存款', '对公存款'],
            color: color,
            data: []
          }
        }

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
  curDetail.value = detailData.value[curTabIndex.value].detail
  console.log(detailData.value)
}

const fetchDepositDataByBranch = async(type, branch) =>{
  let res = await findDALData(`deposit${type}`, {branch: branch})
  if (res.code === 0){
    const deposit = res.data.reDeposit
    return {total: deposit.DBAL, c2d: deposit.DBAL_C2D, c2by: deposit.DBAL_C2BY}
  }
  return {}
}
const fetchDepositDataBank = async() =>{
  let res = await findDALData(`depositBank`, {})
  if (res.code === 0){
    const deposit = res.data.reDeposit
    return {all:{total: deposit.DBAL, c2d: deposit.DBAL_C2D, c2by: deposit.DBAL_C2BY},
            save: {total: deposit.SDBAL, c2d: deposit.SDBAL_C2D, c2by: deposit.SDBAL_C2BY},
            corp: {total: deposit.CDBAL, c2d: deposit.CDBAL_C2D, c2by: deposit.CDBAL_C2BY}}
  }
  return {}
}

const fetchLoanDataByBranch = async(type, branch) =>{
  let res = await findDALData(`loan${type}`, {branch: branch})
  if (res.code === 0){
    const loan = res.data.reLoan
    return {total: loan.LBAL, c2d: loan.LBAL_C2D, c2by: loan.LBAL_C2BY}
  }
  return {}
}
const fetchLoanDataBank = async() =>{
  let res = await findDALData(`loanBank`, {})
  if (res.code === 0){
    const loan = res.data.reLoant
    return {all:{total: deposit.LBAL, c2d: deposit.LBAL_C2D, c2by: deposit.LBAL_C2BY},
            corp: {total: deposit.LBAL_CORP, c2d: deposit.LBAL_CORP_C2D, c2by: deposit.LBAL_CORP_C2BY},
            pers: {total: deposit.LBAL_PERS, c2d: deposit.LBAL_PERS_C2D, c2by: deposit.LBAL_PERS_C2BY}}
  }
  return {}
}

const tabChange = (tab) => {
  curTabIndex.value = tab.index
  curDetail.value = detailData.value[tab.index].detail
}
const institutionChange = async(i) => {
  if (i === useUserStore.userInfo.institutionId){
    selInstitution.value = useUserStore.institutionInfo
  }
  else{
    for (var ins in institutionList.value){
      if (i == institutionList.value[ins].institutionId){
        selInstitution.value = institutionList.value[ins]
      }
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
