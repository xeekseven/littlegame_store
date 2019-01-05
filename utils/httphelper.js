
const HttpGet = url => {
    return new Promise((resolve, reject) => {
        wx.request({
            url,
            method: 'GET',
            header: {
                "content-type": "application/json"
            },
            success(res) {
                resolve(res)
            },
            fail(err) {
                reject(err)
            }
        })
    })
}

const HttpPost = (url,data)=>{
    return new Promise((resolve, reject) => {
        wx.request({
            url,
            method: 'post',
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success(res) {
                resolve(res)
            },
            fail(err) {
                reject(err)
            }
        })
    })
}

module.exports = {
    httpget: HttpGet,
    httppost: HttpPost
}