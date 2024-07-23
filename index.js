const express=require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const PORT=8080;
app.get('/api/user',(req,res)=>{
    res.json({
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com'
    });``
})

app.listen(PORT,()=>{
    console.log("listening on " + PORT);
})