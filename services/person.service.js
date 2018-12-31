var httphelper = require('../utils/httphelper.js');
var config = require('./config.js')

const GetData = (key) => {
    let gamelist = []
    for (let index = 0; index < 10; index++) {
        let item = { 'image_path': '../../assets/img/logo.jpg', 'title': `${key}`+'使召唤' + index, 'grade': 5.5}
        gamelist.push(item)
    }
    return gamelist
}

const GetFootprintGames = (userId,pageIndex, pageSize) => {
    //let url = config.get_footprint_game_records_url + "/${categoryKey}/${pageIndex}/${pageSize}";
    // let result = httphelper.httpget(url);
    let result = GetData('footprint')
    return result;
}
const GetLikeGames = (userId,pageIndex, pageSize) => {

    let result = GetData('like')
    return result
}
module.exports = {
    GetFootprintGames: GetFootprintGames,
    GetLikeGames:GetLikeGames
}