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
  </div>
</template>

<script setup>
import ChartCard from '@/components/analysis/chartCard.vue'
import Trend from '@/components/analysis/trend.vue'
import { useUserStore } from '@/pinia/modules/user'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  createDALData,
  findDALData,
  getDALDataList,
} from '@/api/dataDAL'

const userStore = useUserStore()
const toolCards = ref([])

// 查询
const getData = async() => {
  //获取存款数据
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
  //获取贷款款数据
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
getData()

const router = useRouter()
const toTarget = (name) => {
  router.push({ name })
}

</script>

<style lang="scss" scoped>
.page {
    @apply p-0;
    .gva-card-box{
      @apply p-4;
      &+.gva-card-box{
        @apply pt-0;
      }
    }
    .gva-card {
      @apply box-border bg-white rounded h-auto px-6 py-8 overflow-hidden shadow-sm;
      .gva-card-title{
        @apply pb-5 border-t-0 border-l-0 border-r-0 border-b border-solid border-gray-100;
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
