// pages/person/person.js
const app = getApp()
var util = require('../../utils/util.js');
var personService = require('../../services/person.service.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu_foot_class_name:'menu-symbol-active',
    menu_like_class_name:'menu-symbol',
    gamelist: [
      { 'image_path': '../../assets/img/logo.jpg', 'title': '使命召唤', 'grade': 5.5, },
      { 'image_path': '../../assets/img/logo.jpg', 'title': '使命召唤', 'grade': 5.5, }
    ],
    hasUserInfo:false,
    userInfo:{},
    canIUse:wx.canIUse('button.open-type.getUserInfo'),
    symbol_name:'footprint',
    symbol_image_name:'footprint-image'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    }
  },
  changeActive:function(event){
    let vdata = util.GetEventData(event)
    if(this.data.menu_foot_class_name == 'menu-symbol-active'){
      let result = personService.GetFootprintGames('userId')
      this.setData({
        menu_foot_class_name:'menu-symbol',
        menu_like_class_name:'menu-symbol-active',
        symbol_name:'like',
        symbol_image_name:'like-image',
        gamelist:result
      })
    }else{
      let result = personService.GetLikeGames('userId')
      this.setData({
        menu_foot_class_name : 'menu-symbol-active',
        menu_like_class_name : 'menu-symbol',
        symbol_name:'footprint',
        symbol_image_name:'footprint-image',
        gamelist:result
      })
    }
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