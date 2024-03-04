// pages/collect/step1/index.js
const { $Toast } = require('../../../dist/base/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StepInfo: {
      currentStep: 0,
      steps: ["步骤一", "步骤二"],
    },
    HumanInfo: {
      name: '',
      idCard: ''
    },
    FormItems: [],
    FamilyInfo: {
      isMarried: false,
      spouseInfo: {
        name: '',
        idCard: ''
      }
    },
    stepFormInfo: {
      steps: [
      {
        name: '步骤一',
        panels: [
        {
          title: '个人基本信息',
          items: [
          {
            id: 'person-name',
            mode: 'input',
            title: '姓名',
            placeholder: '请输入姓名',
            type: 'text',
            necessary: true,
          },
          {
            id: 'person-idCard',
            mode: 'input',
            title: '身份证号码',
            placeholder: '请输入身份证号码',
            type: 'number',
            necessary: true,
          },
          {
            id: 'person-lowAddress',
            mode: 'regionPicker',
            title: '户籍地址',
            indexItem:[
              '安徽省',
              '宣城市',
              '泾县'
            ]
          },
          {
            id: 'person-lowAddressDetail',
            mode: 'input',
            title: '详细户籍地址',
            placeholder: '请输入详细户籍地址',
            type: 'text',
            necessary: true,
          }]
        }]
      },
      {
        name: '步骤二',
        panels: [
        {
          title: '家庭基本信息',
          items: [
            {
              id: 'person-isMarried',
              mode: 'picker',
              title: '婚姻状况',
              indexItem: [
                '未婚',
                '已婚'
              ],
              childRegExp: '已婚',
              child: [
                {
                  id: 'spouse-name',
                  mode: 'input',
                  title: '配偶姓名',
                  placeholder: '请输入配偶姓名',
                  type: 'text',
                  necessary: true,
                },
                {
                  id: 'spouse-idCard',
                  mode: 'input',
                  title: '配偶身份证号码',
                  placeholder: '请输入配偶身份证号码',
                  type: 'number',
                  necessary: true,
                }
              ]
            }]
        }]
      }]
    },
    formData: {
    }
  },
  onLoad: function(){
    var steps = []
    for (var index in this.data.stepFormInfo.steps){
      steps.push(this.data.stepFormInfo.steps[index].name)
    }
    this.setData({
      StepInfo: {
        currentStep: 0,
        steps: steps,
      }
    })
    if (this.data.StepInfo.currentStep == this.data.StepInfo.steps.length - 1){
      this.selectComponent(".footer").setFinish(true)
    }
  },

  onNextStep: function(){
    let formItems = this.selectAllComponents(".step-form-item, .step-form-item >>> .step-form-item")
    for (let index in formItems){
      console.log(formItems[index].isValid())
      if (!formItems[index].isValid()){
        $Toast({
          content: '请输入' + formItems[index].getTitle(),
          type: 'error'
        });
        return
      }
    }

    let steps = []
    for(let index in this.data.stepFormInfo.steps){
      let step = this.data.stepFormInfo.steps[index]
      steps.push(step.name)
    }
    this.setData({
      StepInfo: {
        currentStep: this.data.StepInfo.currentStep + 1,
        steps: steps,
      }
    })
  },

  onBackStep: function(){
    let steps = []
    for(let index in this.data.stepFormInfo.steps){
      let step = this.data.stepFormInfo.steps[index]
      steps.push(step.name)
    }
    this.setData({
      StepInfo: {
        currentStep: this.data.StepInfo.currentStep - 1,
        steps: steps,
      }
    })
  },

  onIdCardSuccess: function(e){
    console.log(e)
    this.setData({
      HumanInfo:{
        name: e.detail.name.text,
        idCard: e.detail.id.text,
      }
    })
  }

})