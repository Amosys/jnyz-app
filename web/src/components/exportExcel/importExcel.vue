<template>
  <el-upload
    :action="url"
    :show-file-list="false"
    :on-success="handleSuccess"
    :multiple="false"
    :headers="headers"
  >
    <el-button
      type="primary"
      icon="upload"
    >导入</el-button>
  </el-upload>

</template>

<script setup>
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/pinia/modules/user'

const baseUrl = import.meta.env.VITE_BASE_API

const props = defineProps({
  templateId: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['on-success'])

const url = `${baseUrl}/sysExportTemplate/importExcel?templateID=${props.templateId}`

const userStore = useUserStore()
const headers = {
    'x-token': userStore.token,
    'x-user-id': userStore.userInfo.ID,
  }

const handleSuccess = (res) => {
  if (res.code === 0) {
    ElMessage.success('导入成功')
    emit('on-success')
  } else {
    ElMessage.error(res.msg)
  }
}
</script>
