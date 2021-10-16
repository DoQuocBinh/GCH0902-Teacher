const express = require('express')
const { insertToDB, getAll, deleteObject,getDocumentById,updateDocument } = require('./databaseHandler')
const app = express()

app.set('view engine','hbs')
app.use(express.urlencoded({extended:true}))

app.post('/update', async (req,res)=>{
    const id = req.body.txtId
    const name = req.body.txtName
    const price = req.body.txtPrice   
    let updateValues ={$set : {name: name,price:price}};

    await updateDocument(id, updateValues,"Products")
    res.redirect('/')
})

app.get('/edit/:id',async (req,res)=>{
    const idValue = req.params.id
    //lay thong tin cu cua sp cho nguoi dung xem, sua
    const productToEdit = await getDocumentById(idValue,"Products")
    //hien thi ra de sua
    res.render("edit",{product:productToEdit})
})

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