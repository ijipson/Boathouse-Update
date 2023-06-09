const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post('/update',(req,res)=>{
    const formData=req.body;
    res.send('Content updated successfully');
})
const port = 3004;
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})

