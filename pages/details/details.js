// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    game_details:[
      { 'key':'厂商','value':'鼓楼工作室'},
      { 'key':'更新日期','value':'2019-04-21'},
      { 'key':'平均加载时长','value':'2s'},
      { 'key':'游玩关注人数','value':'12131' }
    ],
    game_tags:['射击', '人生', '哲理', '战争'],
    selector:'intro'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.gameId)
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