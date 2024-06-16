const mongoose=require('mongoose')
const url="mongodb+srv://admin:admin123@cluster0.znpl9jp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(url)
const user=mongoose.model('demousers',{name:String,email:String})
const myUser= new user({name:'admin',email:'admin@gmail.com'})
myUser.save().then(()=>console.log('user added'))