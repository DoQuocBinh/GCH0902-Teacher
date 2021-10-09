const express = require('express')
const { insertToDB, getAll, deleteObject } = require('./databaseHandler')
const app = express()

app.set('view engine','hbs')
app.use(express.urlencoded({extended:true}))

app.get('/',async (req,res)=>{
    var result = await getAll("Products")
    res.render('home',{products:result})
})
app.get('/delete/:id',(req,res)=>{
    const idValue = req.params.id
    //viet ham xoa object dua tren id
    deleteObject(idValue,"Products")
    res.redirect('/')
})
app.post('/insert',(req,res)=>{
    const name = req.body.txtName
    const price = req.body.txtPrice
    //xay dung doi tuong insert
    const obj = {name:name,price:price}
    //goi ham de insert vao DB
    insertToDB(obj,"Products")
    res.redirect('/')
})

const PORT = process.env.PORT || 5000
app.listen(PORT)
console.log('Server is running!')