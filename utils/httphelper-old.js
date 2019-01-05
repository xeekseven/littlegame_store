
const HttpGet = (url)=>{
    return fetch(url)
    .then(r=>r.json())
    .catch(e=>console.log('ex',e))
}

const HttpPost = (url,data) =>{
    let config = {
        method:'POST',
        mode:'no-cors',
        credentials:'include',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:data
    }
    return HttpPostConfig(url,config)
}

const HttpPostConfig = (url,config)=>{
    return fetch(url,config)
    .then(r=> r.json())
    .catch(e=> console.log('Post ex',e))
}

module.exports = {
    httpget:HttpGet,
    httppost:HttpPost
}