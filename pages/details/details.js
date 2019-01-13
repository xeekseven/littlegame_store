// pages/details/details.js
const app = getApp()
var util = require('../../utils/util.js');


Page({

  /**
   * 页面的初始数据
   */
  data: {
    game_info:{
      "game_id":"afafa-afa-zvaf",
      "game_title":"天剑奇侠传",
      "intro_content":"在一座山间小城中，一对低配劫匪、一个落魄的泼皮保安、一个身体残疾却性格彪悍的毒舌女以及一系列生活在社会不同轨迹上的小人物，在一个貌似平常的日子里，因为一把丢失的老枪和一桩当天发生在城中的乌龙劫案，从而被阴差阳错地拧到一起，发生的一幕幕令人啼笑皆非的荒诞喜剧。",
      "game_details":[
        { 'key':'厂商','value':'鼓楼工作室'},
        { 'key':'更新日期','value':'2019-04-21'},
        { 'key':'平均加载时长','value':'2s'},
        { 'key':'游玩关注人数','value':'12131' }
      ],
      "game_tags":['射击', '人生', '哲理', '战争'],
      "is_like":false,
      "qr_code_url":"https://img1.91ud.com/img2019/1/11/9/2019011171311725.jpg"
    },
    menu_intro_class_name:'menu-symbol-active',
    menu_comments_class_name:'menu-symbol',
    selector:'intro',
    isIntro:true,
    game_grade_list:[
      { "key":5,"value":"450rpx" },
      { "key":4,"value":"350rpx" },
      { "key":3,"value":"250rpx" },
      { "key":2,"value":"50rpx" },
      { "key":1,"value":"150rpx" }
    ],
    userInfo:{},
    canIUse:wx.canIUse('button.open-type.getUserInfo'),
    star_empty_src:"../../assets/icon/star_empty.svg",
    star_active_src:"../../assets/icon/star_active.svg",
    evaluate_info:{
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
    console.log(options['gameId'])
    // wx.showModal({
    //  title: '提示',
    //  content: options['gameId']
    // })
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // }
  },
  GoToHome:function(event){
    wx.switchTab({
      url: '../game/game'
    })
  },
  LikeGame:function(event){
    let tmp_like = !this.data.game_info['is_like']
    console.log(tmp_like)
    
    this.setData({
      'game_info.is_like':!this.data.game_info['is_like']
    })
    console.log(this.data.game_info['is_like'])
  },
  changeActive:function(event){
    //let vdata = util.GetEventData(event)
    this.setData({
      isIntro :!this.data.isIntro
    })
  },
  PlayGame:function(event){
    let url_list = [this.data.game_info['qr_code_url']]
    wx.previewImage({
      current: this.data.game_info['qr_code_url'], // 当前显示图片的http链接
      urls: url_list // 需要预览的图片http链接列表
    })
  },
  ShareGame:function(event){
    console.log("in share");
      
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
    return {
      title: this.game_info['game_title'], // 转发后 所显示的title
      path: '/pages/details/details?gameId='+this.game_info['game_id'], // 相对的路径
      success: (res)=>{    // 成功后要做的事情
        console.log(res.shareTickets[0])
        // console.log
       
        wx.getShareInfo({
          shareTicket: res.shareTickets[0],
          success: (res)=> { 
            that.setData({
              isShow:true
            }) 
            console.log(that.setData.isShow)
           },
          fail: function (res) { console.log(res) },
          complete: function (res) { console.log(res) }
        })
      },
      fail: function (res) {
        // 分享失败
        console.log(res)
      }
    }
  }
})