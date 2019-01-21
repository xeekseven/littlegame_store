// pages/comment_details/comment_details.js
var util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    star_empty_src:"../../assets/icon/star_empty.svg",
    star_active_src:"../../assets/icon/star_active.svg",
    evaluate_info:{
      grade:0,
      star_list:[
        { "star_url": "../../assets/icon/star_empty.svg"},
        { "star_url": "../../assets/icon/star_empty.svg"},
        { "star_url": "../../assets/icon/star_empty.svg"},
        { "star_url": "../../assets/icon/star_empty.svg"},
        { "star_url": "../../assets/icon/star_empty.svg"}
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let num = options.star_num
    console.log(num)
    this.CommentStartInit()
    this.setData({
      'evaluate_info.grade':num
    })
    for(let i = 0;i<num;i++){
      const key = 'evaluate_info.star_list['+i+'].star_url';
      this.setData({
        [key]:this.data.star_active_src
      })
    }
  },
  PublishComment:function(event){
    wx.showToast({
      title: '发表评论成功！',
      icon: 'success',
      duration: 2000
    })
    setTimeout(()=>{
      wx.navigateBack({
        delta: 1
      })
    },2000)
    
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
  UserComment:function(event){
    let data = util.GetEventData(event)
    let num = Number.parseInt(data.index)
    this.CommentStartInit()
    this.setData({
      'evaluate_info.grade':num
    })
    for(let i = 0;i<num;i++){
      const key = 'evaluate_info.star_list['+i+'].star_url';
      this.setData({
        [key]:this.data.star_active_src
      })
    }
  },
  CommentStartInit:function(){
    for(let i = 0;i<5;i++){
      const key = 'evaluate_info.star_list['+i+'].star_url';
      this.setData({
        [key]:this.data.star_empty_src
      })
    }
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