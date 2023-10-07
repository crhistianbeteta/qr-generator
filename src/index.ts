import express, { json } from "express";

import generatorRoutes from './routes/qr-generator.routes';
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set('views', __dirname + '/views')
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(json())

app.use('/', generatorRoutes);



app.listen(port, () => {
    console.log(`Running QR Generator at port [${port}]`)
})
