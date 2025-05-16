import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { userInfo } from './utils/user.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = process.env.PORT || 5000;

const app = express();
app.use(express.static(path.join(__dirname,"./client/dist")));






app.get('/api/:username',(req,res) => {
    const userName = req.params.username;
    userInfo(userName,({login,followers,avatar,following,repos,name,bio,joined,location,blog,company,twitter}) => {
        if(!login){
            return res.status(404).json({error:"User not found or API error"});
        }
        res.json({login,followers,avatar,following,repos,name,bio,joined,location,blog,company,twitter});
        });
      
})

// app.get('*',(req,res) =>  {
//     res.sendFile(path.join(__dirname,"./client/dist/index.html"))
// });

// app.get('',(req,res) =>  {
//     res.sendFile(path.join(__dirname,"./client/dist/index.html"))
// });


app.listen(port,() => console.log('server started on port:',port))