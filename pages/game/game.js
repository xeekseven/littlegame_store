// pages/game/game.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search_key: 'rpg',
    background: ['lb1.jpg', 'lb2.jpg', 'lb3.jpg'],
    categoryrows1: [
      { 'image': '../../assets/icon/rpg.png', 'title': 'rpg' },
      { 'image': '../../assets/icon/rpg.png', 'title': '文字' },
      { 'image': '../../assets/icon/rpg.png', 'title': '冒险' },
      { 'image': '../../assets/icon/rpg.png', 'title': 'morpg' },
      { 'image': '../../assets/icon/rpg.png', 'title': 'act' }],
    categoryrows2: [
      { 'image': '../../assets/icon/fight.png', 'title': '动作' },
      { 'image': '../../assets/icon/fight.png', 'title': '解密' },
      { 'image': '../../assets/icon/fight.png', 'title': '人生' },
      { 'image': '../../assets/icon/fight.png', 'title': '哲理' },
      { 'image': '../../assets/icon/fight.png', 'title': '无类别' }],
    gamelist: [
      { 'rank': 1, 'image_path': '../../assets/img/logo.jpg', 'title': '使命召唤', 'grade': 5.5, 'tags': ['射击', '人生', '哲理', '战争'], 'des': 'hot' },
      { 'rank': 2, 'image_path': '../../assets/img/logo.jpg', 'title': '使命召唤2', 'grade': 1.5, 'tags': ['射击', '人生', '哲理', '战争'], 'des': 'hot' }
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