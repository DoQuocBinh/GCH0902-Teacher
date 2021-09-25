const express = require('express')
const app = express()

app.set('view engine','hbs')
app.use(express.urlencoded({extended:true}))

var ds = [
        {name: 'Harry potter', picURL : 'https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg'},
        {name: 'Doremon', picURL : 'https://backstage.vn/wp-content/uploads/2019/02/271aa6497c884cc38a2ce23b91adc3a4-750x375.jpg'}
    ]

app.post('/save',(req,res)=>{
    var name = req.body.txtName
    var picURL = req.body.txtPictureURL
    ds.push({name:name,picURL:picURL})
    res.redirect('/')

})    

app.get('/new',(req,res)=>{
    res.render('new')
})

app.get('/',(req,res)=>{
    var today = new Date();
    var name = "Do Quoc Binh"
    
    res.render('index',{ht:today,name: name,ds:ds})
})

app.get('/help',function (req,res){
    res.render('help')
})

const PORT = process.env.PORT || 5000
app.listen(PORT)
console.log("Server is running!")
