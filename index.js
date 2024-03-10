const app=require('./app');
const db=require('./config/db')
const UserModel=require('./models/user.model')
const port=3000;


app.get('/',(req,res)=>{
    res.send("hello")
})
app.listen(port,()=>{
    console.log('Serevr listening on http://localhost:${port}');
})