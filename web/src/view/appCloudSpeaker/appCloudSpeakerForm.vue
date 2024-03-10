<template>
  <div>
    <div class="gva-form-box">
      <el-form :model="formData" ref="elFormRef" label-position="right" :rules="rule" label-width="80px">
        <el-form-item label="序列号:" prop="sn">
          <el-input v-model="formData.sn" :clearable="false" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="硬件序列号:" prop="hwSn">
          <el-input v-model="formData.hwSn" :clearable="false" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="厂商:" prop="factory">
          <el-input v-model="formData.factory" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="音响类型:" prop="sType">
          <el-input v-model="formData.sType" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="音响模式:" prop="mode">
          <el-input v-model="formData.mode" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="商户ID:" prop="customerId">
          <el-input v-model="formData.customerId" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="商户名称:" prop="customerName">
          <el-input v-model="formData.customerName" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="门店ID:" prop="storeId">
          <el-input v-model="formData.storeId" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="门店名称:" prop="storeName">
          <el-input v-model="formData.storeName" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="地区:" prop="region">
          <el-input v-model="formData.region" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item label="所属机构:" prop="institution">
          <el-input v-model="formData.institution" :clearable="true" placeholder="请输入" />
       </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="save">保存</el-button>
          <el-button type="primary" @click="back">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import {
  createAppCloudSpeaker,
  updateAppCloudSpeaker,
  findAppCloudSpeaker
} from '@/api/appCloudSpeaker'

defineOptions({
    name: 'AppCloudSpeakerForm'
})

// 自动获取字典
import { getDictFunc } from '@/utils/format'
import { useRoute, useRouter } from "vue-router"
import { ElMessage } from 'element-plus'
import { ref, reactive } from 'vue'

const route = useRoute()
const router = useRouter()

const type = ref('')
const formData = ref({
            sn: '',
            hwSn: '',
            factory: '',
            sType: '',
            mode: '',
            customerId: '',
            customerName: '',
            storeId: '',
            storeName: '',
            region: '',
            institution: '',
        })
// 验证规则
const rule = reactive({
               sn : [{
                   required: true,
                   message: '',
                   trigger: ['input','blur'],
               }],
})

const elFormRef = ref()

// 初始化方法
const init = async () => {
 // 建议通过url传参获取目标数据ID 调用 find方法进行查询数据操作 从而决定本页面是create还是update 以下为id作为url参数示例
    if (route.query.id) {
      const res = await findAppCloudSpeaker({ ID: route.query.id })
      if (res.code === 0) {
        formData.value = res.data.reCloudSpeaker
        type.value = 'update'
      }
    } else {
      type.value = 'create'
    }
}

init()
// 保存按钮
const save = async() => {
      elFormRef.value?.validate( async (valid) => {
         if (!valid) return
            let res
           switch (type.value) {
             case 'create':
               res = await createAppCloudSpeaker(formData.value)
               break
             case 'update':
               res = await updateAppCloudSpeaker(formData.value)
               break
             default:
               res = await createAppCloudSpeaker(formData.value)
               break
           }
           if (res.code === 0) {
             ElMessage({
               type: 'success',
               message: '创建/更改成功'
             })
           }
       })
}

// 返回按钮
const back = () => {
    router.go(-1)
}

</script>

<style>
</style>
