<template>
  <el-button
    type="primary"
    icon="download"
    @click="exportExcelFunc"
  >导出</el-button>
</template>

<script setup>
const props = defineProps({
  templateId: {
    type: String,
    required: true
  }
})

import service from '@/utils/request'
import { ElMessage } from 'element-plus'

const exportExcelFunc = async() => {
  if (props.templateId === '') {
    ElMessage.error('组件未设置模板ID')
    return
  }
  //const baseUrl = import.meta.env.VITE_BASE_API
  const baseUrl = ''
  const url = `${baseUrl}/sysExportTemplate/exportExcel?templateID=${props.templateId}`
  //window.open(url, '_blank')
  service({
    url: url,
    method: 'get',
    responseType: 'blob'
  }).then((response) => {
      const link = document.createElement("a");
      let blob = new Blob([response], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      });
      var filename = `${props.templateId}.xlsx`
      link.style.display = "none"
      link.href = URL.createObjectURL(blob);
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
}
</script>
