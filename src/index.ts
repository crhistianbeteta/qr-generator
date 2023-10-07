import express, { json } from "express";

import generatorRoutes from './routes/qr-generator.routes';
const app = express();
const port = 3000;
console.log("directio", __dirname)
app.use(express.urlencoded({ extended: true }));
app.set('views', __dirname + '/views')
app.set('view engine', 'pug'); // Configurar Pug como el motor de vistas
//app.use('/static', express.static(__dirname + '/public'));
app.use(express.static('public'));
app.use(json())

app.use('/', generatorRoutes);



app.listen(port, () => {
    console.log(`Running QR Generator at port [${port}]`)
})
