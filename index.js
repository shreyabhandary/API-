const express =require('express');
const ejs =require('ejs')
const axios =require('axios');
const products =express()





var listener = products.listen(8888, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});




products.set('view engine','ejs');
products.set('views','./views');

products.get('/getproducts',async (req,res)=>{


 await  axios.get('https://fakestoreapi.com/products')
  .then((response) =>{
    let data =response.data;
    res.render('index.ejs',{data:data});

  });

  




  products.post('/postproducts',async (req,res)=>{
      
      let newProduct ={
        "id":parseInt(req.body.id),
        "title":req.body.title,
        "price":parseFloat(req.body.price),
        "description":req.body.desc,
        "category":req.body.image,
        "rating":{
          "rate":parseFloat(req.body.rate),
          "count":parseInt(req.body.count)
        }
      }


      await axios.get('https://fakestoreapi.com/products')
      .then(response => {
          let result =response.data.slice(0,10)
          products=[...result]
          products.push(newProduct)



      }).catch(error =>{
        console.error(error);
      });

      res.render('index.ejs',{data:data});


  })
  
  
  
  


});






























/*const axios = require('axios');
const express = require('express');
const app=express();
const port = 3000


axios.get('https://fakestoreapi.com/products')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed

    app.get("", async (req, res, next) => {
        console.log("'/test' call");
      
           res = await axios.get('https://fakestoreapi.com/products');
         
    })
        })
  
app.listen(port,()=>console.log(`app listening at http://localhost:${port}`));





































/*const axios = require('axios');
const express = require('express');
const app=express();
const port = 3000


axios.get('https://fakestoreapi.com/products')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed

    app.get("", async (req, res, next) => {
        console.log("'/test' call");
      
           res = await axios.get('https://fakestoreapi.com/products');
         
    })
        })
  
app.listen(port,()=>console.log(`app listening at http://localhost:${port}`));









/*
const axios = require('axios').default;
var express = require('express');
var app = express();
app.get("/", (req, res,) => {
    
    const response = axios.get('https://fakestoreapi.com/products');
    res.json(response);
    console.log(response);



})
app.listen(3000);{
    console.log("its on 3000")
}






app.get("/test", async (req, res, next) => {
    console.log("'/test' call");
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      res.json(data);
    }
    catch (err) {
      next(err)
    }
  })

  */