// components/userinfo/userinfo.js
const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    userInfo: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    hasUserInfo:false
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  pageLifetimes: {
    show() {

    },
  },
  lifetimes: {
    created() {
      console.log("in created");
      console.log(app);
      if (app.globalData.userInfo) {
        this.setData({
          userInfo: app.globalData.userInfo,
          hasUserInfo: true
        })
      } else if (this.data.canIUse) {
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
    attached() {
      // 在组件实例进入页面节点树时执行
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  // 以下是旧式的定义方式，可以保持对 <2.2.3 版本基础库的兼容
  attached() {
    // 在组件实例进入页面节点树时执行
  },
  detached() {
    // 在组件实例被从页面节点树移除时执行
  }

})
