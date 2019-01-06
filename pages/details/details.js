// pages/details/details.js
var util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu_intro_class_name:'menu-symbol-active',
    menu_comments_class_name:'menu-symbol',
    intro_content:"在一座山间小城中，一对低配劫匪、一个落魄的泼皮保安、一个身体残疾却性格彪悍的毒舌女以及一系列生活在社会不同轨迹上的小人物，在一个貌似平常的日子里，因为一把丢失的老枪和一桩当天发生在城中的乌龙劫案，从而被阴差阳错地拧到一起，发生的一幕幕令人啼笑皆非的荒诞喜剧。",
    game_details:[
      { 'key':'厂商','value':'鼓楼工作室'},
      { 'key':'更新日期','value':'2019-04-21'},
      { 'key':'平均加载时长','value':'2s'},
      { 'key':'游玩关注人数','value':'12131' }
    ],
    game_tags:['射击', '人生', '哲理', '战争'],
    selector:'intro',
    game_title:"天剑奇侠传",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.gameId)
  },
  changeActive:function(event){
    let vdata = util.GetEventData(event)
    if(this.data.menu_intro_class_name == 'menu-symbol-active'){
      this.setData({
        menu_intro_class_name:'menu-symbol',
        menu_comments_class_name:'menu-symbol-active',
        selector :"comments"
      })
    }else{
      this.setData({
        menu_intro_class_name : 'menu-symbol-active',
        menu_comments_class_name : 'menu-symbol',
        selector:"intro"
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