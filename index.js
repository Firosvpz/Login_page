const express =require("express")
const app=express()
const path=require('path')

const port=process.env.PORT || 3000

app.set('view engine','ejs')

app.use(express.static(path.join(__dirname,'public')))

app.use('/images', express.static(path.join(__dirname,'public/images')));


app.use(express.urlencoded({extended:true}))

const credential=[
    {username:'abc',password:'efg'},
    {username:'hij',password:'klm'}
]

app.get('/',(req,res)=>{
    res.render('login')
})

app.post('/login',(req,res)=>{
    const {username,password}=req.body
    const user=credential.find(u=>u.username===username && u.password===password)
    if(user){
        res.render('dashboard',{username:user.username})


    }else{
        res.send('Login failed..Please check your credential')
    }
})

app.listen(port,()=>{
    console.log(`Server started on port : ${port}` );
})