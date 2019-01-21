// components/comments/comments.js
var utils = require('../../utils/util.js')
var commentService = require('../../services/comment.service.js')

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    gameId: {
      type: String,
      value: ""
    },
    userId:{
      type:String,
      value:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    comments: [
      { "id":"afafafa-aaf-vaad","index":1, "isZan":true,"nickName": "刺入有数", "starNum": 3, "time": "2019年1月1日", "zanNum": 31, "avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eo0hfXSbezNWSibLnH5njQ1MlCmxKyc9Nict1mN1lib8JpPD973YWsbGJAgavYsibnHfySsrIuj9hQpYw/132", content:"2015年8月，美国纽约帝国大厦上演了一幕灯光秀，大厦南面中段33层楼的墙面上3小时内播放了160种濒危动物图像。这场灯光秀不为别的，只为宣传一部纪录片—《竞相灭绝》（Racing Extinction）导演路易·西霍尤斯（Louie Psihoyos）上一部作品"},
      { "id":"afafafa-aaf-va2ad","index":2,"isZan":false,"nickName": "刺入有数", "starNum": 3, "time": "2019年1月1日", "zanNum": 31, "avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eo0hfXSbezNWSibLnH5njQ1MlCmxKyc9Nict1mN1lib8JpPD973YWsbGJAgavYsibnHfySsrIuj9hQpYw/132", content:"2015年8月，美国纽约帝国大厦上演了一幕灯光秀，大厦南面中段33层楼的墙面上3小时内播放了160种濒危动物图像。这场灯光秀不为别的，只为宣传一部纪录片—《竞相灭绝》（Racing Extinction）导演路易·西霍尤斯（Louie Psihoyos）上一部作品"},
      { "id":"af13afafa-aaf-vaad","index":3,"isZan":false,"nickName": "刺入有数", "starNum": 3, "time": "2019年1月1日", "zanNum": 31, "avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eo0hfXSbezNWSibLnH5njQ1MlCmxKyc9Nict1mN1lib8JpPD973YWsbGJAgavYsibnHfySsrIuj9hQpYw/132", content:"2015年8月，美国纽约帝国大厦上演了一幕灯光秀，大厦南面中段33层楼的墙面上3小时内播放了160种濒危动物图像。这场灯光秀不为别的，只为宣传一部纪录片—《竞相灭绝》（Racing Extinction）导演路易·西霍尤斯（Louie Psihoyos）上一部作品"},
      { "id":"afafafa-aavaf-vaad","index":4,"isZan":true,"nickName": "刺入有数", "starNum": 3, "time": "2019年1月1日", "zanNum": 31, "avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eo0hfXSbezNWSibLnH5njQ1MlCmxKyc9Nict1mN1lib8JpPD973YWsbGJAgavYsibnHfySsrIuj9hQpYw/132", content:"2015年8月，美国纽约帝国大厦上演了一幕灯光秀，大厦南面中段33层楼的墙面上3小时内播放了160种濒危动物图像。这场灯光秀不为别的，只为宣传一部纪录片—《竞相灭绝》（Racing Extinction）导演路易·西霍尤斯（Louie Psihoyos）上一部作品"}
    ],
    zanUrl:'../../assets/icon/zan.svg',
    zanedUrl:'../../assets/icon/zaned.svg',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    ClickZan: function(event){
      let data = utils.GetEventData(event)
      commentService.SetZan(this.data.gameId,this.data.userId,data.index)
      let index = data.index - 1
      let zankey = 'comments['+index+'].isZan'
      let zanNumKey = 'comments['+index+'].zanNum'

      let zanNum = this.data.comments[index].zanNum + 1
      if(this.data.comments[index].isZan){
        zanNum-=2;
      }
      this.setData({
        [zankey]:!this.data.comments[index].isZan,
        [zanNumKey]:zanNum
      })
      return true
    }
  },
  lifetimes: {
    attached() {
      // 在组件实例进入页面节点树时执行
    },
  }

})
