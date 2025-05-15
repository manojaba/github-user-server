

const request = require('request');




const userInfo = (username,callback) =>{
    const url = 'https://api.github.com/users/'+ encodeURIComponent(username)
    request({url:url,json:true,headers:{'User-Agent':'node.js'}},(error,response,body) => {
        console.log(body.login,body.name, body.joined);
        callback({login:body.login,followers:body.followers,avatar:body.avatar_url,following:body.following, repos:body.public_repos,name:body.name,bio:body.bio,joined:body.created_at,location:body.location,blog:body.blog,company:body.company,twitter:body.twitter_username})
    });
}



module.exports = userInfo;