var httphelper = require('../utils/httphelper.js');
var config = require('../services/config.js')


const GetData = (key)=>{
    let gamelist = []
    for(let index=0;index < 10;index++){
        let item = { 'rank': index, 'image_path': '../../assets/img/logo.jpg', 'title': '使命召唤'+index, 'grade': 5.5, 'tags': [`${key}`, '人生', '哲理', '战争'], 'des': 'hot' }
        gamelist.push(item)
    }
    return gamelist
}

const GetGameRecords = (categoryKey,pageIndex,pageSize) =>{
    // let url = get_game_records_url + "/${categoryKey}/${pageIndex}/${pageSize}";
    // let result = httphelper.httpget(url);
    let result = GetData(categoryKey)
    return result;
}

module.exports = {
    GetGames:GetGameRecords
}