// pages/preview/preview.js
Page({
  /**
   * 页面函数
   */
  handleJump: function() {
    wx.navigateTo({
      url:  '../template/template'
    })
  },
  bindGetUserInfo: function(infos) {
    let { detail } = infos
    // 具体 https://developers.weixin.qq.com/miniprogram/dev/api/open.html#wxgetuserinfoobject
    console.log('获取用户登录信息：', detail) // 发送后端 TODO
    // encryptedData  包含 opend uid 敏感信息需要后端进行解密操作  TODO
    if (detail.errMsg.indexOf('deny') !== -1) {
      console.log('登录失败')
    } else {
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 2000
      });  
      //  跳转到template页面
     var t = null
     var _this = this
     t = setTimeout(function(){
       _this.handleJump();
     }, 2000)
     t = null
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    templateType: null,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (!options.template) return;
    let template = options.template
    this.setData({
      templateType: options.template ? template : null
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})