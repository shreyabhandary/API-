import express, {Application, Request, Response} from 'express';
const app: Application = express();
import axios from 'axios';
const port: number = 5000;
app.set('views','src/views');   //set the views directory that contains the template ejs,pug or mustache files
app.set('view engine','ejs');    // Set view engine as the templating engine that you are using
app.get('/',async (req: Request, res: Response) => {
    axios.get('https://fakestoreapi.com/products')
    .then( (response)=>{    
        let data = [];
        for(let i=0;i<10;i++){
             data.push(response.data[i]);  
        }; 
        res.render('index.ejs', {data: data});
    });
});
// app.post('/',async (req: Request, res: Response) => {
//     console.log(req.body);
//     // axios.get('https://fakestoreapi.com/products')
//     // .then( (response)=>{    
//     //     let data = [];
//     //     for(let i=0;i<10;i++){
//     //          data.push(response.data[i]);  
//     //     }; 
//     //     data.push(req.body);
//     //     res.render('index.ejs', {data: data});
//     // });
// });
 
app.listen(port, function(){
    console.log(`listenting on port ${port}`)
});