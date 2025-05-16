const express = require('express');
const app = express();
const request = require('request');
const userInfo = require('./utils/user.js');
const port = process.env.PORT || 5000;
const path = require('path');

app.use(express.static(path.join(__dirname,"./client/dist")));






app.get('/api/:username',(req,res) => {
    const userName = req.params.username;
    userInfo(userName,({login,followers,avatar,following,repos,name,bio,joined,location,blog,company,twitter}) => {
        res.json({login,followers,avatar,following,repos,name,bio,joined,location,blog,company,twitter})
        });
      
})

// app.get('*',(req,res) =>  {
//     res.sendFile(path.join(__dirname,"./client/dist/index.html"))
// });

app.get('',(req,res) =>  {
    res.sendFile(path.join(__dirname,"./client/dist/index.html"))
});


app.listen(port,() => console.log('server started on port:',port))