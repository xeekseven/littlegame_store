
const base_url = "127.0.0.1:5000/api/game_records"

const get_game_records_url = base_url+"/getrecords"

const get_footprint_game_records_url = base_url+"/getfootprints"

const get_like_game_records_url = base_url + "/getlikes"

module.exports = {
    base_url:base_url,
    get_game_records_url:get_game_records_url,
    get_footprint_game_records_url:get_footprint_game_records_url,
    get_like_game_records_url:get_like_game_records_url
}