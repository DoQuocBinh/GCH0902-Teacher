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
function deleteProduct(id){
    var products = fetchData();
    const productLeft = products.filter(p=>p.id != id);

    var fileContent = ''
    productLeft.forEach(element => {
        let product = element.id + ';' + element.name + ';' + element.price
        fileContent += product + '\n'
    });
    fs.writeFileSync(FILE_NAME,fileContent.trim(),"utf-8");
}

app.get('/delete',(req,res)=>{
    const id = req.query.id;
    deleteProduct(id)
    res.redirect('/')
})

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
    if(data.trim().length== 0)
        return [];
    const pros = data.split('\n')
    var products = []
    for(i=0;i<pros.length;i++){
        let pro = pros[i]
        if(pro.trim().length==0)
            continue;
        let productAtributes = pro.split(';')
        const product = {
            id: productAtributes[0],
            name: productAtributes[1],
            price: productAtributes[2]
        }
        products.push(product)
    }
    return products
}
