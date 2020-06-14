// components/cus-input/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type: {type: String, value: 'text'}, // 输入框的类型
    inputStyle: {type: String, value: ''}, //input框样式
    inputType: {type: String, value: 'mobile'}, // 输入的文本的类型 手机号 验证码yzm
    placeholderStyle: {type: String, value: ''}, // placeholder样式
    errMsgStyle: {type: String, value: ''},
    errMsg: {type: String, value: '证件号码格式错误'},
    label: {type: String, value: ''},
    placehold: {type: String, value: ''}
  },
  options: {
    multipleSlots: true // 启用插槽
  },
  /**
   * 组件的初始数据
   */
  data: {
    value: '',
    showerrMsg: false
  },
lifetimes: {
  attached() {
    console.log(this.data.type)
  }
},
  /**
   * 组件的方法列表
   */
  methods: {
    onInput(e) {
      this.setData({value: e.detail.value})
      if (this.data.inputType == 'mobile' && this.data.value.length == 11) {
        this._inputReg(this.data.value, this.data.inputType)

        this.triggerEvent('input', {value: e.detail.value})

      } else if (this.data.inputType == 'yzm' && this.data.value.length == 6) {

        this._inputReg(this.data.value, this.data.inputType)

        this.triggerEvent('input', {value: e.detail.value})
      } 

      if (this.data.value.length == 0) this.setData({showerrMsg: false})
    },
    onBlur(e) {
      this.triggerEvent('blur', {value: e.detail.value})

      if (this.data.value.length != 0) 

        this._inputReg(this.data.value, this.data.inputType)
      
    },
    _inputReg(value, type) {
      let reg1 = /^1(3|4|5|6|7|8|9)\d{9}$/;
      let reg2 = /^\d{6}$/;
      switch (type) {
        case 'mobile': 
          if (!reg1.test(value)) this.setData({showerrMsg: true})
          else this.setData({showerrMsg: false})
          break;
        case 'yzm':
          if (!reg2.test(value)) this.setData({showerrMsg: true})
          else this.setData({showerrMsg: false})
          break;
      }
      
    }
  }
})
