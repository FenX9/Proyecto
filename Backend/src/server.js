const express = require("express");
const app = express();

const cors = require("cors");
app.use(corse());

//API HOME: Rutas (app.get("/", algo)) , Endpoint ((req, res) => {})
app.get("/", (req, res) => {
    res.send("hola mundo");
});

//API consultar
app.get("/Login", cors(), (req, res) =>{

})

app.listen(8080, () => {
    console.log("Servidor corriendo en el puerto 8080")
});