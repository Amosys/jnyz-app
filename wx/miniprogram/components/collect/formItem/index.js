Component({

  /**
   * 组件的属性列表
   */
  properties: {
    itemInfo:{
      id: {
        type: String,
        value: ''
      },
      mode: {
        type: String,
        value: 'input'
      },
      fclass: {
        type: String,
        value: ''
      },
      title: {
        type: String,
        value: ''
      },
      type: {
        type: String,
        value: ''
      },
      name:  {
        type: String,
        value: ''
      },
      necessary: {
        type: Boolean,
        value: false
      },
      placeholder: {
        type: String,
        value: ''
      },
      error: {
        type: Boolean,
        value: false
      },
      checked: {
        type: Boolean,
        value: false
      },
      indexItem:  {
        type: Array,
        value: []
      },
      regExp: {
        type: String,
        value: ''
      },
      childRegExp: {
        type: String,
        value: ''
      },
      child: {
        type: Array,
        value: []
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    inputInfo: {
      value: '',
    },
    pickerInfo: {
      index: 0,
      itemContect: '',
    },
    regionPickerInfo: {
      region: ['安徽省', '宣城市', '泾县'],
    },
    childVisible: false,
  },

  lifetimes: {
    attached: function(e){
      if (this.properties.itemInfo.mode == 'picker'){
        this.setData({
          pickerInfo: {
            index: 0,
            itemContent: this.properties.itemInfo.indexItem[0]
          }
        })
      }
      else if(this.properties.itemInfo.mode == 'regionPicker'){
        this.setData({
          regionPickerInfo: {
            region: this.properties.itemInfo.indexItem
          }
        })
      }
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onPickerChange: function(e){
      var testReg = new RegExp(this.data.itemInfo.childRegExp)
      this.setData({
        pickerInfo: {
          index: e.detail.value,
          itemContent: this.properties.itemInfo.indexItem[e.detail.value]
        },
        childVisible: testReg.test(this.properties.itemInfo.indexItem[e.detail.value])
      })
    },
    onRegionPickerChange: function(e){
      this.setData({
        regionPickerInfo: {
          region: e.detail.value
        },
      })
    },
    getValue: function(){
      if (this.properties.itemInfo.mode == 'input'){
        return this.data.inputInfo
      }
      else if (this.properties.itemInfo.mode == 'picker'){
        return this.data.pickerInfo
      }
      else if(this.properties.itemInfo.mode == 'regionPicker'){
        return this.data.regionPickerInfo
      }
    },
    setValue: function(val){
      if (this.properties.itemInfo.mode == 'input'){
        this.setData({
          inputInfo: val
        })
      }
      if (this.properties.itemInfo.mode == 'picker'){
        this.setData({
          pickerInfo: val
        })
      }
      else if(this.properties.itemInfo.mode == 'regionPicker'){
        this.setData({
          regionPickerInfo: val
        })
      }
    },
    getTitle: function(){
      return this.properties.itemInfo.title
    },

    isValid: function(){
      var testReg = new RegExp(this.data.itemInfo.regExp)
      var val = ''
      
      if (this.properties.itemInfo.mode == 'input'){
        val = this.getValue().value
      }
      else if (this.properties.itemInfo.mode == 'picker'){
        val = this.getValue().itemContect
      }
      else if(this.properties.itemInfo.mode == 'regionPicker'){
        val = this.getValue().region
      }

      if (this.properties.itemInfo.necessary && val == ''){
        return false
      }
      return testReg.test(this.getValue())
    }
  },
})