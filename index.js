const express = require('express');
const routerApi = require('./routers');

const app = express();
const port = 3000;

app.use(express.json());

/*const whitelist = ['http://localhost:8080','http://myapp.com']
const options = {
  origin: (origin, callback)=>{
    if(whitelist.includes(origin)){
      callback(null, true);
    } else{
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(whitelist));*/

routerApi(app);

app.get('/',(req,res)=>{
  res.send('Hola mi Server en Express');
});

app.listen(port, ()=>{
  console.log('Mi Port ' + port);
});
