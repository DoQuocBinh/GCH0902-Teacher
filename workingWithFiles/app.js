const express = require('express')
const fs = require('fs')

const app = express()
app.set('view engine','hbs')

const FILE_NAME = 'product.txt'

app.use(express.urlencoded({extended:true}))

function appendProduct(id,name,price){
    const product = '\n' + id + ";" + name + ";" + price
    fs.appendFileSync(FILE_NAME,product)
}

app.post('/insert',(req,res)=>{
    const id = req.body.txtId
    const name = req.body.txtName
    const price = req.body.txtPrice
    appendProduct(id,name,price)
    res.redirect('/')
})

app.get('/new',(req,res)=>{
    res.render('newProduct')
})

app.get('/',(req,res)=>{
    var products = fetchData()
    console.log(products)
    res.render('home',{product:products})
})

const PORT = process.env.PORT || 5000 

app.listen(PORT)
console.log("Running on port: ", PORT)

function fetchData() {
    const data = fs.readFileSync(FILE_NAME, 'utf8')
    const pros = data.split('\n')
    var products = []
    pros.forEach(pro => {
        let productAtributes = pro.split(';')
        const product = {
            id: productAtributes[0],
            name: productAtributes[1],
            price: productAtributes[2]
        }
        products.push(product)
    })
    return products
}
