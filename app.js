const express = require ("express")
const path = require("path")
const app = express()

const port = process.env.PORT || 3030;

const publicFolderPath = path.resolve(__dirname, "./public")
app.use(express.static(publicFolderPath));

app.listen (port, ()=> {
    console.log("Servidor funcionando")
})

app.get ("/", (req,res) => {
    res.sendFile (path.join (__dirname, "/views/home.html"))
})


app.get ("/home", (req,res) => {
    res.sendFile (path.join (__dirname, "/views/home.html"))
})

app.get ("/mis-compras", (req,res) => {
    res.sendFile (path.join (__dirname, "/views/misCompras.html"))
})

app.get ("/ingresa", (req,res) => {
    res.sendFile (path.join (__dirname, "/views/ingresa.html"))
})

app.get ("/creaTuCuenta", (req,res) => {
    res.sendFile (path.join (__dirname, "/views/creaTuCuenta.html"))
})

app.get ("/ayuda", (req,res) => {
res.sendFile (path.join (__dirname, "/views/ayuda.html"))
})

app.get ("/vender", (req,res) => {
res.sendFile (path.join (__dirname, "/views/vender.html"))
})

app.get ("/tiendasOficiales", (req,res) => {
res.sendFile (path.join (__dirname, "/views/tiendasOficiales.html"))
})

app.get ("/ofertas", (req,res) => {
res.sendFile (path.join (__dirname, "/views/ofertas.html"))
})
