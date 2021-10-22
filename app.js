const express = require ( "express" )
const path = require ( "path" )
const app = express()

const port = process.env.PORT||3000;
app.use("/static",express.static("public"));

app.listen (port,() => {
    console.log ("App Corriendo")
});

app.get ("/home",(req,res) => {
    res.sendFile(path.join(__dirname,"/views/home.html"))
});
app.get ("/misCompras.html", (req,res) => {
    res.sendFile (path.join (__dirname, "/views/misCompras.html"))
});

app.get ("/ingresa.html", (req,res) => {
    res.sendFile (path.join (__dirname, "/views/ingresa.html"))
});

app.get ("/creaTuCuenta.html", (req,res) => {
    res.sendFile (path.join (__dirname, "/views/creaTuCuenta.html"))
});
