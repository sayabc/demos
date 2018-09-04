// pages/template/template.js
Page({
  /**
   * 自定义函数
   */
  handleSelectItem: function() {
      
    wx.navigateTo({
      url: '../stage/stage'
    })    
  },
  /**
   * 页面的初始数据
   */
  data: {
    templateList: [
      {
        template_id: '13',
        template_img_url: './images/pic_160.png',
        template_name: 'BeiJing',
        template_author: 'Roise',
        template_up_time: '2081.9.9'
      }, {
        template_id: '14',
        template_img_url: './images/pic_160.png',
        template_name: 'New York',
        template_author: 'Jack',
        template_up_time: '2018.9.9'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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