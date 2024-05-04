<template>
  <div class="institution">
    <div class="gva-table-box">
      <div class="gva-btn-list">
        <el-button
          type="primary"
          icon="plus"
          @click="addInstitution(0)"
        >新增机构</el-button>
        <el-icon
          class="cursor-pointer"
          @click="toDoc('https://www.bilibili.com/video/BV1kv4y1g7nT?p=8&vd_source=f2640257c21e3b547a790461ed94875e')"
        ><VideoCameraFilled /></el-icon>
      </div>
      <el-table
        :data="tableData"
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
        row-key="institutionId"
        style="width: 100%"
      >
        <el-table-column
          label="机构ID"
          min-width="180"
          prop="institutionId"
        />
        <el-table-column
          align="left"
          label="机构名称"
          min-width="180"
          prop="institutionName"
        />
        <el-table-column
          align="left"
          label="操作"
          width="460"
        >
          <template #default="scope">
            <el-button
              icon="plus"

              type="primary"
              link
              @click="addInstitution(scope.row.institutionId)"
            >新增子机构</el-button>
            <el-button
              icon="edit"

              type="primary"
              link
              @click="editInstitution(scope.row)"
            >编辑</el-button>
            <el-button
              icon="delete"

              type="primary"
              link
              @click="deleteAuth(scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 新增机构弹窗 -->
    <el-dialog
      v-model="dialogFormVisible"
      :title="dialogTitle"
    >
      <el-form
        ref="institutionForm"
        :model="form"
        :rules="rules"
        label-width="80px"
      >
        <el-form-item
          label="父级机构"
          prop="parentId"
        >
          <el-cascader
            v-model="form.parentId"
            style="width:100%"
            :disabled="dialogType==='add'"
            :options="InstitutionOption"
            :props="{ checkStrictly: true,label:'institutionName',value:'institutionId',disabled:'disabled',emitPath:false}"
            :show-all-levels="false"
            filterable
          />
        </el-form-item>
        <el-form-item
          label="机构ID"
          prop="institutionId"
        >
          <el-input
            v-model="form.institutionId"
            :disabled="dialogType==='edit'"
            autocomplete="off"
            maxlength="15"
          />
        </el-form-item>
        <el-form-item
          label="机构名称"
          prop="institutionName"
        >
          <el-input
            v-model="form.institutionName"
            autocomplete="off"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="closeDialog">取 消</el-button>
          <el-button
            type="primary"
            @click="enterDialog"
          >确 定</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import {
  getInstitutionList,
  deleteInstitution,
  createInstitution,
  updateInstitution
} from '@/api/institution'

import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { toDoc } from '@/utils/doc'
import { VideoCameraFilled } from '@element-plus/icons-vue'

defineOptions({
  name: 'Institution'
})

const mustUint = (rule, value, callback) => {
  if (!/^[0-9]*[1-9][0-9]*$/.test(value)) {
    return callback(new Error('请输入正整数'))
  }
  return callback()
}

const InstitutionOption = ref([
  {
    institutionId: 0,
    institutionName: '根机构'
  }
])
const drawer = ref(false)
const dialogType = ref('add')
const activeRow = ref({})

const dialogTitle = ref('新增机构')
const dialogFormVisible = ref(false)
const apiDialogFlag = ref(false)
const copyForm = ref({})

const form = ref({
  institutionId: 0,
  institutionName: '',
  parentId: 0
})
const rules = ref({
  institutionId: [
    { required: true, message: '请输入机构ID', trigger: 'blur' },
    { validator: mustUint, trigger: 'blur', message: '必须为正整数' }
  ],
  institutionName: [
    { required: true, message: '请输入机构名称', trigger: 'blur' }
  ],
  parentId: [
    { required: true, message: '请选择父机构', trigger: 'blur' },
  ]
})

const page = ref(1)
const total = ref(0)
const pageSize = ref(999)
const tableData = ref([])
const searchInfo = ref({})

// 查询
const getTableData = async() => {
  const table = await getInstitutionList({ page: page.value, pageSize: pageSize.value, ...searchInfo.value })
  console.log(table)
  if (table.code === 0) {
    tableData.value = table.data.list
    total.value = table.data.total
    page.value = table.data.page
    pageSize.value = table.data.pageSize
  }
}

getTableData()

const changeRow = (key, value) => {
  activeRow.value[key] = value
}
const menus = ref(null)
const apis = ref(null)
const datas = ref(null)
const autoEnter = (activeName, oldActiveName) => {
  const paneArr = [menus, apis, datas]
  if (oldActiveName) {
    if (paneArr[oldActiveName].value.needConfirm) {
      paneArr[oldActiveName].value.enterAndNext()
      paneArr[oldActiveName].value.needConfirm = false
    }
  }
}
const opdendrawer = (row) => {
  drawer.value = true
  activeRow.value = row
}
// 删除机构
const deleteAuth = (row) => {
  ElMessageBox.confirm('此操作将永久删除该机构, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(async() => {
      const res = await deleteInstitution({ institutionId: row.institutionId })
      if (res.code === 0) {
        ElMessage({
          type: 'success',
          message: '删除成功!'
        })
        if (tableData.value.length === 1 && page.value > 1) {
          page.value--
        }
        getTableData()
      }
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消删除'
      })
    })
}
// 初始化表单
const institutionForm = ref(null)
const initForm = () => {
  if (institutionForm.value) {
    institutionForm.value.resetFields()
  }
  form.value = {
    institutionId: 0,
    institutionName: '',
    parentId: 0
  }
}
// 关闭窗口
const closeDialog = () => {
  initForm()
  dialogFormVisible.value = false
  apiDialogFlag.value = false
}
// 确定弹窗

const enterDialog = () => {
  institutionForm.value.validate(async valid => {
    if (valid) {
      form.value.institutionId = Number(form.value.institutionId)
      switch (dialogType.value) {
        case 'add':
          {
            const res = await createInstitution(form.value)
            if (res.code === 0) {
              ElMessage({
                type: 'success',
                message: '添加成功!'
              })
              getTableData()
              closeDialog()
            }
          }
          break
        case 'edit':
          {
            const res = await updateInstitution(form.value)
            if (res.code === 0) {
              ElMessage({
                type: 'success',
                message: '添加成功!'
              })
              getTableData()
              closeDialog()
            }
          }
          break
      }

      initForm()
      dialogFormVisible.value = false
    }
  })
}
const setOptions = () => {
  InstitutionOption.value = [
    {
      institutionId: 0,
      institutionName: '根机构'
    }
  ]
  setInstitutionOptions(tableData.value, InstitutionOption.value, false)
}
const setInstitutionOptions = (InstitutionData, optionsData, disabled) => {
  form.value.institutionId = String(form.value.institutionId)
  InstitutionData &&
        InstitutionData.forEach(item => {
          if (item.children && item.children.length) {
            const option = {
              institutionId: item.institutionId,
              institutionName: item.institutionName,
              disabled: disabled || item.institutionId === form.value.institutionId,
              children: []
            }
            setInstitutionOptions(
              item.children,
              option.children,
              disabled || item.institutionId === form.value.institutionId
            )
            optionsData.push(option)
          } else {
            const option = {
              institutionId: item.institutionId,
              institutionName: item.institutionName,
              disabled: disabled || item.institutionId === form.value.institutionId
            }
            optionsData.push(option)
          }
        })
}
// 增加机构
const addInstitution = (parentId) => {
  initForm()
  dialogTitle.value = '新增机构'
  dialogType.value = 'add'
  form.value.parentId = parentId
  setOptions()
  dialogFormVisible.value = true
}
// 编辑机构
const editInstitution = (row) => {
  setOptions()
  dialogTitle.value = '编辑机构'
  dialogType.value = 'edit'
  for (const key in form.value) {
    form.value[key] = row[key]
  }
  setOptions()
  dialogFormVisible.value = true
}

</script>

<style lang="scss">
.institution {
  .el-input-number {
    margin-left: 15px;
    span {
      display: none;
    }
  }
}
.tree-content{
  margin-top: 10px;
  height: calc(100vh - 158px);
  overflow: auto;
}

</style>
