const express = require('express');
const app = express();
const port = 5000;

app.get("/",(req,res)=>{
    console.log("HOLA consola");
    res.send("HOLA MUNDO esto es una pagina")
})
app.get("/mensaje",(req,res)=>{
    res.send("MENSAJE")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })



