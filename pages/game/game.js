// pages/game/game.js
var gameService = require('../../services/game.service.js');
var util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    search_key: '',
    background: ['lb1.jpg', 'lb2.jpg', 'lb3.jpg'],
    categoryrows1: [
      { 'image': '../../assets/icon/rpg-dragon.png', 'title': 'rpg' },
      { 'image': '../../assets/icon/manage.png', 'title': '经营' },
      { 'image': '../../assets/icon/pagegame.png', 'title': '页游风' },
      { 'image': '../../assets/icon/chicken.png', 'title': '经营' },
      { 'image': '../../assets/icon/words.png', 'title': '文字' }
      ],
    categoryrows2: [
      { 'image': '../../assets/icon/puz.png', 'title': '益智'},
      
      { 'image': '../../assets/icon/airshot.png', 'title': '射击' },
      { 'image': '../../assets/icon/sport.png', 'title': '运动' },
      { 'image': '../../assets/icon/poker.png', 'title': '棋牌' },
      { 'image': '../../assets/icon/unknown.png', 'title': '独立'}
      ],
    gamelist: [
      { id:'aefa1-123', 'rank': 1, 'image_path': '../../assets/img/logo.jpg', 'title': '使命召唤', 'grade': 5.5, 'tags': ['射击', '人生', '哲理', '战争'], 'des': 'hot' },
      { id:'1fafa-112', 'rank': 2, 'image_path': '../../assets/img/logo.jpg', 'title': '使命召唤2', 'grade': 1.5, 'tags': ['射击', '人生', '哲理', '战争'], 'des': 'hot' }
    ],
    filterClass:{
      index:1,
      class_name:'triangle-up'
    }
  },
  changeFilterClass:function(event){
    console.log(event)
    if(this.data.filterClass.index!=event.currentTarget.dataset.index){
      this.setData({
        filterClass:{
          index:parseInt(event.currentTarget.dataset.index),
          class_name:'triangle-down'
        }
      })
    }else{
      if(this.data.filterClass.class_name == 'triangle-up'){
        this.setData({
          filterClass:{
            index:parseInt(event.currentTarget.dataset.index),
            class_name:'triangle-down'
          }
        })
      }else{
        this.setData({
          filterClass:{
            index:parseInt(event.currentTarget.dataset.index),
            class_name:'triangle-up'
          }
        })
      }
    }
    
  },
  GetGames:function(event){
    let key = event.currentTarget.dataset.key;
    let result = gameService.GetGames(key,1,1);
    //let thisGames = this.data.gamelist;
    //let gameRes = thisGames.concat(result)
    this.setData({
      gamelist:result
    })
  },
  gotoSearchPage:function(event){
    wx.navigateTo({
      url:'../search/search'
    })
  },
  getGameDetail:function(event){
    let vdata = util.GetEventData(event);
    console.log(vdata)
    let detailUrl = '../details/details?gameId='+vdata.id
    console.log(detailUrl)
    wx.navigateTo({
      url:detailUrl
    })
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